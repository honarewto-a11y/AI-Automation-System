// /nora-v1/services/resumeBuilder.js

module.exports = async function executeResumeBuilder(input) {
    const name = input.name || "Unknown";
    const experience = input.experience || [];
    const skills = input.skills || [];

    const content = `
Name: ${name}
Experience:
${experience.map(e => "- " + e).join("\n")}
Skills:
${skills.map(s => "- " + s).join("\n")}
`.trim();

    return {
        type: "resume_builder",
        name,
        experience,
        skills,
        content,
        file: "resume-" + Date.now() + ".txt"
    };
};
