const behavior = require("./behavior.js");
const memory = require("./memory-longterm.js");
const empire = require("./mother-empire.js");
const llm = require("./llm-engine.js");
const civFilter = require("./civilization-filter.js");
const stabilize = require("./language-stabilizer.js");

module.exports = {
    async run(context) {
        console.log("🧠 Behavior Engine: initialized.");
        console.log("🧱 Long-Term Memory Engine: initialized.");
        console.log("👑 Mother Empire Engine: initialized.");

        console.log("🧠 Behavior Engine: running one behavior cycle...");
        behavior.process?.(context);

        memory.record?.("core_cycle");

        // 1) پاسخ دانشی تمدنی
        let civKnowledge = empire.answer?.(context.input);
        console.log("پاسخ دانشی تمدنی:", civKnowledge || "ندارد.");

        // 2) اگر تمدن جواب نداشت → برو سراغ LLM
        let llmAnswer = null;
        if (!civKnowledge || civKnowledge === "ندارد.") {
            llmAnswer = await llm.generate(context.input, context);

            if (llmAnswer) {
                llmAnswer = stabilize.stabilize(llmAnswer);
                llmAnswer = civFilter.refine(llmAnswer, context.input);
                console.log("پاسخ دانشی گسترده:", llmAnswer);
            } else {
                console.log("پاسخ دانشی گسترده: (LLM پاسخی نداد)");
            }
        }

        // 3) پاسخ تمدنی نهایی
        const final = empire.finalize?.(context.input, civKnowledge, llmAnswer);
        console.log(final);

        return final;
    }
};
