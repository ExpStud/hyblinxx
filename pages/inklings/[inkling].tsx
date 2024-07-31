import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
  PreviewData,
} from "next";
import { PageLayout } from "@components";
import { inklings } from "@constants";
import { Collection } from "src/types";
import { ParsedUrlQuery } from "querystring";

interface InklingsProps {
  inkling: Collection;
}

const InklingsPage: NextPage<InklingsProps> = ({ inkling }) => {
  return (
    <PageLayout>
      {!inkling ? <div>Inkling not found</div> : <h1>{inkling.name}</h1>}
    </PageLayout>
  );
};

// Generates the paths for each inkling based on the dataset. This function runs at build time.
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = inklings.map((item) => ({
    params: { inkling: item.name.toLocaleLowerCase().replace(" ", "-") },
  }));

  return { paths, fallback: false };
};

interface Params extends ParsedUrlQuery {
  inkling: string;
}
// Fetches the data for each inkling based on the dynamic segment (inkling). This function also runs at build time
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>
) => {
  const { inkling } = context.params as Params;
  const foundInkling = inklings.find(
    (h) => h.name.toLocaleLowerCase().replace(" ", "-") === inkling
  );

  return {
    props: {
      inkling: foundInkling || null,
    },
  };
};

export default InklingsPage;
