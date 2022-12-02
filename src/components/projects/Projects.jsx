import React from "react";
import PortfolioItem from "../experience/portfolioitem/PortfolioItem";
import DcaDaily from "../../assets/dcadaily.png";

import "./projects.css";

const projects = () => {
  const sideProjects = [
    {
      name: "DCA Daily",
      website: "https://dcadaily.com/",
      description:
        "The site tracks the DCA(Dollar Cost Average) historical stats of various digital assets like Bitcoin, Ethereum etc. Implemented using BFF to get around Coingecko's api limitations and NextJS to leverage the static file generation for faster page loads and SEO",
      logo: DcaDaily,
    },
  ];

  return (
    <section id="experience">
      <h2>Personal Projects</h2>
      <div className="container experience__container">
        {sideProjects.map(({ name, website, description, logo }, index) => {
          return <PortfolioItem key={index} name={name} website={website} description={description} logo={logo}/>
        })}
      </div>
    </section>
  );
};

export default projects;
