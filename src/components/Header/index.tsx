import { FC, useState, MouseEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Logo } from "components/Logo";
import { SCREEN_ROUTES } from "routes/constants";
import { TEST_ID } from "constants/testIds";
import { UrlUtil } from "utiles/UrlUtil/UrlUtil";
import { StoriesTypeSwitcher } from "./components/StoriesTypeSwitcher";
import { styles } from "./styles";

type HeaderPropsType = {
  showBack?: boolean;
  showUpdate?: boolean;
  showMenu?: boolean;
  isLoading?: boolean;
  refreshNews?: () => void;
};

export const Header: FC<HeaderPropsType> = ({
  showBack,
  showUpdate,
  showMenu,
  isLoading,
  refreshNews,
}) => {
  const navigate = useNavigate();
  const params = useParams();

  const [switcherOpen, setSwitcherOpen] = useState<HTMLElement | null>(null);

  const openSwitcher = (e: MouseEvent<HTMLElement>) => {
    setSwitcherOpen(e.currentTarget);
  };

  const closeSwitcher = () => {
    setSwitcherOpen(null);
  };

  const isSwitcherOpen = Boolean(switcherOpen);

  const handleGoBack = () => {
    if (!UrlUtil.getIdFromUrl(params.id)) {
      navigate(SCREEN_ROUTES.START_PAGE);
    } else {
      navigate(SCREEN_ROUTES.NEWS_LIST, { state: { fromBack: true } });
    }
  };

  const navigateToStartPage = () => {
    navigate(SCREEN_ROUTES.START_PAGE);
  };

  return (
    <Box sx={styles.commonWrapper} data-testid={TEST_ID.HEADER.HEADER_ROOT}>
      <Box
        sx={{ ...styles.button, visibility: showBack ? "visible" : "hidden" }}
        onClick={handleGoBack}
        data-testid={TEST_ID.HEADER.BACK_BUTTON}
      >
        <ArrowBackIosNewIcon sx={styles.icon} />
      </Box>
      <Box
        sx={{
          ...styles.logoWrapper,
          ...(isLoading && styles.disabledLogoWrapper),
        }}
        data-testid={TEST_ID.HEADER.APP_LOGO}
        onClick={navigateToStartPage}
      >
        <Logo size={32} />
        <Typography sx={styles.title}>Hacker News</Typography>
      </Box>
      <Box sx={styles.rightButtonWrapper}>
        <Box
          sx={{
            ...(isLoading ? styles.disabledButton : styles.button),
            visibility: showUpdate ? "visible" : "hidden",
          }}
          onClick={refreshNews}
          data-testid={TEST_ID.HEADER.UPDATE_BUTTON}
        >
          <RefreshIcon sx={styles.icon} />
        </Box>
        <Box
          sx={{
            ...(isLoading ? styles.disabledButton : styles.button),
            visibility: showMenu ? "visible" : "hidden",
          }}
          onClick={openSwitcher}
          data-testid={TEST_ID.HEADER.MENU_BUTTON}
        >
          <MenuIcon sx={styles.icon} />
        </Box>
      </Box>
      {isSwitcherOpen && (
        <StoriesTypeSwitcher
          open={isSwitcherOpen}
          switcherOpen={switcherOpen}
          closeSwitcher={closeSwitcher}
        />
      )}
    </Box>
  );
};
