import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Logo } from "components/Logo";
import { SCREEN_ROUTES } from "routes/constants";
import { TEST_ID } from "constants/testIds";
import { styles } from "./styles";

function StartPage() {
  const navigate = useNavigate();
  const goToNews = () => {
    navigate(SCREEN_ROUTES.NEWS_LIST);
  };
  return (
    <Box
      sx={styles.pageWrapper}
      data-testid={TEST_ID.START_PAGE.START_PAGE_ROOT}
    >
      <Logo size={128} testId={TEST_ID.START_PAGE.APP_LOGO} />
      <Typography sx={styles.title} data-testid={TEST_ID.START_PAGE.APP_TITLE}>
        Welcome to Hacker News
      </Typography>
      <Button
        onClick={goToNews}
        sx={styles.showNewsButton}
        data-testid={TEST_ID.START_PAGE.GO_TO_NEWS_BUTTON}
      >
        Go to News
      </Button>
    </Box>
  );
}

export default StartPage;
