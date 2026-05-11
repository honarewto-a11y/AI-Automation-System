function parsePersianMath(text) {
    let t = text;

    t = t.replace(/دو/g, "2")
         .replace(/سه/g, "3")
         .replace(/چهار/g, "4")
         .replace(/پنج/g, "5")
         .replace(/شش/g, "6")
         .replace(/هفت/g, "7")
         .replace(/هشت/g, "8")
         .replace(/نه/g, "9")
         .replace(/صفر/g, "0");

    t = t.replace(/به علاوه/g, "+")
         .replace(/جمع/g, "+")
         .replace(/منهای/g, "-")
         .replace(/تفریق/g, "-")
         .replace(/ضرب/g, "*")
         .replace(/تقسیم/g, "/");

    return t;
}

module.exports = {
    solve(text) {
        if (!text) return null;

        const expr = parsePersianMath(text);

        try {
            const safe = expr.match(/[\d\+\-\*\/\(\)\s]+/g);
            if (!safe) return null;
            const joined = safe.join("");

            // eslint-disable-next-line no-eval
            const result = eval(joined);

            if (typeof result === "number" && isFinite(result)) {
                return result.toString();
            }

            return null;
        } catch {
            return null;
        }
    }
};
