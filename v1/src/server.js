const express = require('express');
const app = express();

app.use(express.json());

app.get('/status', (req, res) => {
  res.json({
    status: 'ok',
    version: 'v1',
    role: 'legacy-core'
  });
});

const PORT = process.env.PORT || 3101;
app.listen(PORT, () => {
  console.log('NORA V1 running on port', PORT);
});
