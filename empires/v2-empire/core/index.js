const createEventBus = require('../system/eventbus');
const createErrorEngine = require('../system/error');
const identity = require('../system/identity');

const createIntelligence = require('../engines/intelligence');
const createEvolution = require('../engines/evolution');
const createBuilder = require('../engines/builder');
const createFiles = require('../engines/files');
const createBehavior = require('../engines/behavior');
const createDecision = require('../engines/decision');
const createMemory = require('../engines/memory');

module.exports = function bootstrap() {
  const eventBus = createEventBus();
  const memory = createMemory(eventBus);
  const errorResponse = createErrorEngine(eventBus);

  return {
    identity,
    eventBus,
    errorResponse,
    engines: {
      intelligence: createIntelligence(eventBus, memory),
      evolution: createEvolution(eventBus, memory),
      builder: createBuilder(eventBus, memory),
      files: createFiles(eventBus, memory),
      behavior: createBehavior(eventBus, memory),
      decision: createDecision(eventBus, memory),
      memory
    }
  };
};