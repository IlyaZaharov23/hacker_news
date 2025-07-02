import { FC } from "react";
import { Box, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import mainLogo from '../../assets/mainLogo.svg'
import { styles } from "./styles";

type HeaderPropsType = {
  showBack?: boolean;
  refreshNews?: () => void;
  handleBack?: () => void;
};

export const Header: FC<HeaderPropsType> = ({
  showBack,
  refreshNews,
  handleBack,
}) => {
  return (
    <Box sx={styles.commonWrapper}>
      <Box
        sx={{ ...styles.button, visibility: showBack ? "visible" : "hidden" }}
        onClick={handleBack}
      >
        <ArrowBackIosNewIcon sx={styles.icon} />
        <Typography sx={styles.buttonText}>Back</Typography>
      </Box>
      <Box sx={styles.logoWrapper}>
        <img src={mainLogo} alt="logo" width={32} />
        <Typography sx={styles.title}>Hacker News</Typography>
      </Box>
      <Box
        sx={{ ...styles.button, visibility: !showBack ? "visible" : "hidden" }}
        onClick={refreshNews}
      >
        <RefreshIcon sx={styles.icon} />
        <Typography sx={styles.buttonText}>Update</Typography>
      </Box>
    </Box>
  );
};
