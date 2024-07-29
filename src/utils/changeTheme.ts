

export interface Theme {
  color: string;
  primary: string; 
}

export const theme: Theme[] = [
  {
    color: "light",
    primary: "#F6EFD3",
  },
  {
    color: "dark",
    primary: "#1D201F",
  },
];

export const changeTheme = (theme: Theme) => {
  document.querySelector("html")?.setAttribute("color-theme", theme.color);
};
