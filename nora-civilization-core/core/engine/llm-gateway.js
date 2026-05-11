const axios = require("axios");

module.exports = {
    generate: async function(prompt) {
        const response = await axios({
            method: "post",
            url: "http://localhost:11434/api/generate",
            data: {
                model: "gemma:2b-instruct",
                prompt: prompt,
                stream: false
            },
            headers: {
                "Content-Type": "application/json"
            }
        });

        return response.data.response;
    }
};
