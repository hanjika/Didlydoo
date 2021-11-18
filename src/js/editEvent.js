export function editEvent(e) {
    e.target.innerText = 'Finish edit';

    const id = e.target.id;
    let article;

    const allArticles = document.querySelectorAll('article');
    for (const anArticle of allArticles) {
        if (anArticle.id === id) {
            article = anArticle;
        }
    }

    const getNewTitle = document.createElement('input');
    getNewTitle.setAttribute('type', 'text');
    getNewTitle.setAttribute('name', 'modifyEvent');
    getNewTitle.setAttribute('placeholder', 'Name of event');

    const getNewDes = document.createElement('input');
    getNewDes.setAttribute('type', 'text');
    getNewDes.setAttribute('name', 'modifyDescription');
    getNewDes.setAttribute('placeholder', 'Description');

    const getNewAuthor = document.createElement('input');
    getNewAuthor.setAttribute('type', 'text');
    getNewAuthor.setAttribute('name', 'modifyAuthor');
    getNewAuthor.setAttribute('placeholder', 'Your name');

    article.querySelector('.title').replaceWith(getNewTitle);
    article.querySelector('.description').replaceWith(getNewDes);
    article.querySelector('.author').replaceWith(getNewAuthor);

    e.target.removeEventListener('click', editEvent);
    e.target.addEventListener('click', () => {
        finishEdit(e, article, id)
    });
}

function finishEdit(e, article, id) {
    const newEvent = article.querySelector('input[name="modifyEvent"]').value;
    const newDescription = article.querySelector('input[name="modifyDescription"]').value;
    const newAuthor = article.querySelector('input[name="modifyAuthor"]').value;

    const editedData = {
        name: newEvent,
        author: newAuthor,
        description: newDescription
    };

    let reload = true;

    fetch('http://localhost:3000/api/events/' + id, {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(editedData)
    })
    .then(response => response.json())
    .then(result => {
        if (result[0].message) {
            alert(result[0].message);
            reload = false;
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

    if (reload === true) {
        e.target.removeEventListener('click', () => {
            finishEdit(e, article, id)
        });
       window.location.reload(); 
    }
}