const express = require("express");
const router = express.Router();
const bridge = require("../bridge/language-bridge");
const mother = require("../empire/mother-empire");

// GET /languages/:id
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const lang = bridge.getById(id);

    if (!lang) {
        return res.status(404).json({ error: "Language not found" });
    }

    res.json(lang);
});

// GET /languages/random
router.get("/random/get", (req, res) => {
    const lang = bridge.getRandom();
    res.json(lang);
});

// GET /languages/list
router.get("/list/all", (req, res) => {
    const list = bridge.getAll();
    res.json(list);
});

// GET /languages/mother
router.get("/mother/get", (req, res) => {
    const lang = mother.getMotherLanguage();
    if (!lang) {
        return res.status(404).json({ error: "Mother language not set" });
    }
    res.json(lang);
});

// GET /languages/empire/:name
router.get("/empire/:name", (req, res) => {
    const name = req.params.name;
    const langs = mother.getEmpireLanguages(name);

    if (!langs) {
        return res.status(404).json({ error: "Empire not found" });
    }

    res.json(langs);
});

module.exports = router;
