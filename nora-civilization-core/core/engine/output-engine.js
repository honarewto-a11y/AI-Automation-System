module.exports = function output(text) {
    if (!text) text = "تمدن پاسخی تولید نکرد.";
    process.stdout.write(text);
};
