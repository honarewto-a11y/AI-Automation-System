const heart = require("./heart");

heart.initialize();

const chain = heart.multistep([
    () => ({ a: 1 }),
    (ctx) => ({ b: ctx.a + 1 }),
    (ctx) => ({ c: ctx.b * 5 }),
    (ctx) => ({ result: ctx.c + 10 })
]);

console.log(JSON.stringify({
    status: "HEART_STAGE_3_OK",
    chain
}, null, 2));
