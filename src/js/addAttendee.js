export function attendanceAdd(e) {
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
    })
    .then(response => response.json())
    .then(result => {
        alert(result[0].message);
    })
    .catch(error => {
        console.error('Error:', error);
    });

    window.location.reload(); 
}