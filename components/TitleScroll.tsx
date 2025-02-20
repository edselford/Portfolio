"use client"

import { useScroll, useTransform, motion } from "framer-motion";
import { Major_Mono_Display } from "next/font/google";

const major_font = Major_Mono_Display({ weight: "400", subsets: ['latin'] });

export function TitleScroll() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 1000], [0, 1000 * 0.4]);

  return (
    <motion.div
      className={`${major_font.className} font-normal lg:text-[200px] sm:text-[100px] text-[50px] text-center `}
      style={{ y }}
    >
      EDsel
    </motion.div>
  );
}
