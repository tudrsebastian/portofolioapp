import Image from "next/image";
import Link from "next/link";
import React from "react";
import WeatherApp from "../public/assets/projects/weather.png";
import cryptoxchange from "../public/assets/projects/CryptoXchange.JPG";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Weather App"
            backgroundImg={WeatherApp}
            projectUrl="/weather"
            tech="NextJS"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg={cryptoxchange}
            projectUrl="/crypto"
            tech="NextJS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
// <ProjectItem
// title='Twitch UI'
// backgroundImg={twitchImg}
// projectUrl='/twitch'
// tech='Next JS'

// />
// <ProjectItem
// title="Netflix App"
// backgroundImg={netflixImg}
// projectUrl="/netflix"
// tech="React JS"
// />
// <ProjectItem
// title="Crypto App"
// backgroundImg={cryptoImg}
// projectUrl="/crypto"
// tech="NextJS"
// />
