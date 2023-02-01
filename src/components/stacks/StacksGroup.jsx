import Stack from "./Stack";
import { FaReact, FaGithub, FaSymfony, FaPhp } from "react-icons/fa";
import { SiJavascript, SiVisualstudiocode } from "react-icons/si";

export default function MyStacks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 ">
      <div className="mx-auto">
        <Stack StackIcon={FaPhp} />
      </div>
      <div className="mx-auto">
        <Stack StackIcon={FaSymfony} />
      </div>
      <div className="mx-auto">
        <Stack StackIcon={FaGithub} />
      </div>
      
      <div className="mx-auto">
        <Stack StackIcon={FaReact} />
      </div>
      <div className="mx-auto">
        <Stack StackIcon={SiJavascript} />
      </div>
      <div className="mx-auto">
        <Stack StackIcon={SiVisualstudiocode} />
      </div>
    </div>
  );
}
