import { FC, useState, MouseEvent } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { getStoriesTypeText } from "components/StartPage/constants/getStoriesTypeText";
import { StoriesTypeSwitcher } from "components/StoriesTypeSwitcher";
import { SCREEN_ROUTES } from "routes/constants";
import { TEST_ID } from "constants/testIds";
import { getShowedStoryType } from "store/hackerNews/selectors/getShowedStoryType";
import { styles } from "../../styles";
import { ActionsBlockPropsType } from "components/StartPage/types";

export const ActionsBlock: FC<ActionsBlockPropsType> = ({ setQuote }) => {
  const [switcherOpen, setSwitcherOpen] = useState<HTMLElement | null>(null);
  const navigate = useNavigate();
  const storiesShowedType = useSelector(getShowedStoryType);

  const isSwitcherOpen = Boolean(switcherOpen);

  const goToNews = () => {
    navigate(SCREEN_ROUTES.NEWS_LIST);
    setQuote({ text: "", author: "" });
  };

  const closeSwitcher = () => {
    setSwitcherOpen(null);
  };

  const openSwitcher = (e: MouseEvent<HTMLElement>) => {
    setSwitcherOpen(e.currentTarget);
  };

  return (
    <Box sx={styles.contentWrapper}>
      <Box sx={styles.selectorWrapper}>
        <Typography
          sx={styles.selectorHelper}
          data-testid={TEST_ID.START_PAGE.ACTIONS_TITLE}
        >
          Which news do you want to read?
        </Typography>
        <Box
          sx={styles.switcherButton}
          onClick={openSwitcher}
          data-testid={TEST_ID.START_PAGE.SWITCHER_BUTTON}
        >
          <Typography sx={styles.storiesType}>{storiesShowedType}</Typography>
          {isSwitcherOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </Box>
      </Box>
      <Button
        onClick={goToNews}
        sx={styles.showNewsButton}
        data-testid={TEST_ID.START_PAGE.GO_TO_NEWS_BUTTON}
      >
        Go to {getStoriesTypeText[storiesShowedType]}
      </Button>
      {isSwitcherOpen && (
        <StoriesTypeSwitcher
          open={isSwitcherOpen}
          switcherOpen={switcherOpen}
          closeSwitcher={closeSwitcher}
          fullWidth
        />
      )}
    </Box>
  );
};
