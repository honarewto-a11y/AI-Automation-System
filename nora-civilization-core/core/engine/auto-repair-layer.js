const selfDiagnosis = require("../engines/self-diagnosis-engine");
const rootCauseEngine = require("../engines/root-cause-engine");
const selfHealingEngine = require("../engines/self-healing-engine");
const activeSelfHealer = require("./active-self-healer");
const autoPatchEngine = require("../engines/auto-patch-engine");
const reconstructionEngine = require("../engines/reconstruction-engine");
const evolutionEngine = require("../engines/evolution-engine");
const governanceEngine = require("../engines/governance-engine");
const optimizationEngine = require("../engines/optimization-engine");
const intelligenceEngine = require("../engines/intelligence-engine");
const expansionEngine = require("../engines/expansion-engine");
const existenceEngine = require("../engines/existence-engine");
const civilizationMetaEngine = require("../engines/civilization-meta-engine");
const { exec } = require("child_process");

module.exports = function autoRepairLayer(error, context = {}) {
    const diagnostic = selfDiagnosis({ error, context });
    const rootCause = rootCauseEngine(diagnostic);
    const healing = selfHealingEngine(rootCause);

    // سطح ۳: بازسازی
    const reconstruction = reconstructionEngine(rootCause);

    // سطح ۴: تکامل
    const evolution = evolutionEngine(diagnostic, rootCause);

    // سطح ۶: بهینه‌سازی
    const optimization = optimizationEngine(diagnostic, rootCause);

    // سطح ۷: هوش تمدنی
    const intelligence = intelligenceEngine(diagnostic, rootCause, context);

    // سطح ۸: گسترش
    const expansion = expansionEngine(diagnostic, rootCause);

    // سطح ۲ + patch systemd
    const patch = autoPatchEngine(rootCause);

    // سطح ۹: وجود تمدنی
    const existence = existenceEngine({ diagnostic, rootCause });

    // سطح ۵: حاکمیت
    const decisions = governanceEngine({
        diagnostic,
        rootCause,
        healing,
        patch,
        reconstruction,
        evolution
    });

    if (decisions.allowPatching && patch.patched && patch.commands) {
        patch.commands.forEach(cmd => {
            exec(cmd, () => {});
        });
    }

    if (decisions.allowActiveHealing) {
        try {
            activeSelfHealer(healing);
        } catch (e) {
            console.error("active self-healing error:", e.message);
        }
    }

    // 🔥 فعال‌سازی نسل ۷،۸،۹: ثبت بینش تمدنی در state
    const meta = civilizationMetaEngine({
        diagnostic,
        rootCause,
        optimization,
        intelligence,
        expansion,
        existence
    });

    return {
        diagnostic,
        rootCause,
        healing,
        patch,
        reconstruction,
        evolution,
        optimization,
        intelligence,
        expansion,
        existence,
        decisions,
        meta
    };
};
