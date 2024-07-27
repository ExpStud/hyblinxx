import { FC, SVGProps } from "react";
interface Props extends SVGProps<SVGSVGElement> {
  url?: string;
}

const TwitterIcon: FC<Props> = (props: Props) => {
  const { url = "https://twitter.com/sandbox_studio_" } = props;
  return (
    <a
      href={url}
      rel="noreferrer"
      target="_blank"
      className="transition-all duration-300 opacity-80 hover:opacity-100"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M9.27625 6.77491L14.9224 0H13.5844L8.6819 5.88256L4.76624 0H0.25L6.17124 8.89547L0.25 16H1.58803L6.76525 9.78782L10.9005 16H15.4167L9.27625 6.77491ZM7.44363 8.97384L6.84369 8.08805L2.07014 1.03974H4.12528L7.97759 6.72795L8.57754 7.61374L13.5851 15.0075H11.5299L7.44363 8.97384Z"
          fill="white"
        />
      </svg>
    </a>
  );
};

export default TwitterIcon;
