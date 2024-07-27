import { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  url?: string;
}

const ExchangeIcon: FC<Props> = (props: Props) => {
  const { url = "https://twitter.com/sandbox_studio_" } = props;
  return (
    <a href={url} rel="noreferrer" target="_blank" className="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        className="group"
      >
        <path
          d="M9.86905 6.16216e-06H1.7437C1.05771 6.16216e-06 0.5 0.57295 0.5 1.27714V9.60015C0.5 9.60015 0.5 10.8769 1.60437 10.8769H2.72625C3.84737 10.8769 3.83519 9.61941 3.83519 9.61941L3.8546 3.48286L9.85039 3.46243C9.85039 3.46243 11.0941 3.46243 11.0941 2.31575V1.151C11.0941 -0.0129626 9.86943 6.16216e-06 9.86943 6.16216e-06H9.86905Z"
          fill="white"
        />
        <path
          d="M6.64497 16H14.7703C15.4563 16 16.014 15.4271 16.014 14.7229V6.39985C16.014 6.39985 16.014 5.12311 14.9096 5.12311H13.7878C12.6667 5.12311 12.6788 6.3806 12.6788 6.3806L12.6594 12.5171L6.66362 12.5376C6.66362 12.5376 5.41992 12.5376 5.41992 13.6843V14.849C5.41992 16.013 6.64459 16 6.64459 16H6.64497Z"
          fill="white"
        />
      </svg>
    </a>
  );
};

export default ExchangeIcon;
