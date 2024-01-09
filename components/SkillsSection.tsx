import React from "react"
import Image from "next/image"



const skills = [
  { skill: "HTML" },
  { skill: "Java" },
  { skill: "React" },
  { skill: "CSS" },
  { skill: "Python" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "C" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
]

const SkillsSection = () => {
  return (
    <section id="skills">
      <div className="my-2 mt-1 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Skills
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">

        <div className="grid grid-cols-3 gap-4">
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
        </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection