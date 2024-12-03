const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
// Soluzione 1
const emails = [];

const checkAndAddEmailsToDOM = () => {
  if (emails.length === 10) {
    emails.forEach(email => {
      const li = document.createElement('li');
      li.innerText = email;
      document.querySelector('ul').append(li);
    });

  }
}

const fetchEmails = (numEmails) => {
  for (let i = 0; i < numEmails; i++) {
    axios.get(endpoint)
      .then(({ data }) => {
        emails.push(data.response);
        checkAndAddEmailsToDOM();
      })
  }
}

fetchEmails(10);