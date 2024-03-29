import Image from "next/image";
import Link from "next/link";
import React from "react";
import WeatherApp from "../public/assets/projects/weather.png";
import cryptoxchange from "../public/assets/projects/CryptoXchange.JPG";
import movieflixapp from "../public/assets/projects/movieflixapp.png";
import sharelinkImg from "../public/assets/projects/sharelink.png";
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
          <ProjectItem
            title="Movieflix App"
            backgroundImg={movieflixapp}
            projectUrl="/movieflix"
            tech="Vite+ReactJS"
          />
          <ProjectItem
            title="Sharelink App"
            backgroundImg={sharelinkImg}
            projectUrl="/sharelink"
            tech="Vite+SvelteKit"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
