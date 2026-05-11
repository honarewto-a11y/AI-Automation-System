const heart = require("/nora/civilization-heart/heart");
const mother = require("/nora/empires/mother/mother-empire");

const payment = require("/nora/empires/children/payment/engine");
const service = require("/nora/empires/children/service/engine");
const economic = require("/nora/empires/children/economic/engine");

function activateEmpire(label, payload) {
    const enriched = heart.applyRules(payload);

    const decision = heart.intelligentDecide(
        [
            { id: "SAFE_BOOT_" + label, priority: "HIGH", risk: 0.1, stability: 0.9 },
            { id: "FAST_BOOT_" + label, priority: "MEDIUM", risk: 0.4, stability: 0.6 }
        ],
        enriched
    );

    mother.registerChild(label);

    return { enriched, decision };
}

module.exports = {
    activateAll() {
        heart.initialize();

        const paymentRes = activateEmpire("Payment Empire", {
            scenario: "PAYMENT_EMPIRE_ACTIVATION",
            empire: "Payment",
            goal: "PAYMENT_INFRA_BOOTSTRAP"
        });

        const serviceRes = activateEmpire("Service Empire", {
            scenario: "SERVICE_EMPIRE_ACTIVATION",
            empire: "Service",
            goal: "SERVICE_INFRA_BOOTSTRAP"
        });

        const economicRes = activateEmpire("Economic Empire", {
            scenario: "ECONOMIC_EMPIRE_ACTIVATION",
            empire: "Economic",
            goal: "ECONOMIC_INFRA_BOOTSTRAP"
        });

        return {
            status: "BUSINESS_EMPIRES_ACTIVATED",
            payment: { child: payment, ...paymentRes },
            service: { child: service, ...serviceRes },
            economic: { child: economic, ...economicRes }
        };
    }
};
