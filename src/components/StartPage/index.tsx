import { useState, MouseEvent, useEffect } from "react";
import { useAppDispatch } from "store/hooks";
import { Box, Button, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Logo } from "components/Logo";
import { StoriesTypeSwitcher } from "components/StoriesTypeSwitcher";
import { CustomDivider } from "components/CustomDivider";
import { DIVIDER_TYPE } from "constants/dividerTypes";
import { SCREEN_ROUTES } from "routes/constants";
import { getShowedStoryType } from "store/hackerNews/selectors/getShowedStoryType";
import { getRandomQuote } from "store/hackerNews/actions";
import { TEST_ID } from "constants/testIds";
import { orangePrimary } from "constants/colors";
import { storiesTypeConfig } from "./constants/storiesTypeConfig";
import { styles } from "./styles";

type QuoteType = {
  text: string;
  author: string;
};

function StartPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [switcherOpen, setSwitcherOpen] = useState<HTMLElement | null>(null);
  const [quote, setQuote] = useState<QuoteType>({ text: "", author: "" });
  const storiesShowedType = useSelector(getShowedStoryType);

  const isSwitcherOpen = Boolean(switcherOpen);

  const goToNews = () => {
    navigate(SCREEN_ROUTES.NEWS_LIST);
  };

  const closeSwitcher = () => {
    setSwitcherOpen(null);
  };

  const openSwitcher = (e: MouseEvent<HTMLElement>) => {
    setSwitcherOpen(e.currentTarget);
  };

  useEffect(() => {
    dispatch(getRandomQuote())
      .unwrap()
      .then((res) => {
        setQuote(res);
      });
  }, []);

  return (
    <Box
      sx={styles.pageWrapper}
      data-testid={TEST_ID.START_PAGE.START_PAGE_ROOT}
    >
      <Box sx={styles.topContent}>
        <Box sx={styles.logoWrapper}>
          <Logo
            size={196}
            testId={TEST_ID.START_PAGE.APP_LOGO}
            color={orangePrimary}
          />
        </Box>
        <CustomDivider position={DIVIDER_TYPE.VERTICAL} height={320} />
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.selectorWrapper}>
            <Typography sx={styles.selectorHelper}>
              Which news do you want to read?
            </Typography>
            <Box sx={styles.switcherButton} onClick={openSwitcher}>
              <Typography sx={styles.storiesType}>
                {storiesShowedType}
              </Typography>
              {isSwitcherOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </Box>
          </Box>
          <Button
            onClick={goToNews}
            sx={styles.showNewsButton}
            data-testid={TEST_ID.START_PAGE.GO_TO_NEWS_BUTTON}
          >
            Go to {storiesTypeConfig[storiesShowedType]}
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
      </Box>
      <Box sx={styles.bottomContent}>
        <Typography sx={styles.quoteTitle}>"{quote.text}"</Typography>
        <Typography sx={styles.quoteAuthor}>{`(c) ${quote.author}`}</Typography>
      </Box>
    </Box>
  );
}

export default StartPage;
