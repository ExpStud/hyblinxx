import { PageLayout, LandingView } from "@components";
import { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([]);

  return (
    <PageLayout assets={assets} fixed>
      <LandingView setAssets={setAssets} />
    </PageLayout>
  );
};
export default Home;
