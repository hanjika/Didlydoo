const main=document.querySelector("main"),eventSection=document.querySelector(".eventSection"),inputEvent=document.querySelector(".events"),inputGuest=document.querySelector(".guests");fetch("http://localhost:3000/api/events/").then((e=>e.json())).then((e=>{for(const v of e){var t=document.createElement("article");t.setAttribute("id",v.id),eventSection.appendChild(t);var n=document.createElement("div");n.setAttribute("class","event-title");var d=document.createElement("h3");d.classList.add("title"),d.innerHTML=v.name;var a=document.createElement("button");a.innerText="Edit event",a.classList.add("edit-event-button"),a.setAttribute("id",v.id),a.addEventListener("click",editEvent);var i=document.createElement("button");i.innerText="Delete event",i.classList.add("delete-event-button"),i.setAttribute("id",v.id),i.addEventListener("click",deleteEvent),n.appendChild(d),n.appendChild(a),n.appendChild(i),t.appendChild(n);var r=document.createElement("p");r.classList.add("description"),r.innerHTML=v.description,t.appendChild(r);var s=document.createElement("p");s.classList.add("author"),s.innerHTML="Posted by "+v.author,t.appendChild(s);var c=document.createElement("section");c.setAttribute("class","dates"),t.appendChild(c);var o=document.createElement("section");o.setAttribute("class","guests"),c.appendChild(o);var l=document.createElement("p");o.appendChild(l);for(const e of v.dates[0].attendees){var u=document.createElement("p");u.innerHTML=e.name,o.appendChild(u)}for(const e of v.dates){const t=document.createElement("section");t.setAttribute("class","date-info"),c.appendChild(t);var p=document.createElement("p");p.innerHTML=new Date(e.date).toLocaleDateString(),t.appendChild(p);for(const n of e.attendees){var m=document.createElement("p");1==n.available&&(m.innerHTML="V",m.classList.add("true")),0==n.available&&(m.innerHTML="X",m.classList.add("false")),t.appendChild(m)}}const e=document.createElement("form");e.classList.add("form-attend");const b=document.createElement("input");b.setAttribute("type","text"),b.setAttribute("name","name"),b.setAttribute("placeholder","Your name"),b.required=!0,e.appendChild(b);for(const t of v.dates){const n=document.createElement("div");n.classList.add("radio-buttons");const d=document.createElement("input");d.setAttribute("type","radio"),d.setAttribute("id","yes"+t.date+v.id),d.setAttribute("value","yes"),d.setAttribute("name",t.date),d.required=!0;const a=document.createElement("label");a.setAttribute("for","yes"+t.date+v.id),a.innerText="V";const i=document.createElement("input");i.setAttribute("type","radio"),i.setAttribute("id","no"+t.date+v.id),i.setAttribute("value","no"),i.setAttribute("name",t.date);const r=document.createElement("label");r.setAttribute("for","no"+t.date+v.id),r.innerText="X",n.appendChild(d),n.appendChild(a),n.appendChild(i),n.appendChild(r),e.appendChild(n)}const h=document.createElement("button");h.innerText="+",h.classList.add("attendance-button"),h.setAttribute("id",v.id),h.addEventListener("click",attendanceAdd),t.appendChild(e),e.appendChild(h)}}));
//# sourceMappingURL=index.76ea344a.js.map