import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
  PreviewData,
} from "next";
import { PageLayout } from "@components";
import { hoodlums } from "@constants";
import { Collection } from "src/types";
import { ParsedUrlQuery } from "querystring";

interface HoodlumProps {
  hoodlum: Collection;
}

const HoodlumPage: NextPage<HoodlumProps> = ({ hoodlum }) => {
  return (
    <PageLayout>
      {!hoodlum ? <div>Hoodlum not found</div> : <h1>{hoodlum.name}</h1>}
    </PageLayout>
  );
};

// Generates the paths for each hoodlum based on the dataset. This function runs at build time.
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = hoodlums.map((item) => ({
    params: { hoodlum: item.name.toLocaleLowerCase().replace(" ", "-") },
  }));

  return { paths, fallback: false };
};

interface Params extends ParsedUrlQuery {
  hoodlum: string;
}
// Fetches the data for each hoodlum based on the dynamic segment (hoodlum). This function also runs at build time
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>
) => {
  const { hoodlum } = context.params as Params;
  const foundHoodlum = hoodlums.find(
    (h) => h.name.toLocaleLowerCase().replace(" ", "-") === hoodlum
  );

  return {
    props: {
      hoodlum: foundHoodlum || null,
    },
  };
};

export default HoodlumPage;
