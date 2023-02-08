import Stack from "./Stack";
import { FaReact, FaGithub, FaSymfony, FaPhp, FaDocker } from "react-icons/fa/index";
import { SiJavascript, SiVisualstudiocode, SiNextdotjs } from "react-icons/si/index";
import AstroLogo from "/svgs/AstroLogo.svg";

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
        <Stack StackIcon={SiNextdotjs} />
      </div>

      <div className="mx-auto">
        <Stack StackIcon={SiVisualstudiocode} />
      </div>
      <div className="mx-auto">
        <Stack image={AstroLogo} />
      </div>
      <div className="mx-auto col-span-2 md:col-span-1">
        <Stack StackIcon={FaDocker} />
      </div>

    </div>
  );
}
