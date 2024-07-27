import { Dispatch, SetStateAction, FC, useContext } from "react";

import { ViewContext } from "@contexts";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const AboutView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

  return (
    <div
      className="w-full flex flex-col mt-28 xl:mt-0 xl:flex-row items-center xl:items-start justify-center sm:px-10 gap-8 xl:gap-8 3xl:gap-32 overflow-hidden
        xl:absolute xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-y-1/2 xl:-translate-x-1/2"
    ></div>
  );
};

export default AboutView;
