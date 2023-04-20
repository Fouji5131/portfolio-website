import React from "react";
import PageLayout from "../components/layout/pageLayout";

import Info from "../components/homePage/Info";
import Dp from "../components/homePage/Dp";

const Home = () => {
  return (
    <div>
      <PageLayout>
        <Info />
        <Dp />
      </PageLayout>
    </div>
  );
};

export default Home;
