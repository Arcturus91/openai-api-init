import OpenAI from "openai";
import "dotenv/config";
import fs from "fs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
//!CHAT COMPLETION
async function chatCompletion() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Say Hello to PERÚ" }],
    model: "gpt-3.5-turbo",
    max_tokens: 20,
  });

  console.log(JSON.stringify(completion, null, 2));
}
//chatCompletion();

//!AUDIO TRANSCRIBE
async function audioTranscribe() {
  const transcription = await openai.audio.transcriptions.create({
    file: fs.createReadStream("../audioPuerco.mp3"),
    model: "whisper-1",
  });

  console.log(JSON.stringify(transcription, null, 2));
}
//audioTranscribe();

//!AUDIO IMAGE RECOGNITION
async function imageRecokg() {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "What’s in this image?" },
          {
            type: "image_url",
            image_url: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
            },
          },
        ],
      },
    ],
  });
  console.log(JSON.stringify(response, null, 2));
}
//imageRecokg();

//!SERVER FOR EMBEDDINGS:

async function embeddingsGen() {
  const embedding = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: "Your text string goes here",
    encoding_format: "float",
  });

  console.log(embedding);
}

embeddingsGen();
