function isSimpleMath(input) {
  return /^[0-9+\-*/\s()]+$/.test(input.trim());
}

function safeEvalMath(input) {
  try {
    // هشدار: فقط برای تست
    // eslint-disable-next-line no-eval
    const result = eval(input);
    if (typeof result === 'number' && isFinite(result)) {
      return result.toString();
    }
    return null;
  } catch {
    return null;
  }
}

async function knowledgeAnswer(input) {
  if (isSimpleMath(input)) {
    const r = safeEvalMath(input);
    if (r !== null) return { handled: true, answer: r };
  }
  return { handled: false, answer: null };
}

module.exports = { knowledgeAnswer };
