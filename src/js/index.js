const main= document.querySelector('main')
const eventSection= document.querySelector('.eventSection')
const guestSection= document.querySelector('.guestSection')
const submit= document.querySelector('.submit')
const submit2= document.querySelector('.submit2')
const inputEvent= document.querySelector('.events')
const inputGuest= document.querySelector('.guests')

submit.onclick= () => {
    var eventName= document.createElement('p')
    eventName.innerHTML= inputEvent.value
    eventSection.appendChild(eventName)
}
submit2.onclick= () => {
    var guestName= document.createElement('p')
    guestName.innerHTML= inputGuest.value
    guestSection.appendChild(guestName)
}

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

