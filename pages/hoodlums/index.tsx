import { PageLayout, AboutView } from "@components";
import { NextPage } from "next";
import { useState } from "react";

const Hoodlums: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([]);

  return (
    <PageLayout assets={assets}>
      <AboutView setAssets={setAssets} />
    </PageLayout>
  );
};

export default Hoodlums;
