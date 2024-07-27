import { FC, HTMLAttributes } from "react";
import { TwitterIcon, DiscordIcon, ExpIcon, ExchangeIcon } from "@components";

interface Props extends HTMLAttributes<HTMLDivElement> {}
const IconBar: FC<Props> = (props: Props) => {
  const { className } = props;
  return (
    <div
      className={`flex items-center justify-center gap-6 ${className ?? ""}`}
    >
      <ExchangeIcon />
      <TwitterIcon />
    </div>
  );
};

export default IconBar;
