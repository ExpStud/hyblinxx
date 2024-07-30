import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
  PreviewData,
} from "next";
import { PageLayout } from "@components";
import { gallery } from "@constants";
import { Collection } from "src/types";
import { ParsedUrlQuery } from "querystring";

interface GalleryProps {
  item: Collection;
}

const GalleryPage: NextPage<GalleryProps> = ({ item }) => {
  return (
    <PageLayout>
      {!item ? <div>Inkling not found</div> : <h1>{item.name}</h1>}
    </PageLayout>
  );
};

// Generates the paths for each item based on the dataset. This function runs at build time.
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = gallery.map((item) => ({
    params: { item: item.name.toLocaleLowerCase().replace(" ", "-") },
  }));

  return { paths, fallback: false };
};

interface Params extends ParsedUrlQuery {
  item: string;
}

// Fetches the data for each item based on the dynamic segment (item). This function also runs at build time.
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>
) => {
  const { item } = context.params as Params;
  const foundItem = gallery.find(
    (i) => i.name.toLocaleLowerCase().replace(" ", "-") === item
  );

  return {
    props: {
      item: foundItem || null,
    },
  };
};

export default GalleryPage;
