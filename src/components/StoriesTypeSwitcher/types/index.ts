export type MenuPropsType = {
  open: boolean;
  switcherOpen: HTMLElement | null;
  closeSwitcher: () => void;
  fullWidth?: boolean;
};
