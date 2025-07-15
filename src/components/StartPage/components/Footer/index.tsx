import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { QuoteSkeleton } from "../QuoteSkeleton";
import { FooterPropsType } from "components/StartPage/types";
import { styles } from "../../styles";
import { TEST_ID } from "constants/testIds";

export const Footer: FC<FooterPropsType> = ({ isLoading, quote }) => {
  return (
    <Box data-testid={TEST_ID.START_PAGE.FOOTER_ROOT}>
      {isLoading ? (
        <QuoteSkeleton />
      ) : (
        <Box
          sx={styles.bottomContent}
          data-testid={TEST_ID.START_PAGE.FOOTER_QUOTE_TEXT}
        >
          <Typography sx={styles.quoteTitle}>{quote.text}</Typography>
          <Typography sx={styles.quoteAuthor}>{quote.author}</Typography>
        </Box>
      )}
    </Box>
  );
};
