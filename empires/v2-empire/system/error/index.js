module.exports = function createErrorEngine(eventBus) {
  return function errorResponse(res, message, context = {}) {
    eventBus.emit("system", "error", { message, context });
    return res.status(500).json({
      error: true,
      message,
      context,
      timestamp: Date.now()
    });
  };
};