import { FC } from "react";
import { IconBar, Logo, Menu, MenuIcon, NavItem } from "@components";
import { useCycle } from "framer-motion";
import { navigation } from "@constants";

const HeaderContent: FC = () => {
  const [open, setOpen] = useCycle(false, true);

  return (
    <div
      className={`w-full max-w-[1240px] h-12 md:h-16 flex items-center justify-between z-20 rounded-[32px] px-3.5 md:px-6 transition-1000 border ${
        open
          ? "bg-transparent border-transparent"
          : "bg-h-purple-700/25  border-h-purple-750/5 backdrop-blur-sm "
      }`}
    >
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
      <IconBar className="hidden md:flex" />

      <MenuIcon className="md:hidden" onClick={() => setOpen()} />
      <Menu toggleMenu={setOpen} open={open} />
    </div>
  );
};
export default HeaderContent;
