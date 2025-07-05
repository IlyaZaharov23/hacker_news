import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useAppDispatch } from "store/hooks";
import { setActiveStory } from "store/hackerNews/actions";
import mainLogo from "assets/mainLogo.svg";
import { styles } from "./styles";

type HeaderPropsType = {
  showBack: boolean;
  showUpdate?: boolean;
  isLoading?: boolean;
  refreshNews?: () => void;
};

export const Header: FC<HeaderPropsType> = ({
  showBack,
  showUpdate,
  isLoading,
  refreshNews,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleGoBack = () => {
    navigate(-1);
    dispatch(setActiveStory(null));
  };
  return (
    <Box sx={styles.commonWrapper}>
      <Box
        sx={{ ...styles.button, visibility: showBack ? "visible" : "hidden" }}
        onClick={handleGoBack}
      >
        <ArrowBackIosNewIcon sx={styles.icon} />
        <Typography sx={styles.buttonText}>Back</Typography>
      </Box>
      <Box sx={styles.logoWrapper}>
        <img src={mainLogo} alt="logo" width={32} />
        <Typography sx={styles.title}>Hacker News</Typography>
      </Box>
      <Box
        sx={{
          ...(isLoading ? styles.disabledButton : styles.button),
          visibility: showUpdate ? "visible" : "hidden",
        }}
        onClick={refreshNews}
      >
        <RefreshIcon sx={styles.icon} />
        <Typography sx={styles.buttonText}>Update</Typography>
      </Box>
    </Box>
  );
};
