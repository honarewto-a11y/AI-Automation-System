const express = require('express');
const app = express();

app.use(express.json());

app.get('/status', (req, res) => {
  res.json({
    status: 'ok',
    version: 'v2-new',
    role: 'empire-core'
  });
});

const PORT = process.env.PORT || 3103;
app.listen(PORT, () => {
  console.log('NORA V2-NEW EMPIRE running on port', PORT);
});
