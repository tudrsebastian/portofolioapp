import Image from "next/image";
import Link from "next/link";
import React from "react";
import Efp from "../public/assets/projects/efp.png";
import RenovariHub from "../public/assets/projects/RenovariHub.png";
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
            title="Eco Friendly Packing"
            backgroundImg={Efp}
            projectUrl="/efp"
            tech="SvelteKit"
          />
          <ProjectItem
            title="Renovari Hub"
            backgroundImg={RenovariHub}
            projectUrl="/renovarihub"
            tech="JavaScript + JQuery"
          />
          <ProjectItem
            title="Movieflix App"
            backgroundImg={movieflixapp}
            projectUrl="/movieflix"
            tech="Vite + ReactJS"
          />
          <ProjectItem
            title="Sharelink App"
            backgroundImg={sharelinkImg}
            projectUrl="/sharelink"
            tech="Vite + SvelteKit"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
