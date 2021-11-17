/*** ADD EVENT ***/

const addEventBtn = document.querySelector('.add-new-event');
addEventBtn.addEventListener('click', () => {
    const newEventModal = document.querySelector('.modal');
    newEventModal.style.display = 'flex';
});

const closeModalBtn = document.querySelector('.leave-modal');
closeModalBtn.addEventListener('click', () => {
    const newEventModal = document.querySelector('.modal');
    newEventModal.style.display = 'none';
    removeAdditionalDates();
});

const addDateBtn = document.querySelector('.add-new-date-button');
addDateBtn.addEventListener('click', addAdditionalDate);

const submitFormBtn = document.querySelector('.submit-form');
submitFormBtn.addEventListener('click', addEvent);


function addAdditionalDate() {
    const parentDiv = document.querySelector('.event-dates');

    const addDiv = document.createElement('div');
    addDiv.classList.add('additional-date');

    const newDateInput = document.createElement('input');
    newDateInput.setAttribute('type', 'date');

    const deleteSpan = document.createElement('span');
    deleteSpan.classList.add('delete-date');
    deleteSpan.addEventListener('click', () => {
        dateDiv = deleteSpan.parentNode;
        document.querySelector('.event-dates').removeChild(dateDiv);
    });
    deleteSpan.innerText = '×';

    addDiv.appendChild(newDateInput);
    addDiv.appendChild(deleteSpan);
    parentDiv.appendChild(addDiv);
}

function removeAdditionalDates() {
    const allAddDates = document.querySelectorAll('.additional-date');
    for (const date of allAddDates) {
        document.querySelector('.event-dates').removeChild(date);
    }
}

function addEvent() {
    const form = document.querySelector('.event-form');

    const allDates = form.querySelectorAll('input[type="date"]');
    let dates = [];
    for (const date of allDates) {
        dates.push(date.value);
    }

    const formData = {
        name: form.name.value,
        dates: dates,
        author: form.author.value,
        description: form.description.value
    };

    fetch('http://localhost:3000/api/events/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const newEventModal = document.querySelector('.modal');
    newEventModal.style.display = 'none';

    removeAdditionalDates() 
}

/*** ADD ATTENDANCE ***/

function attendanceAdd(e) {
    e.preventDefault();

    let dates = [];

    const form = e.target.parentNode;
    const radioBtns = form.querySelectorAll('.radio-buttons');
    for (const radio of radioBtns) {
        const results = radio.getElementsByTagName('input');
        const date = results[0].name;
        let value;
        if (results[0].checked) {
            value = true;
        } else if (results[1].checked) {
            value = false;
        }

        const availableObj = {
            date: date,
            available: value
        }
        dates.push(availableObj);
    }

    const formData = {
        name: form.name.value,
        dates: dates
    };

    const id = e.target.id;
    fetch('http://localhost:3000/api/events/' + id + '/attend', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
}