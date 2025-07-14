import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { QuoteSkeleton } from "../QuoteSkeleton";
import { FooterPropsType } from "components/StartPage/types";
import { styles } from "../../styles";

export const Footer: FC<FooterPropsType> = ({ isLoading, quote }) => {
  return (
    <>
      {isLoading ? (
        <QuoteSkeleton />
      ) : (
        <Box sx={styles.bottomContent}>
          <Typography sx={styles.quoteTitle}>{quote.text}</Typography>
          <Typography sx={styles.quoteAuthor}>{quote.author}</Typography>
        </Box>
      )}
    </>
  );
};
