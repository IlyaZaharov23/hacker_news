import { FC } from "react";
import { Menu, MenuItem, Typography } from "@mui/material";
import { setShowedStoryType } from "store/hackerNews/actions";
import { getShowedStoryType } from "store/hackerNews/selectors";
import { styles } from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { menuItems } from "./menuConfig";

type MenuPropsType = {
  open: boolean;
  switcherOpen: HTMLElement | null;
  closeSwitcher: () => void;
};

export const StoriesTypeSwitcher: FC<MenuPropsType> = ({
  open,
  switcherOpen,
  closeSwitcher,
}) => {
  const storiesShowedType = useAppSelector(getShowedStoryType);
  const dispatch = useAppDispatch();
  const changeStoriesType = (type: string) => {
    dispatch(setShowedStoryType?.(type));
    closeSwitcher();
  };

  const isItemActive = (value: string) => value === storiesShowedType;
  return (
    <Menu
      open={open}
      anchorEl={switcherOpen}
      onClose={closeSwitcher}
      disableAutoFocusItem
    >
      {menuItems.map((item) => (
        <MenuItem
          key={item.value}
          onClick={() => changeStoriesType(item.value)}
          sx={{
            ...styles.menuItem,
            ...(isItemActive(item.value) && styles.activeMenuItem),
          }}
        >
          {item.icon(isItemActive(item.value) && styles.activeIcon)}
          <Typography
            sx={{
              ...styles.title,
              ...(isItemActive(item.value) && styles.activeTitle),
            }}
          >
            {item.title}
          </Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};
