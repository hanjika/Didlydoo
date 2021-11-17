// const addDateBtn = document.querySelector('.add-new-date-button');
// addDateBtn.addEventListener('click', addAdditionalDate);

// function addAdditionalDate(e) {
//     const parentDiv = document.querySelector('.event-dates');
//     const newDateInput = document.createElement('input');
//     newDateInput.setAttribute('type', 'date');

//     parentDiv.insertBefore(newDateInput, addDateBtn);
// }

// const form = document.querySelector('.event-form');
// form.addEventListener('submit', addEvent);

// function addEvent(e) {
//     e.preventDefault();
//     console.log('hello');

//     const formData = new FormData(this);
//     fetch('http://localhost:3000/api/events/', {
//         method: 'post',
//         body: formData
//     }).then(function(response) {
//         return response.text();
//     }).then(function(text) {
//         console.log(text);
//     }).catch (error) {}
// }

// const eventName = 'Shanons party';
// const eventDates = ['2021-12-15'];
// const eventAuthor = 'Hanna';
// const eventDescription = 'Come to the party';

// const data = {
//     name: eventName,
//     dates: eventDates, 
//     author: eventAuthor, 
//     description: eventDescription
// };

// const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
// };

// const response = fetch('http://localhost:3000/api/events', options);
// console.log(response);


/****DISPLAY*****/

fetch('http://localhost:3000/api/events')
    .then(function(response) {
        return response.json();
    }).then(function(allEvents) {
        console.log(allEvents);
        for (const event of allEvents) {
            const eventDiv = document.createElement('div');
            eventDiv.classList.add('displayed-event');
        
            const title = document.createElement('h2');
            title.innerText = event.name;

            const p = document.createElement('p');
            p.innerText = event.description;

            const table = document.createElement('table');
            const thead = document.createElement('thead');
            const tbody = document.createElement('tbody');

            const row_1 = document.createElement('tr');
            const heading_empty = document.createElement('th');
            heading_empty.innerText = 'Name';

            row_1.appendChild(heading_empty);
            for (const eachDate of event.dates) {
                const heading = document.createElement('th');
                heading.innerText = eachDate.date;

                row_1.appendChild(heading);
                const col = document.createElement('tr');
                for (const attendee of eachDate.attendees) {
                    const row = document.createElement('tr');
                    const row_data = document.createElement('td');
                }
            }
            thead.appendChild(row_1);


            eventDiv.appendChild(title);
            eventDiv.appendChild(p);
            table.appendChild(thead);
            table.appendChild(tbody);
            eventDiv.appendChild(table);
            document.querySelector('.event-display').appendChild(eventDiv);
            addForm(eventDiv);
        }
    })

// function addForm(eventDiv) {
//     const form = document.createElement('form');
//     form.classList.add('add-details-to-event');

//     const allTh = eventDiv.querySelectorAll('th');
//     for (let i = 0; i < allTh.length; i++) {
//         if (i = 0) {
//             const input = document.createElement('input');
//             input.setAttribute('type', 'text');
//             // input.setAttribute('placeholder', 'Your Name');
//             form.appendChild(input);
//         } else {
//             const radioBtns = document.createElement('div')
//             const available = document.createElement('input');
//             const unavailable = document.createElement('input');
//             available.setAttribute('type', 'radio');
//             available.setAttribute('value', 'Y');
//             unavailable.setAttribute('type', 'radio');
//             unavailable.setAttribute('value', 'N');

//             radioBtns.appendChild(available);
//             radioBtns.appendChild(unavailable);
//             form.appendChild(radioBtns);
//         }
//     }
//     const submit = document.createElement('input');
//     submit.setAttribute('type', 'submit');
//     submit.setAttribute('value', 'Submit');

//     form.appendChild(submit);
//     eventDiv.appendChild(form);
}
