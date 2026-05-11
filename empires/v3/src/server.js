const express = require('express');
const app = express();

app.use(express.json());

app.get('/status', (req, res) => {
  res.json({
    status: 'ok',
    version: 'v3-old',
    role: 'legacy-core'
  });
});

const PORT = process.env.PORT || 3104;
app.listen(PORT, () => {
  console.log('NORA V3-OLD running on port', PORT);
});
