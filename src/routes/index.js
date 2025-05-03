const { Router } = require("express");
const router = Router();
const OpenAI = require("openai");

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
router.post("/rutaPOSTChatGPT", async (req, res) => {
  const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
  });

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    store: true,
    messages: [
      {
        role: "user",
        content: "Eres un entrenador fitness" + req.body.pregunta,
      },
    ],
  });
  res.send(completion.choices[0]);
});

module.exports = router;
