import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="p-12">
      <h1 className="flex items-center">
        <StaticImage
          src="../images/logo.png"
          alt="logo"
          height={50}
          loading="eager"
          placeholder="blurred"
        />
        <span className="ml-3">nimus</span>
      </h1>
      <p className="mt-10">My name is François Onimus</p>
      <br />
      <a href="https://github.com/fonimus/" target="_blank" rel="noreferrer">
        Github
      </a>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>fonimus</title>;
