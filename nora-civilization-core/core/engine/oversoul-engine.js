module.exports = {
    unify(answer, context) {
        const lines = answer.split("\n").map(l => l.trim()).filter(Boolean);

        const unique = [...new Set(lines)];

        return (
            unique.join("\n") +
            "\n\n🌐 Oversoul: پاسخ نهایی تمدن هماهنگ شد."
        );
    }
};
