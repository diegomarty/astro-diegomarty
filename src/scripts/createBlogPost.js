
import fs from "fs";


//use this function to check if the file exists with the title you want to use
fs.existsSync('src/pages/blog/posts/chatgpt3.md')

function createMarkdownFile(title, text) {

    const path = `src/pages/blog/posts/${title.toLowerCase().replace(/\s/g, '-')}.md`;
  
    const content = `# ${title}\n\n${text}`;


    fs.writeFile(path, content, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`File "${title}.md" created at ${path}`);
      }
    });
  }

createMarkdownFile
