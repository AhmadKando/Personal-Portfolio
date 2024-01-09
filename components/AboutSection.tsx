"use client";

import React from "react"
import Image from "next/image"

import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

/*const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "C" },
  { skill: "Java" },
  { skill: "Python" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
]
{skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
*/

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-0.5 pb-12 md:pt-16 md:pb-48 ">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              More about me!
            </h1>
            <p>
              Hi, my name is Ahmad and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Toronto, ON.
            </p>
            <br />
            <p>
              I am currently a student at the University of Guelph, studying Software Engineering
              with an expected graduation in 2026.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From playing sports, working on cars, gaming, to making Tiktok car videos,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and I am
              always open to new opportunities.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Education</h1>
            <div className="flex items-center">

              <div className="mr-2">
                 <h3 className="text-l font-bold ">University of Guelph 
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="italic">2026</span></h3>
                 <p className="text-teal-500 ">BComp Software Engineering</p>
                  </div>
                     </div>
                     <h1 className="text-l font-bold mt-14">Coursework</h1>
                     <ul className="text-teal-500">
                      <li>Structure and Application of Microcomputers</li>
                      <li>Data Structures</li>
                      <li>Object Oriented Programming</li>
                      <li>Software Design III</li>
                     </ul>
              </div>
        </div>
      </div>

      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="skills"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default AboutSection