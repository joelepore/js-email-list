const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
// Soluzione 1
let emails = [];

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

const fetchEmails = (numEmails) => {
  emails = [];
  for (let i = 0; i < numEmails; i++) {
    axios.get(endpoint)
      .then(({ data }) => {
        emails.push(data.response);
        checkAndAddEmailsToDOM();
      })
  }
}

fetchEmails(10);

document.querySelector('button').addEventListener('click', () => fetchEmails(10));