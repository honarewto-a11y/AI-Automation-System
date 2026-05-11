function build(frame) {
    return `
${frame.knowledge}
${frame.deep}
`.trim();
}
module.exports = { build };
