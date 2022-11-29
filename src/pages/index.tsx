import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="p-12">
      <h1>Hey, I&apos;m fonimus</h1>
      <p>My name is François Onimus</p>
      <br />
      <a href="https://github.com/fonimus/" target="_blank" rel="noreferrer">
        Github
      </a>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
