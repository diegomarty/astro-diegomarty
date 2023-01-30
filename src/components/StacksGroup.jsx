import Stack from "./Stack";
import { FaReact, FaGithub, FaSymfony, FaPhp, FaLaravel } from "react-icons/fa";
import { SiJavascript, SiVisualstudiocode } from "react-icons/si";

export default function MyStacks() {
  return (
    <section>
      <div className="text-center pt-5">
        <h1 className="text-4xl font-bold text-amber-400 p-3">Some of my technologies</h1>
      </div>
      <div className="mx-auto max-w-screen-lg px-4 py-10 flex items-center align-middle justify-center">
        <Stack StackIcon={FaPhp} />
        <Stack StackIcon={FaSymfony} />
        <Stack StackIcon={FaGithub} />
      </div>
      <div className="mx-auto max-w-screen-lg px-4 py-10 flex items-center align-middle justify-center">
        <Stack StackIcon={FaReact} />
        <Stack StackIcon={SiJavascript} />
        <Stack StackIcon={SiVisualstudiocode} />
      </div>
    </section>
  );
}
