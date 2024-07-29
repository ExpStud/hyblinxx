import { Dispatch, SetStateAction, FC } from "react";
import { handleAssetLoad } from "@utils";
import Image from "next/image";
import { ViewContext } from "@contexts";
import { useWindowSize } from "src/hooks";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const [winwWidth] = useWindowSize();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Image
        src="/images/icons/logo-text.svg"
        width={814}
        height={106}
        alt="Hyblinxx"
        className="absolute-center !top-[40svh] z-10 px-5 md:px-10 lg:px-0"
      />
      <Image
        src={`/images/pages/landing/clouds-${
          winwWidth >= 768 ? "xl" : "sm"
        }.png`}
        alt="EXP"
        width={1439}
        height={783}
        className="object-contain w-screen absolute bottom-0 2xl:-bottom-32 3xl:-bottom-[25vh] -z-10"
        onLoadingComplete={() => handleAssetLoad(0, setAssets)}
      />
    </div>
  );
};

export default LandingView;
