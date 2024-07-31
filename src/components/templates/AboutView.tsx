import { Dispatch, SetStateAction, FC } from "react";
interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const AboutView: FC<Props> = ({ setAssets }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      About Page
    </div>
  );
};

export default AboutView;
