import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

/*
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
*/

const prompt = [
  {
    title: "ChatGPT3",
    prompt:
      "Crea un post sobre ChatGPT3 que tenga 200 palabras, dame directamente el codigo markdown para que lo pueda copiar y pegar en el editor de markdown.",
  },
];

async function runCompletion() {
  console.log(fs.existsSync("srcpages\blogpostschatgpt3.md"));
  /*
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt[0].prompt,
  });
  console.log(completion.data.choices[0].text);
  createMarkdownFile(prompt[0].title, completion.data.choices[0].text); 
  */

  createMarkdownFile(prompt[0].title, prompt[0].prompt);
}

function createMarkdownFile(title, text) {
  const path = `../../src/pages/blog/posts/${title
    .toLowerCase()
    .replace(/\s/g, "-")}.md`;

  const content = `# ${title}\n\n${text}`;

  fs.writeFile(path, content, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`File "${title}.md" created at ${path}`);
    }
  });
}

runCompletion();
