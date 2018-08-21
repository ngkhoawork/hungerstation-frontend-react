/** for development only!! */
const express = require('express');
const request = require('request');

// to ignore the self-signed certificate error, uncomment the following line:
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const remote = 'https://development.hs-preview.com/api/v3/graphql'; // replace with your own remote location

const app = express();
// we server the files in the current folder under /static
app.use('/static', express.static('.'));
// and we proxy everything everything under /proxy to the real server
app.use('/proxy', (req, res) => {
  const url = remote + req.url;
  req.pipe(request(url)).pipe(res);
});

app.listen(3000);
