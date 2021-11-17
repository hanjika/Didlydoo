const main= document.querySelector('main')
const eventSection= document.querySelector('.eventSection')
const guestSection= document.querySelector('.guestSection')
const inputEvent= document.querySelector('.events')
const inputGuest= document.querySelector('.guests')

fetch("http://localhost:3000/api/events/")
.then(response => response.json())
.then(json => {
    for (const event of json) {
        var article= document.createElement('article')
        eventSection.appendChild(article)
        var name= document.createElement('h3')
        name.innerHTML= event.name
        article.appendChild(name)

        var description= document.createElement('p')
        description.innerHTML= event.description
        article.appendChild(description)
        var section= document.createElement('section')
        section.setAttribute('class', 'dates')
        article.appendChild(section) 
             
        for (const date of event.dates) {
            const sectionDate= document.createElement('section')
            section.appendChild(sectionDate)
            var possibleDate= document.createElement('p')
            possibleDate.innerHTML= date.date
            sectionDate.appendChild(possibleDate)         
        }
        for (const names of event.dates[0].attendees) {
        var guestList= document.createElement('section')
        article.appendChild(guestList)
        var guest= document.createElement('p')
        guest.innerHTML= names.name

        var attend= document.createElement('p')
        attend.innerHTML= names.available
        guestList.appendChild(guest)

        guestList.setAttribute('class', 'guest')
        guestList.appendChild(attend)
        }

        const attendanceForm = document.createElement('form');
        attendanceForm.classList.add('form-attend');

        const attendeeName = document.createElement('input');
        attendeeName.setAttribute('type', 'text');
        attendeeName.setAttribute('name', 'name');
        attendeeName.setAttribute('placeholder', 'Your name');
        attendeeName.required = true;

        attendanceForm.appendChild(attendeeName);
        for (const date of event.dates) {
            const radioBtns = document.createElement('div');
            radioBtns.classList.add('radio-buttons');

            const available = document.createElement('input');
            available.setAttribute('type', 'radio');
            available.setAttribute('id', 'yes' + date.date);
            available.setAttribute('value', 'yes' + date.date);
            available.setAttribute('name', date.date);
            available.required = true;

            const availableLabel = document.createElement('label');
            availableLabel.setAttribute('for', 'yes' + date.date);
            availableLabel.innerText = "Y";

            const unavailable = document.createElement('input');
            unavailable.setAttribute('type', 'radio');
            unavailable.setAttribute('id', 'no' + date.date);
            unavailable.setAttribute('value', 'no' + date.date);
            unavailable.setAttribute('name', date.date);

            const unavailableLabel = document.createElement('label');
            unavailableLabel.setAttribute('for', 'no' + date.date);
            unavailableLabel.innerText = "N";

            radioBtns.appendChild(available);
            radioBtns.appendChild(availableLabel);
            radioBtns.appendChild(unavailable);
            radioBtns.appendChild(unavailableLabel);
            attendanceForm.appendChild(radioBtns);
        }

        const addAttendance = document.createElement('button');
        addAttendance.innerText = 'Add';
        addAttendance.classList.add('attendance-button');
        addAttendance.setAttribute('id', event.id);
        addAttendance.addEventListener('click', attendanceAdd);

        attendanceForm.appendChild(addAttendance);
        article.appendChild(attendanceForm);
    }
})




