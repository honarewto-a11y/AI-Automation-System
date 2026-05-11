const axios = require("axios");
const config = require("../config");

module.exports = async (imageUrl) => {
  const res = await axios.post(
    "https://api.ocr.space/parse/image",
    {},
    {
      params: {
        apikey: config.ocrApiKey,
        url: imageUrl,
        language: "eng"
      }
    }
  );

  return res.data?.ParsedResults?.[0]?.ParsedText || null;
};
