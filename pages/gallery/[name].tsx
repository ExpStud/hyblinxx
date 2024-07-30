import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  PreviewData,
} from "next";
import { useRouter } from "next/router";
import { PageLayout } from "@components";
import { gallery } from "@constants";
import { Collection } from "src/types";
import { ParsedUrlQuery } from "querystring";

interface GalleryProps {
  item: Collection;
}

const GalleryPage = ({ item }: GalleryProps) => {
  return (
    <PageLayout>
      {!item ? <div>Inkling not found</div> : <h1>{item.name}</h1>}
    </PageLayout>
  );
};

// Generates the paths for each hoodlum based on the dataset. This function runs at build time.
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = gallery.map((item) => ({
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
  const item = gallery.find(
    (i) => i.name.toLocaleLowerCase().replace(" ", "-") === name
  );

  return {
    props: {
      item: item || null,
    },
  };
};

export default GalleryPage;
