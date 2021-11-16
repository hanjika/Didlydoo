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