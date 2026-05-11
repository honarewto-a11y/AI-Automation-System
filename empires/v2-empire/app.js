const express = require('express');
const bootstrap = require('./core');
const app = express();
app.use(express.json());

const core = bootstrap();
const { identity, eventBus, errorResponse, engines } = core;

app.get('/empire/status', (req, res) => {
  res.json({
    identity,
    engines: Object.keys(engines),
    timestamp: Date.now()
  });
});

app.get('/empire/intelligence/diagnose', (req, res) => {
  res.json(engines.intelligence.diagnose());
});

app.post('/empire/intelligence/self-heal', (req, res) => {
  res.json(engines.intelligence.selfHeal());
});

app.post('/empire/evolution/plan', (req, res) => {
  const { currentVersion, targetVersion } = req.body || {};
  res.json(engines.evolution.plan(currentVersion || "v2", targetVersion || "v3"));
});

app.post('/empire/builder/preview', (req, res) => {
  res.json(engines.builder.preview(req.body || {}));
});

app.post('/empire/builder/execute', (req, res) => {
  res.json(engines.builder.execute(req.body || {}));
});

app.post('/empire/files/split', (req, res) => {
  const { sourcePath, maxSize } = req.body || {};
  res.json(engines.files.split(sourcePath, maxSize));
});

app.post('/empire/behavior/adapt', (req, res) => {
  const { signal } = req.body || {};
  res.json(engines.behavior.adapt(signal || "normal"));
});

app.post('/empire/decision/decide', (req, res) => {
  const { label, options } = req.body || {};
  res.json(engines.decision.decide(label, options));
});

app.get('/empire/memory', (req, res) => {
  res.json({ history: engines.memory.list() });
});

app.listen(4100, () => {
  console.log("Nora Empire running on port 4100");
});