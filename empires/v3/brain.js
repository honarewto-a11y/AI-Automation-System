/**
 * NoraCivilis v3 — Brain (Cognitive Engine)
 * Full autonomous cycle:
 * SelfCheck → Reasoning → Decision → Action → Memory
 * → Healing → StructuralHealing → Rebuild
 * → Optimization → Evolution → Expansion → Autonomy → Goals
 */

const Selfcheck          = require('/nora-v3/core/selfcheck/selfcheck-engine');
const Reasoning          = require('/nora-v3/core/reasoning/reasoning-engine');
const Decision           = require('/nora-v3/core/decision/decision-engine');
const Action             = require('/nora-v3/core/action/action-engine');
const Memory             = require('/nora-v3/core/memory/memory-engine');
const ErrorEngine        = require('/nora-v3/core/error/error-engine');
const SelfHealing        = require('/nora-v3/core/selfhealing/selfhealing-engine');
const StructuralHealing  = require('/nora-v3/core/structural/structural-healing-engine');
const Rebuild            = require('/nora-v3/core/rebuild/rebuild-engine');
const Optimization       = require('/nora-v3/core/optimization/optimization-engine');
const Evolution          = require('/nora-v3/core/evolution/evolution-engine');
const Expansion          = require('/nora-v3/core/expansion/expansion-engine');
const Autonomy           = require('/nora-v3/core/autonomy/autonomy-engine');
const Goals              = require('/nora-v3/core/goals/goal-engine');
const Log                = require('/nora-v3/core/log/log-engine');

class NoraBrain {
  constructor() {
    this.memory = Memory;
  }

  async cycle() {
    try {
      const ts = Date.now();

      // 1) Self‑Check
      const state = Selfcheck.scan();
      Log.logCycle({ step: "selfcheck", state });
      this.memory.stateHistory.push({ timestamp: ts, state });

      // 2) Reasoning
      const analysis = Reasoning.analyze(state);
      Log.logCycle({ step: "reasoning", analysis });

      // 3) Decision
      const decision = Decision.choose(analysis);
      Log.logCycle({ step: "decision", decision });

      // 4) Action
      const result = await Action.execute(decision);
      Log.logAction(result);

      // 5) Save cycle
      this.memory.cycles.push({
        timestamp: Date.now(),
        state,
        analysis,
        decision,
        result
      });

      // 6) Self‑Healing (فایل‌های خراب / خطاها)
      if (decision.action === "handle_corrupted_files" || this.memory.errors.length > 0) {
        const healing = SelfHealing.heal(decision.files || []);
        this.memory.events.push({
          timestamp: Date.now(),
          healing
        });
      }

      // 7) Structural Self‑Healing (فایل‌های بزرگ)
      if (state.largeFiles && state.largeFiles.length > 0) {
        const structuralHealing = StructuralHealing.splitLargeFiles(state.largeFiles);
        this.memory.events.push({
          timestamp: Date.now(),
          structuralHealing
        });
      }

      // 8) Rebuild Missing Structures (پوشه‌ها / فایل‌های گمشده)
      if (state.missingFiles && state.missingFiles.length > 0) {
        const rebuildResult = Rebuild.rebuildMissing(state.missingFiles);
        this.memory.events.push({
          timestamp: Date.now(),
          rebuild: rebuildResult
        });
      }

      // 9) Self‑Optimization
      const optimization = Optimization.optimize(this.memory);
      this.memory.events.push({
        timestamp: Date.now(),
        optimization
      });

      // 10) Self‑Evolution
      const evolution = Evolution.evolve(this.memory);
      this.memory.events.push({
        timestamp: Date.now(),
        evolution
      });

      // 11) Self‑Expansion
      const expansion = Expansion.expand(this.memory);
      this.memory.events.push({
        timestamp: Date.now(),
        expansion
      });

      // 12) Self‑Autonomy
      const autonomy = Autonomy.decide(this.memory);
      this.memory.events.push({
        timestamp: Date.now(),
        autonomy
      });

      // 13) Goal‑Driven Intelligence
      const generatedGoals   = Goals.generate(this.memory);
      const prioritizedGoals = Goals.prioritize(generatedGoals);
      const goalEvaluation   = Goals.evaluate(this.memory);

      this.memory.events.push({
        timestamp: Date.now(),
        goals: {
          generated: generatedGoals,
          prioritized: prioritizedGoals,
          evaluation: goalEvaluation
        }
      });

      return {
        status: result?.status || "ok",
        decision,
        analysis,
        state
      };

    } catch (error) {
      ErrorEngine.handle(error);
      return {
        status: "error",
        error
      };
    }
  }
}

module.exports = new NoraBrain();
