import { Box, Typography } from "@mui/material";
import emptyNewsList from "assets/emptyNewsList.svg";
import { styles } from "./styles";

export const NewsPlaceholder = () => {
  return (
    <Box sx={styles.placeholderWrapper}>
      <img src={emptyNewsList} width={200} alt="empty-list" />
      <Box sx={styles.textWrapper}>
        <Typography sx={styles.text}>
          It's quiet here, like in outer space.
        </Typography>
        <Typography sx={styles.text}>
          No news yet, but they're on the way!
        </Typography>
      </Box>
    </Box>
  );
};
