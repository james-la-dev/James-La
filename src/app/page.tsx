"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import Contact from "@/components/contact";

import { nanumMyeongjo } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <motion.main
      className="flex flex-1 items-center justify-center py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div
        id="main-container"
        className="flex max-w-3xl flex-col items-start gap-8"
      >
        <div id="heading-container" className="flex flex-row items-end gap-3">
          <h5 className={cn(nanumMyeongjo.className, "text-xl text-[#030303]")}>
            James La
          </h5>
          <h5 className={cn(nanumMyeongjo.className, "text-xl text-[#030303]")}>
            [나 제임스]
          </h5>
        </div>

        <div id="about-container" className="space-y-3">
          <p className="text-sm">
            I&apos;m a software engineer with a passion for building products
            that are functional with additional attention to user-experience.
          </p>

          <p className="text-sm">
            Graduate of{" "}
            <ExternalPageLink
              title="Te Herenga Waka - Victoria University of Wellington"
              link="https://www.wgtn.ac.nz/"
            />
            , with a Bachelor of Science, majoring in Computer Science.
          </p>

          <p className="text-sm">
            Currently implementing Airport Operational Systems (AOS) for major
            airports globally.{" "}
            <ExternalPageLink title="Veovo" link="https://www.veovo.com/" />
          </p>
        </div>

        {/* Seperator */}
        <div className="h-[1px] w-full bg-border" />

        {/* Work Experience */}
        <div id="experience" className="space-y-1">
          <h6
            className={cn(
              "text-sm font-bold text-[#030303]",
              nanumMyeongjo.className
            )}
          >
            Work Experience
          </h6>
          <ul className="space-y-3">
            <li>
              <ExternalPageLink title="Veovo" link="https://www.veovo.com/" />
              &nbsp;
              <span className="text-sm">- Technical Consultant</span>
              <p className="text-xs">June 2025 - Present</p>
            </li>
            <li>
              <ExternalPageLink
                title="ECL Group"
                link="https://www.eclgroup.co.nz/"
              />
              &nbsp;
              <span className="text-sm">
                - Technical Support Representative
              </span>
              <p className="text-xs">November 2024 - May 2025</p>
            </li>
            <li>
              <ExternalPageLink
                link="https://www.wgtn.ac.nz/"
                title="Te Herenga Waka"
              />
              &nbsp;
              <span className="text-sm">- Tutor</span>
              <p className="text-xs">2024</p>
              <p className="text-xs">
                <span className="font-semibold">Courses:</span>&nbsp;
                <ExternalPageLink
                  title="COMP132"
                  link="https://www.wgtn.ac.nz/courses/comp/132/2024/offering?crn=30095"
                  className="text-xs"
                />
                ,&nbsp;
                <ExternalPageLink
                  title="INFO101"
                  link="https://www.wgtn.ac.nz/courses/info/101/2024/offering?crn=10038"
                  className="text-xs"
                />
              </p>
            </li>
          </ul>
        </div>

        {/* Education */}
        <div id="education" className="space-y-1">
          <h6
            className={cn(
              "mb-1 text-sm font-bold text-[#030303]",
              nanumMyeongjo.className
            )}
          >
            Education
          </h6>
          <div>
            <ExternalPageLink
              title="Te Herenga Waka - Victoria University of Wellington"
              link="https://www.wgtn.ac.nz/"
            />
            <p className="text-xs">2021 - 2024</p>
            <p className="text-sm">
              Bachelor of Science | Major in Computer Science.
            </p>
          </div>
        </div>

        <div id="skills" className="space-y-1">
          <h6
            className={cn(
              "mb-1 text-sm font-bold text-[#030303]",
              nanumMyeongjo.className
            )}
          >
            Skills
          </h6>
          <div className="grid grid-cols-3 gap-x-4 text-sm">
            <p className="col-span-1">Programming Languages:</p>
            <p className="col-span-2">
              C#, T-SQL, TypeScript, JavaScript, Python, Java, C++, HTML, CSS
            </p>
            <p className="col-span-1">Frameworks/Tools:</p>
            <p className="col-span-2">
              Windows Server, MS SQL, .NET, React, Next.js, Node.js, Tailwind
              CSS
            </p>
          </div>
        </div>

        {/* Socials/Contacts */}
        <Contact />
      </div>
    </motion.main>
  );
}

const ExternalPageLink = ({
  title,
  link,
  className,
}: {
  title: string;
  link: string;
  className?: string;
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      className={cn("cursor-pointer text-sm hover:text-accent", className)}
    >
      {title}
      <ExternalLink className="mb-1 inline-block h-2 w-2 -translate-y-1 transform" />
    </Link>
  );
};
