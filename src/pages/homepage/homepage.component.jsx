import React from "react";
import { HomePageContainer } from "./homepage.styles";

import Directory from "../../components/directory/directory.component";

export const Homepage = () => {
  return (
    <HomePageContainer>
      <Directory />
      Icons made by{" "}
      <a href="http://www.freepik.com/" title="Freepik">
        Freepik
      </a>{" "}
      from{" "}
      <a href="https://www.flaticon.com/" title="Flaticon">
        {" "}
        www.flaticon.com
      </a>
    </HomePageContainer>
  );
};
