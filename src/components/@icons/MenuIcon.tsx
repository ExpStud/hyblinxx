import { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const MenuIcon: FC<Props> = (props: Props) => {
  const { ...componentProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="15"
      viewBox="0 0 29 15"
      fill="none"
      {...componentProps}
    >
      <rect width="29" height="3" rx="1" fill="#EDF67D" />
      <rect y="6" width="29" height="3" rx="1" fill="#EDF67D" />
      <rect y="12" width="29" height="3" rx="1" fill="#EDF67D" />
    </svg>
  );
};

export default MenuIcon;
