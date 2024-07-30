import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  PreviewData,
} from "next";
import { useRouter } from "next/router";
import { PageLayout } from "@components";
import { hoodlums } from "@constants";
import { Collection } from "src/types";
import { ParsedUrlQuery } from "querystring";

interface HoodlumProps {
  hoodlum: Collection;
}

const HoodlumPage = ({ hoodlum }: HoodlumProps) => {
  const router = useRouter();
  const { name } = router.query;

  console.log("3. name ", name);

  if (!hoodlum) {
    return <div>Hoodlum not found</div>;
  }

  return (
    <PageLayout headerType="absolute">
      <h1>{hoodlum.name}</h1>
      <p>{hoodlum.description}</p>
      {/* Render other properties as needed */}
    </PageLayout>
  );
};

// Generates the paths for each hoodlum based on the dataset. This function runs at build time.
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = hoodlums.map((hoodlum) => ({
    params: { name: hoodlum.name },
  }));

  return { paths, fallback: false };
};

interface Params extends ParsedUrlQuery {
  name: string;
}
// Fetches the data for each hoodlum based on the dynamic segment (name). This function also runs at build time
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>
) => {
  const { name } = context.params as Params;
  const hoodlum = hoodlums.find((h) => h.name === name);

  return {
    props: {
      hoodlum: hoodlum || null,
    },
  };
};

export default HoodlumPage;
