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
