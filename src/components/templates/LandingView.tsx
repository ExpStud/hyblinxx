import { Dispatch, SetStateAction, FC } from "react";
import { handleAssetLoad } from "@utils";
import Image from "next/image";
import { ViewContext } from "@contexts";
import { useWindowSize } from "src/hooks";
import { enterAnimation } from "src/constants";
import { motion } from "framer-motion";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const [winwWidth] = useWindowSize();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <motion.div
        {...enterAnimation}
        className="absolute-center !top-[40svh] z-10 px-5 md:px-10 lg:px-0"
      >
        <Image
          src="/images/icons/logo-text.svg"
          width={814}
          height={106}
          alt="Hyblinxx"
        />
      </motion.div>
      <motion.div
        {...enterAnimation}
        className="object-contain fixed bottom-0 2xl:-bottom-32 3xl:-bottom-[25vh] -z-10"
      >
        <Image
          src={`/images/pages/landing/clouds-${
            winwWidth >= 768 ? "xl" : "sm"
          }.png`}
          alt="EXP"
          width={1439}
          height={783}
          className="w-screen"
          onLoadingComplete={() => handleAssetLoad(0, setAssets)}
        />
      </motion.div>
    </div>
  );
};

export default LandingView;
