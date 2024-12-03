const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
// Soluzione 1
let emails = [];

const checkAndAddEmailsToDOM = () => {
  const ul = document.querySelector('ul');
  ul.innerHTML = '';
  if (emails.length === 10) {
    emails.forEach(email => {
      const li = document.createElement('li');
      li.innerText = email;
      ul.append(li);
    });

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