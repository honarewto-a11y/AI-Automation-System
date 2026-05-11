/**
 * NoraCivilis v1 — Governance Engine
 * Handles laws, commands and governance state
 */

class GovernanceEngine {
  constructor() {
    this.laws = [];
    this.commands = [];
  }

  // -------------------------------
  // Laws
  // -------------------------------
  addLaw(title, description) {
    const entry = {
      id: this.laws.length + 1,
      title,
      description,
      timestamp: new Date().toISOString()
    };

    this.laws.push(entry);
    return entry;
  }

  removeLaw(id) {
    const index = this.laws.findIndex(l => l.id === id);
    if (index === -1) return null;

    const removed = this.laws.splice(index, 1);
    return removed[0];
  }

  getAllLaws() {
    return this.laws;
  }

  // -------------------------------
  // Commands
  // -------------------------------
  issueCommand(command) {
    const entry = {
      id: this.commands.length + 1,
      command,
      timestamp: new Date().toISOString()
    };

    this.commands.push(entry);
    return entry;
  }

  getAllCommands() {
    return this.commands;
  }

  // -------------------------------
  // Governance State
  // -------------------------------
  getGovernanceState() {
    return {
      laws: this.laws.length,
      commands: this.commands.length,
      lastUpdate: new Date().toISOString()
    };
  }
}

module.exports = new GovernanceEngine();
