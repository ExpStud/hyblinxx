import { PageLayout, AboutView } from "@components";
import { NextPage } from "next";
import { useState } from "react";

const Gallery: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([]);

  return (
    <PageLayout headerType="absolute" assets={assets}>
      <AboutView setAssets={setAssets} />
    </PageLayout>
  );
};

export default Gallery;
