import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import mainLogo from '../../assets/mainLogo.svg'

import { SCREEN_ROUTES } from "../../routes/constants";
import { styles } from "./styles";

function StartPage() {
  const navigate = useNavigate();
  const goToNews = () => {
    navigate(SCREEN_ROUTES.NEWS_LIST);
  };
  return (
    <Box sx={styles.pageWrapper}>
      <Box sx={styles.imgWrapper}>
        <img src={mainLogo} alt="logo" width={128} height={128} />
      </Box>
      <Typography sx={styles.title}>Welcome to Hacker News</Typography>
      <Button onClick={goToNews} sx={styles.showNewsButton}>
        Go to News
      </Button>
    </Box>
  );
}

export default StartPage;
