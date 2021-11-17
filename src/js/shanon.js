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

            for (const x of date.attendees) {
                console.log(x)
                var available= document.createElement('p')
                available.innerHTML= x.available
                sectionDate.appendChild(available) 
            }                 
        }
        for (const names of event.dates[0].attendees) {
        var guestList= document.createElement('section')
        article.appendChild(guestList)
        var guest= document.createElement('p')
        guest.innerHTML= names.name

        guestList.appendChild(guest)

    }

}
})




