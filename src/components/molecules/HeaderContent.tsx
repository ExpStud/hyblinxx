import { FC, useState } from "react";
import { CloseIcon, IconBar, Logo, Menu, MenuIcon, NavItem } from "@components";
import { AnimatePresence } from "framer-motion";
import { navigation } from "@constants";

const HeaderContent: FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className="w-full max-w-[1240px] h-12 md:h-16 flex items-center justify-between z-20 bg-h-purple-700/25 border border-h-purple-750/5 backdrop-blur-sm rounded-[32px] px-3.5 md:px-6">
      {/* className="w-1/4" */}
      <Logo />
      {/*  w-1/2 */}
      <div className="hidden md:flex gap-14 items-center justify-center lg:gap-20 text-sm">
        {navigation.map((item, index) => (
          <NavItem key={index} href={item.href ?? "/"}>
            {item.name}
          </NavItem>
        ))}
      </div>
      {/* className="w-1/4 !justify-end" */}
      <IconBar />
      {/*
      <AnimatePresence mode="wait">
        {!openMenu ? (
          <div
            key="menu-icon"
            onClick={() => setOpenMenu(true)}
            className="cursor-pointer"
          >
            <MenuIcon />
          </div>
        ) : (
          <div
            onClick={() => setOpenMenu(false)}
            className="cursor-pointer z-[100]"
          >
            <CloseIcon />
          </div>
        )}
      </AnimatePresence>

      <Menu toggleMenu={setOpenMenu} open={openMenu} /> */}
    </div>
  );
};
export default HeaderContent;
