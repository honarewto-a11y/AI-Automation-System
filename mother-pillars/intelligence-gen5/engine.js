module.exports = {
    name: "Intelligence Layer – Generation 5",
    type: "INTELLIGENCE_LAYER_GEN5",
    version: 1,
    layers: [
        "Mission",
        "Strategic",
        "Tactical",
        "Ethical",
        "Identity",
        "Social",
        "Cultural",
        "Economic",
        "Infrastructure",
        "Creative",
        "Philosophical",
        "Civilizational"
    ],
    activeLayers: [],
    activateLayer(layer) {
        if (this.layers.includes(layer) && !this.activeLayers.includes(layer)) {
            this.activeLayers.push(layer);
        }
        return this.activeLayers;
    }
};
