import { FC, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon, IconBar, NavItem } from "@components";
import { useLockBodyScroll, useOutsideAlerter, useWindowSize } from "@hooks";
import { menuChildVariants, mobileMenuParent, navigation } from "@constants";
import Link from "next/link";

interface Props {
  close: () => void;
  open: boolean;
}

const Menu: FC<Props> = (props: Props) => {
  const { close, open } = props;
  const [winWidth] = useWindowSize();

  const isMobile: boolean = winWidth < 640;
  const ref = useRef<HTMLDivElement>(null);

  //stop page scroll (when modal or menu open)
  useLockBodyScroll(open);
  useOutsideAlerter(ref, close);

  useEffect(() => {
    if (winWidth >= 768) close();
  }, [winWidth]);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.backdropFilter = "blur(23px)";
    }
  }, [open]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {open === true && (
        <motion.div
          key="main-menu"
          initial={{ width: 0, opacity: 0 }}
          animate={{
            width: isMobile ? 294 : 400,
            opacity: 1,
            transition: { duration: 0.45 },
          }}
          exit={{
            width: 0,
            transition: { duration: 0.35 },
            opacity: 1,
          }}
          className="mobile-nav fixed top-0 right-0 z-50 h-[100svh]"
          ref={ref}
        >
          <div className="p-5 relative h-full flex flex-col justify-start gap-5 overflow-auto">
            <CloseIcon
              onClick={() => close()}
              className="cursor-pointer z-50"
            />

            <motion.div
              className="flex flex-col flex-grow items-start gap-3"
              variants={mobileMenuParent}
              initial={"hidden"}
              animate={"show"}
              exit={"closed"}
            >
              <Link href="/">
                <motion.img
                  src="/images/icons/logo-text.svg"
                  width={184}
                  height={25}
                  alt="Hyblinxx"
                  className="mt-8 mb-5"
                  variants={menuChildVariants}
                />
              </Link>
              {navigation.map((item, index) => (
                <NavItem key={index} href={item.href ?? "/"}>
                  {item.name}
                </NavItem>
              ))}
            </motion.div>
            <IconBar className="self-start" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
