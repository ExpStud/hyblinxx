import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  PreviewData,
} from "next";
import { useRouter } from "next/router";
import { PageLayout } from "@components";
import { inklings } from "@constants";
import { Collection } from "src/types";
import { ParsedUrlQuery } from "querystring";

interface InklingsProps {
  inkling: Collection;
}

const InklingsPage = ({ inkling }: InklingsProps) => {
  return (
    <PageLayout>
      {!inkling ? <div>Inkling not found</div> : <h1>{inkling.name}</h1>}
    </PageLayout>
  );
};

// Generates the paths for each hoodlum based on the dataset. This function runs at build time.
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = inklings.map((item) => ({
    params: { name: item.name.toLocaleLowerCase().replace(" ", "-") },
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
  const item = inklings.find(
    (i) => i.name.toLocaleLowerCase().replace(" ", "-") === name
  );

  return {
    props: {
      inkling: item || null,
    },
  };
};

export default InklingsPage;
