const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');

var userId = [];
var userToken = [];

const clientId = '06e8ef6a4b2df0cbfce5';
const clientSecret = '8719f38e3bf792e2ef06a024325b2deaeac0267e';

app.get('/', (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?clientId=${clientId}`);
});

app.get('/oauth-callback', (req, res) => {
  receivedCode= req.query.code;
  receivedState = req.query.state;
  console.log(receivedState);

  axios({
    // make a POST request
    method: 'post',
    // to the Github authentication API, with the client ID, client secret
    // and request token
    url: `https://github.com/login/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&code=${receivedCode}`,
    // Set the content type header, so that we get the response in JSOn
    headers: {
         accept: 'application/json'
    }
  }).then((response) => {
    // Once we get the response, extract the access token from
    // the response body
    const accessToken = response.data.access_token

    userToken.push(accessToken);
    userId.push((userId.length + 1));

    console.log('Token: ' + accessToken);
    res.json({accessToken});

    axios.get('https://api.github.com/user', {
      headers:{
        'Authorization': `token ${accessToken}`
      }
    }).then(resp => {
      console.log(resp.data);
    });
  })
});

app.listen(port);
console.log('App listening on port ' + port);
