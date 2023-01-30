import Stack from "./Stack";
import { FaReact, FaGithub, FaSymfony, FaPhp } from "react-icons/fa";
import { SiJavascript, SiVisualstudiocode } from "react-icons/si";

export default function MyStacks() {
  return (
    <section class="bg-gray-900 text-white">
      <div class="mx-auto max-w-3xl text-center">
        <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          My stacks
          <span class="sm:block"> Increase Conversion. </span>
        </h1>
      </div>
      <div class="mx-auto max-w-screen-lg px-4 py-10 sm:flex lg:items-center align-middle justify-center">
        <Stack StackIcon={FaPhp} />
        <Stack StackIcon={FaSymfony} />
        <Stack StackIcon={FaGithub} />
      </div>
      <div class="mx-auto max-w-screen-lg px-4 py-10 sm:flex lg:items-center align-middle justify-center">
        <Stack StackIcon={FaReact} />
        <Stack StackIcon={SiJavascript} />
        <Stack StackIcon={SiVisualstudiocode} />
      </div>
    </section>
  );
}
