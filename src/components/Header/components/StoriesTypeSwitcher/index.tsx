import { FC } from "react";
import { Menu, MenuItem, Typography } from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import WorkIcon from "@mui/icons-material/Work";
import PushPinIcon from "@mui/icons-material/PushPin";
import GitHubIcon from "@mui/icons-material/GitHub";
import { setShowedStoryType } from "store/hackerNews/actions";
import { getShowedStoryType } from "store/hackerNews/selectors";
import { API_ENDPOINTS } from "config/api";
import { styles } from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks";

type MenuPropsType = {
  open: boolean;
  switcherOpen: HTMLElement | null;
  closeSwitcher: () => void;
};

const menuItems = [
  {
    value: API_ENDPOINTS.ASK_STORIES,
    title: "Ask",
    icon: (sx: any) => <LiveHelpIcon sx={sx} />,
  },
  {
    value: API_ENDPOINTS.BEST_STORIES,
    title: "Best",
    icon: (sx: any) => <GradeIcon sx={sx} />,
  },
  {
    value: API_ENDPOINTS.JOB_STORIES,
    title: "Job",
    icon: (sx: any) => <WorkIcon sx={sx} />,
  },
  {
    value: API_ENDPOINTS.NEW_STORIES,
    title: "New",
    icon: (sx: any) => <FiberNewIcon sx={sx} />,
  },
  {
    value: API_ENDPOINTS.SHOW_STORIES,
    title: "Show",
    icon: (sx: any) => <GitHubIcon sx={sx} />,
  },
  {
    value: API_ENDPOINTS.TOP_STORIES,
    title: "Top",
    icon: (sx: any) => <PushPinIcon sx={sx} />,
  },
];

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
