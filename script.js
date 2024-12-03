const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
let emails = [];

// Funzione che controlla la lunghezza dell'array emails e quando questa e' uguale a 10 aggiunge all'ul le dieci email
const checkAndAddEmailsToDOM = () => {
  const ul = document.querySelector('ul');
  ul.innerHTML = '';
  if (emails.length === 10) {
    document.querySelector('.loader').classList.add('d-none');
    emails.forEach(email => {
      const li = document.createElement('li');
      li.innerText = email;
      ul.append(li);
    });
  } else {
    document.querySelector('.loader').classList.remove('d-none');
  }
}
// Funzione che esegue 10 chiamate all'API di boolean, pusha le mail all'interno dell'array emails e chiama la funzione checkAndAddEmailsToDOM()
const fetchEmails = (numEmails) => {
  emails = [];
  for (let i = 0; i < numEmails; i++) {
    axios.get(endpoint)
      .then(({ data }) => {
        emails.push(data.response);
        checkAndAddEmailsToDOM();
      })
      .catch(error => console.error(error));
  }
}

fetchEmails(10);

document.querySelector('button').addEventListener('click', () => fetchEmails(10));