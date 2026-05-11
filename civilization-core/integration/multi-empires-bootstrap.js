const heart = require("/nora/civilization-heart/heart");
const mother = require("/nora/empires/mother/mother-empire");

const identity = require("/nora/empires/children/identity/engine");
const language = require("/nora/empires/children/language/engine");
const memory = require("/nora/empires/children/memory/engine");
const security = require("/nora/empires/children/security/engine");
const notification = require("/nora/empires/children/notification/engine");

function activateEmpire(label, payload) {
    const enriched = heart.applyRules(payload);

    const decision = heart.intelligentDecide(
        [
            { id: "SAFE_BOOT_" + label, priority: "HIGH", risk: 0.1, stability: 0.9 },
            { id: "FAST_BOOT_" + label, priority: "MEDIUM", risk: 0.4, stability: 0.6 }
        ],
        enriched
    );

    mother.registerChild(label);

    return { enriched, decision };
}

module.exports = {
    activateAll() {
        heart.initialize();

        const identityRes = activateEmpire("Identity Empire", {
            scenario: "IDENTITY_EMPIRE_ACTIVATION",
            empire: "Identity",
            goal: "CORE_IDENTITY_BOOTSTRAP"
        });

        const languageRes = activateEmpire("Language Empire", {
            scenario: "LANGUAGE_EMPIRE_ACTIVATION",
            empire: "Language",
            goal: "CORE_LANGUAGE_BOOTSTRAP"
        });

        const memoryRes = activateEmpire("Memory Empire", {
            scenario: "MEMORY_EMPIRE_ACTIVATION",
            empire: "Memory",
            goal: "CORE_MEMORY_BOOTSTRAP"
        });

        const securityRes = activateEmpire("Security Empire", {
            scenario: "SECURITY_EMPIRE_ACTIVATION",
            empire: "Security",
            goal: "CORE_SECURITY_BOOTSTRAP"
        });

        const notificationRes = activateEmpire("Notification Empire", {
            scenario: "NOTIFICATION_EMPIRE_ACTIVATION",
            empire: "Notification",
            goal: "CORE_NOTIFICATION_BOOTSTRAP"
        });

        return {
            status: "MULTI_EMPIRES_ACTIVATED",
            identity: { child: identity, ...identityRes },
            language: { child: language, ...languageRes },
            memory: { child: memory, ...memoryRes },
            security: { child: security, ...securityRes },
            notification: { child: notification, ...notificationRes }
        };
    }
};
