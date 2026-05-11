const fs = require("fs");
const path = require("path");

const ROOT = "/nora";

function resolveSafePath(p) {
    const resolved = path.resolve(p);
    if (!resolved.startsWith(ROOT + path.sep) && resolved !== ROOT) {
        throw new Error("مسیر خارج از محدودهٔ امن تمدن است");
    }
    return resolved;
}

async function runAction(req) {
    if (!req || typeof req !== "object") {
        throw new Error("درخواست نامعتبر است");
    }

    const action = req.action;
    if (!action) {
        throw new Error("action الزامی است");
    }

    switch (action) {
        case "write_file": {
            const filePath = resolveSafePath(req.path);
            const content = req.content ?? "";
            await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
            await fs.promises.writeFile(filePath, content, "utf8");
            return { ok: true, action, path: filePath };
        }

        case "append_file": {
            const filePath = resolveSafePath(req.path);
            const content = req.content ?? "";
            await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
            await fs.promises.appendFile(filePath, content, "utf8");
            return { ok: true, action, path: filePath };
        }

        case "make_dir": {
            const dirPath = resolveSafePath(req.path);
            await fs.promises.mkdir(dirPath, { recursive: true });
            return { ok: true, action, path: dirPath };
        }

        case "read_file": {
            const filePath = resolveSafePath(req.path);
            const data = await fs.promises.readFile(filePath, "utf8");
            return { ok: true, action, path: filePath, content: data };
        }

        case "list_dir": {
            const dirPath = resolveSafePath(req.path);
            const items = await fs.promises.readdir(dirPath, { withFileTypes: true });
            return {
                ok: true,
                action,
                path: dirPath,
                items: items.map(i => ({ name: i.name, dir: i.isDirectory() }))
            };
        }

        default:
            throw new Error("عملیات مجاز نیست: " + action);
    }
}

// اجرای مستقیم از ترمینال با JSON روی stdin
if (require.main === module) {
    let data = "";
    process.stdin.on("data", chunk => (data += chunk));
    process.stdin.on("end", async () => {
        try {
            const req = JSON.parse(data || "{}");
            runAction(req)
                .then(res => {
                    console.log(JSON.stringify({ ok: true, result: res }, null, 2));
                })
                .catch(err => {
                    console.error(JSON.stringify({ ok: false, error: err.message }));
                    process.exit(1);
                });
        } catch (e) {
            console.error(JSON.stringify({ ok: false, error: "JSON نامعتبر" }));
            process.exit(1);
        }
    });
}

module.exports = { runAction };
