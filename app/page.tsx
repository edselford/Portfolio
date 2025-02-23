"use client";

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
import { motion } from "framer-motion";
import SkillTile from "@/components/SkillTile";
import { useEffect, useState } from "react";

const sometype_font = Sometype_Mono({ subsets: ["latin"] });

const skills = {
  "Web Development": {
    desc: "Web development is what I learned first, I've learned many languages and frameworks for the web.",
    data: [
      "Javascript",
      "Typescript",
      "React",
      "TailwindCSS",
      "PHP",
      "Laravel",
      "ASP.NET Core",
      "NodeJS",
      "MySQL",
      "MongoDB",
    ],
  },
  "Mobile Development": {
    desc: "Mobile development was part of the competition so I studied it. And i've been mastering it, especially android.",
    data: [
      "Java",
      "Kotlin",
      "Jetpack Compose",
      "Flutter",
      "Kotlin Multiplatform",
    ],
  },
  "Desktop Development": {
    desc: "Desktop development is also part of the competition, and is scope-specific in c# with the .net framework.",
    data: ["C#", ".NET Framework", "Entity Framework","Winform", "SQL Server"],
  },
  "Data Analyst": {
    desc: "Data analyst is a new thing I learned and I still have to learn more, for the needs of competition in ASEAN.",
    data: ["Python"],
  },
};

// export const metadata: Metadata = {
//   title: "Edsel Mustapa - Portfolio",
//   description: "My personal portfolio",
// };

export default function Home() {
  const [index, setIndex] = useState<number | null>(null);
  return (
    <div
      className={`${sometype_font.className} px-5 lg:px-40 h-screen cursor-default select-none`}
    >
      <div className="mt-5 flex flex-row justify-between">
        <div>PORTFOLIO</div>
        <div className="w-[100px] flex flex-row justify-around">
          <a
            href="https://github.com/edselford"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="fa-fw" />
          </a>
          <a
            href="https://www.linkedin.com/in/edsel-mustapa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="fa-fw" />
          </a>
          <a
            href="https://instagram.com/edselpm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="fa-fw" />
          </a>
        </div>
      </div>
      <div className="h-full flex flex-col justify-center pb-10">
        <TitleScroll />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center h-screen">
        <Image
          width={500}
          height={500}
          src={profile_img.src}
          alt=""
          className="h-[200px] w-[200px] aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-300 rounded border border-cs-dark hover hover:border-white"
        />
        <div className="mx-10 w-[300px] text-center md:text-left mt-5 md:mt-0">
          <div>Edsel Parama Mustapa</div>
          <div className="mb-5">
            {Math.abs(moment("2006-09-19").diff(moment.now(), "year"))} year old
          </div>
          <div>
            I’m a passionate software developer who quickly adapts to new
            challenges and environments.
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-lg font-bold mb-10">Skills</h1>
        <div className="2xl:flex 2xl:flex-row 2xl:justify-center 2xl:flex-wrap gap-2 grid grid-cols-1 md:grid-cols-2 max-2xl:*:!w-full">
          {Object.entries(skills).map(([key, value], i) => (
            <SkillTile
              key={key}
              title={key}
              desc={value.desc}
              subskill={value.data}
              expand={index == i}
              onClick={() => setIndex(index == i ? null : i)}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-52">
        <h1 className="text-center text-lg font-bold mb-10">Experience</h1>

        <div className="flex flex-col md:flex-row justify-between w-full 2xl:w-1/2">
          <span>2023-2024</span>
          <div>
            <div className="">Internship - CV. Sarana Elektrika Optima</div>
            <div>as Web Developer</div>
          </div>
        </div>
      </div>

      <div className="h-[100px]"></div>
    </div>
  );
}
