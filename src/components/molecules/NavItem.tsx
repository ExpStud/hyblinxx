import { FC, ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";
import { menuChildVariants } from "src/constants";

interface Props {
  children: ReactNode;
  href: string;
  disabled?: boolean;
  isExternal?: boolean;
}
const NavItem: FC<Props> = (props: Props) => {
  const { children, href, disabled = false, isExternal = false } = props;

  const router = useRouter();
  const isCurrent = router.pathname === href;

  const DisabledItem = () => (
    <div className="flex gap-2 justify-center items-center">
      <div className={`opacity-0`}>
        <Image src="/images/arrow.png" alt="arrow" width={14} height={22} />
      </div>
      <div className={`py-5 opacity-10 cursor-default `}>{children}</div>
    </div>
  );

  return (
    <>
      {disabled ? (
        <DisabledItem />
      ) : isExternal ? (
        <a href={href} rel="noreferrer" target="_blank">
          <Item isCurrent={isCurrent}>{children}</Item>
        </a>
      ) : (
        <Link href={href}>
          <Item isCurrent={isCurrent}>{children}</Item>
        </Link>
      )}
    </>
  );
};

interface ItemProps {
  children: ReactNode;
  isCurrent: boolean;
}
const Item: FC<ItemProps> = (props: ItemProps) => {
  const { children, isCurrent } = props;
  return (
    <motion.div
      className={`flex gap-2 justify-center items-center transition-bg duration-300 py-1 font-rubik font-semibold md:font-regular md:font-inter text-[20px] md:text-xs ${
        isCurrent
          ? "text-h-purple-750 cursor-default"
          : " text-white hover:text-h-yellow-400 cursor-pointer"
      }`}
      variants={menuChildVariants}
    >
      {children}
    </motion.div>
  );
};

export default NavItem;
