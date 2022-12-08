import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Sebastian | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Tudora Sebastian</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/tudora-sebastian-1091a3224/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/tudrsebastian?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Team Player <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Critical Thinker
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Team Player</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with a drive to get the best outcome by combining all kinds of
          technologies. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated team
          player, with solid interpersonal abilities and complex problem-solving
          skills. Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>TypeScript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Nest JS
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>SQL
            <span className="px-2">|</span>Docker
            <span className="px-2">|</span>Redux
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> Jest
            <span className="px-2">|</span> Firebase
            <span className="px-2">|</span> RESTAPI
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Capgemini Engineering</span>
            <span className="px-2">|</span>Constanta, Romania
          </p>
          <p className="py-1 italic">
            Front End Web Developer (May 2022 - Nov 2022)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Worked on a backoffice task manager app for the company employees
              to track down their tasks and help optimizing the work.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a lot of technologies like
              NextJS,ReactRouter, NestJS, Postgres, Docker, TypeORM, JWT, bcrypt
              and many others.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">LionSoft Ro</span>
            <span className="px-2">|</span>Constanta, Romania
          </p>
          <p className="py-1 italic">
            Front End Web Developer (Jan 2022 - March 2022)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Worked with a team to develop a frontoffice subscription app to
              track down the availability of subscriptions,create new
              subscriptions and remove old ones .
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>Worked directly with ReactJS MaterialUI and Firebase</li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              Informal School of IT Bucharest
            </span>
            <span className="px-2">|</span>Constanta, Romania
          </p>
          <p className="py-1 italic">
            Trainee FrontEnd Developer(Dec 2021 - April 2022)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              In 2021 I started the course of React at “Informal School of IT
              Bucharest”, focusing on ReactJS app development and taking my
              skills to a true FrontEnd Developer while also working as an
              intern.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">
          Other Professional Experience
        </h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Constanta, RO</span>
            <span className="px-2">|</span>Constanta, RO
          </p>
          <p className="py-1 italic">Proffesionnal Barber (2019 – 2021)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Performed in El Comandanta Barbershop for 3 years with a lot of
              customer interactions and customers services.
            </li>
            <li>
              Utilized proven and demonstrated knowledge of multiple
              certifications on barbering from some of the most prolific barbers
              in RO.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
