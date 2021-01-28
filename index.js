console.log(localStorage.getItem('token'))

if(!localStorage.getItem('token')) {
  fetch('https://api-slack-token-nlc.herokuapp.com/')
  .then(response => response.json())
  .then(data => {
    localStorage.setItem('token', data.token);
  });
}

document.getElementById('submit').addEventListener('click',() => {

  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
  let txt = `Veuillez répondre à ${email}\n${message}`;

  let auth = `Bearer ${localStorage.getItem('token')}`;

  fetch('https://slack.com/api/chat.postMessage', { 
    method: 'POST', 
    headers: new Headers({
      'Content-type': 'application/json',
      'Authorization': auth
    }), 
    body:  JSON.stringify({channel:"HAMA15N0N",text: txt})
  });
})