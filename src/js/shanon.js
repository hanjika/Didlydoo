const main= document.querySelector('main')
const eventSection= document.querySelector('.eventSection')
const guestSection= document.querySelector('.guestSection')
const inputEvent= document.querySelector('.events')
const inputGuest= document.querySelector('.guests')

fetch("http://localhost:3000/api/events/")
.then(response => response.json())
.then(json => {
    console.log(json)
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
        for (const date of event.dates){
            var possibleDate= document.createElement('p')
            possibleDate.innerHTML= date.date
            section.appendChild(possibleDate)
        }

        for (const names of event.dates[0].attendees) {
            console.log(names)
            var section2= document.createElement('section')
            section2.setAttribute('class', 'guest')
            article.appendChild(section2)
            var guest= document.createElement('p')
            guest.innerHTML= names.name
            section2.appendChild(guest)
        }
    }
})




