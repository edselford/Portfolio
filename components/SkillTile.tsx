"use client";
import { motion } from "framer-motion";
import { MouseEventHandler } from "react";
export default function SkillTile({
  title,
  subskill,
  desc,
  expand,
  onClick,
}: {
  title: string;
  desc: string;
  subskill: string[];
  expand: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}) {
  //   const [expand, setExpand] = useState(false);
  return (
    <motion.div
      onClick={onClick}
      animate={{
        width: expand ? "500px" : `${12 * title.length}px`,
        height: expand ? "250px" : "40px",
        borderRadius: expand ? "20px" : "50px",
        fontWeight: expand ? "bold" : "normal"
        // textAlign: expand ? "start" : "center",
      }}
      //   whileHover={{ background: "rgb(187 247 208)", color: "#252525" }}
      style={{
        // background: "#252525",
        padding: "0.5rem",
        margin: "0.5rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        // color: "#d5e1e1",
        textAlign: "center",
        overflow: "hidden",
      }}
      className="group bg-cs-dark text-cs-light hover:bg-green-200 hover:text-cs-dark transition-colors w-full"
    >
      <div className="flex flex-col overflow-hidden">
        <span>{title}</span>
        <div className="my-2 font-normal text-start">
            {desc}
        </div>
        <div className="flex flex-row flex-wrap ">
          {subskill.map((x) => {
            return (
              <motion.div
                key={x}
                //   whileHover={{ background: "rgb(187 247 208)", color: "#252525" }}
                style={{
                  // background: "#252525",
                  padding: "0.3rem",
                  margin: "0.1rem",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  textAlign: "center",
                  borderRadius: "5px",
                }}
                className="group-hover:bg-cs-dark group-hover:text-cs-light bg-green-200 text-black transition-colors font-normal"
              >
                {x}
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
