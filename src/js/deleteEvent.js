export function deleteEvent(e) {
    const id = e.target.id;

    fetch('http://localhost:3000/api/events/' + id, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(result => {
        window.location.reload();
    })
    .catch(error => {
        console.error('Error:', error);
    });
}