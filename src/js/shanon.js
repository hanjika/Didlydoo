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
        article.setAttribute('id', event.id)
        eventSection.appendChild(article)

        var header = document.createElement('div');
        header.setAttribute('class', 'event-title');

        var name= document.createElement('h3');
        name.classList.add('title');
        name.innerHTML= event.name;

        var editEventBtn = document.createElement('button');
        editEventBtn.innerText = 'Edit event'
        editEventBtn.classList.add('edit-event-button');
        editEventBtn.setAttribute('id', event.id);
        editEventBtn.addEventListener('click', editEvent);

        var deleteEventBtn = document.createElement('button');
        deleteEventBtn.innerText = 'Delete event'
        deleteEventBtn.classList.add('delete-event-button');
        deleteEventBtn.setAttribute('id', event.id);
        deleteEventBtn.addEventListener('click', deleteEvent);

        header.appendChild(name);
        header.appendChild(editEventBtn);
        header.appendChild(deleteEventBtn);
        article.appendChild(header);

        var description= document.createElement('p');
        description.classList.add('description');
        description.innerHTML= event.description;
        article.appendChild(description);

        var author = document.createElement('p');
        author.classList.add('author');
        author.innerHTML= 'Posted by ' + event.author;
        article.appendChild(author);

        var section= document.createElement('section')
        section.setAttribute('class', 'dates')
        article.appendChild(section) 

        var guestList= document.createElement('section')
        guestList.setAttribute('class', 'guests')
        section.appendChild(guestList)

        var emptyP = document.createElement('p');
        guestList.appendChild(emptyP);
        for (const names of event.dates[0].attendees) {
            var guest= document.createElement('p')
            guest.innerHTML= names.name

            guestList.appendChild(guest)
        }

        for (const date of event.dates) {
            const sectionDate= document.createElement('section')
            section.appendChild(sectionDate)
            var possibleDate= document.createElement('p')
            possibleDate.innerHTML= date.date
            sectionDate.appendChild(possibleDate) 

            for (const x of date.attendees) {
                var available= document.createElement('p')
                available.innerHTML= x.available
                sectionDate.appendChild(available) 
            }   
        }

        /* To add attendance to existing events */

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
            available.setAttribute('id', 'yes' + date.date + event.id);
            available.setAttribute('value', 'yes');
            available.setAttribute('name', date.date);
            available.required = true;

            const availableLabel = document.createElement('label');
            availableLabel.setAttribute('for', 'yes' + date.date + event.id);
            availableLabel.innerText = "Y";

            const unavailable = document.createElement('input');
            unavailable.setAttribute('type', 'radio');
            unavailable.setAttribute('id', 'no' + date.date + event.id);
            unavailable.setAttribute('value', 'no');
            unavailable.setAttribute('name', date.date);

            const unavailableLabel = document.createElement('label');
            unavailableLabel.setAttribute('for', 'no' + date.date + event.id);
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




