import { FC } from "react";
import { Menu, MenuItem, Typography } from "@mui/material";
import {
  clearActiveStories,
  setShowedStoryType,
  clearAllNestedComments,
  clearAllStoryComments,
} from "store/hackerNews/actions";
import { getShowedStoryType } from "store/hackerNews/selectors/getShowedStoryType";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { TEST_ID } from "constants/testIds";
import { styles } from "./styles";
import { menuItems } from "./constants/menuConfig";

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
    dispatch(clearAllNestedComments());
    dispatch(clearAllStoryComments());
    dispatch(clearActiveStories());
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
      data-testid={TEST_ID.NEWS_TYPE_SWITCHER.SWITCHER_ROOT}
    >
      {menuItems.map((item) => (
        <MenuItem
          key={item.value}
          onClick={() => changeStoriesType(item.value)}
          sx={{
            ...styles.menuItem,
            ...(isItemActive(item.value) && styles.activeMenuItem),
          }}
          data-testid={TEST_ID.NEWS_TYPE_SWITCHER.SWITCHER_ITEM(item.value)}
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
