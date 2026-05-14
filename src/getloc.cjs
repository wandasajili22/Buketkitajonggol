const https = require('https');

https.get('https://maps.app.goo.gl/giKSRQqq36BiMy8y5', (res) => {
  console.log(res.headers.location);
}).on('error', (e) => {
  console.error(e);
});
