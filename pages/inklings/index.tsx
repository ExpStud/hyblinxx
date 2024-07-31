import { PageLayout, AboutView } from "@components";
import { NextPage } from "next";
import { useState } from "react";

const Inklings: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([]);

  return (
    <PageLayout assets={assets} fixed>
      <AboutView setAssets={setAssets} />
    </PageLayout>
  );
};

export default Inklings;
