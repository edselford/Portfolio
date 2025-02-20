import { Sometype_Mono } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import profile_img from "@/public/1000003669.jpg";
import moment from "moment";
import Image from "next/image";
import { Metadata } from "next";
import { TitleScroll } from "@/components/TitleScroll";

const sometype_font = Sometype_Mono({subsets: ['latin']});

const skills = [
  "Web Development",
  "Javascript",
  "Typescript",
  "React",
  "Next JS",
  "TailwindCSS",
  "PHP",
  "Laravel",
  "Android Development",
  "Android Native",
  "Java",
  "Kotlin",
  "Jetpack Compose",
  "Kotlin Multiplatform",
  "Flutter",
  "C#",
  ".NET Core",
  ".NET Framework",
  "Winform",
  "Electron",
  "ASP.Net Core",
  "Data Analyst",
  "Python",
];

export const metadata: Metadata = {
  title: "Edsel Mustapa - Portfolio",
  description: "My personal portfolio",
}

export default function Home() {
  return (
    <div className={`${sometype_font.className} px-5 lg:px-40 h-screen cursor-default`}>
      <div className="mt-5 flex flex-row justify-between">
        <div>PORTFOLIO</div>
        <div className="w-[100px] flex flex-row justify-around">
          <a href="https://github.com/edselford" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="fa-fw" />
          </a>
          <a href="https://www.linkedin.com/in/edsel-mustapa" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="fa-fw" />
          </a>
          <a href="https://instagram.com/edselpm" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="fa-fw" />
          </a>
        </div>
      </div>
      <div className="h-full flex flex-col justify-center pb-10">
        <TitleScroll/>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center h-screen">
        <Image
        width={500}
        height={500}
          src={profile_img.src}
          alt=""
          className="h-1/3 xl:w-1/5 aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-300 rounded border border-cs-dark hover hover:border-white hover:scale-105"
        />
        <div className="mx-10 w-[300px] text-center md:text-left mt-5 md:mt-0">
          <div>Edsel Parama Mustapa</div>
          <div className="mb-5">
            {Math.abs(moment("2006-09-19").diff(moment.now(), "year"))} year old
          </div>
          <div>
            I’m a passionate software developer who quickly adapts to new challenges and environments.
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-lg font-bold mb-10">Skills</h1>
        <div className="flex flex-row justify-center flex-wrap">
          {skills.map((x) => (
            <div
              key={x}
              className="p-2 m-2 px-4 bg-cs-dark text-cs-light rounded-full w-fit hover:bg-green-200 hover:text-cs-dark cursor-default transition-colors"
            >
              {x}
            </div>
          ))}
        </div>
      </div>
{/* 
      <div className="flex flex-col justify-center items-center mt-52">
        <h1 className="text-center text-lg font-bold mb-10">Experience</h1>
      </div> */}

      <div className="h-[100px]"></div>
    </div>
  );
}
