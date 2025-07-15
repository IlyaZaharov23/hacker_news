import { FC } from "react";
import { Box, Typography } from "@mui/material";
import emptyNewsList from "assets/emptyNewsList.svg";
import errorPlaceholder from "assets/errorPlaceholder.svg";
import { TEST_ID } from "constants/testIds";
import { NewsPlaceholderPropsType } from "./types";
import { styles } from "./styles";

export const NewsPlaceholder: FC<NewsPlaceholderPropsType> = ({ hasError }) => {
  return (
    <Box
      sx={styles.placeholderWrapper}
      data-testid={
        hasError
          ? TEST_ID.NEWS_PAGE.NEWS_ERROR_PLACEHOLDER
          : TEST_ID.NEWS_PAGE.NEWS_PLACEHOLDER
      }
    >
      <img
        src={hasError ? errorPlaceholder : emptyNewsList}
        width={200}
        alt="empty-list"
      />
      <Box sx={styles.textWrapper}>
        <Typography sx={styles.text}>
          {hasError ? "Ooops!" : "It's quiet here, like in outer space."}
        </Typography>
        <Typography sx={styles.text}>
          {hasError
            ? "Failed to load news. Please try again later."
            : "No news yet, but they're on the way!"}
        </Typography>
      </Box>
    </Box>
  );
};
