const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.use(
  '/bootstrap',
  express.static(path.resolve(__dirname, 'node_modules/bootstrap/dist'))
);
app.use(
  '/fontawesome',
  express.static(
    path.resolve(__dirname, 'node_modules/@fortawesome/fontawesome-free')
  )
);
app.use(
  '/jquery',
  express.static(path.resolve(__dirname, 'node_modules/jquery/dist'))
);

app.listen(3000, () => {
  console.log('服務已啟動於 http://localhost:3000');
});
