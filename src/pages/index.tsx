import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="m-12">
      <h1>Hey, I'm fonimus</h1>
      <br />
      <a href="https://github.com/fonimus/" target="_blank">
        Github
      </a>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
