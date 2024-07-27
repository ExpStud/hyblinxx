import { Dispatch, FC, SetStateAction, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon, IconBar, NavItem } from "@components";
import Link from "next/link";
import { useLockBodyScroll, useWindowSize } from "@hooks";
import { fadeVariants, midExitAnimation, navigation } from "@constants";
import { useOutsideAlerter } from "@hooks";

interface Props {
  toggleMenu: () => void;
  open: boolean;
}

const Menu: FC<Props> = (props: Props) => {
  const { toggleMenu, open } = props;
  const [winWidth] = useWindowSize();

  const isMobile: boolean = winWidth < 730;
  //stop page scroll (when modal or menu open)
  useLockBodyScroll(open);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {open && (
        <motion.div
          key="main-menu"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: isMobile ? winWidth - 15 : 720, opacity: 1 }}
          exit={{
            width: 0,
            transition: { duration: 0.2 },
            opacity: 1,
          }}
          transition={{ duration: 0.4 }}
          className="rounded-l-3xl bg-[#2F2E3D]/80 fixed top-0 right-0 z-50 h-[100svh]"
          onClick={() => toggleMenu()}
        >
          <motion.div
            className="explorer-scroll px-4 sm:px-6 lg:px-10 py-6 relative h-full flex flex-col justify-between overflow-auto"
            variants={fadeVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <CloseIcon
              onClick={() => toggleMenu()}
              className="cursor-pointer self-end "
            />
            <div className="mt-10 ml-2 mr-4 md:mx-6 flex flex-col flex-grow">
              {navigation.map((item, index) => (
                <NavItem key={index} href={item.href ?? "/"}>
                  {item.name}
                </NavItem>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
