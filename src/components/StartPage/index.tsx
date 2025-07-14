import { useState, useEffect } from "react";
import { useAppDispatch } from "store/hooks";
import { Box } from "@mui/material";

import { Logo } from "components/Logo";
import { CustomDivider } from "components/CustomDivider";
import { getRandomQuote } from "store/hackerNews/actions";
import { DIVIDER_TYPE } from "constants/dividerTypes";
import { TEST_ID } from "constants/testIds";
import { orangePrimary } from "constants/colors";

import { Footer } from "./components/Footer";
import { QuoteType } from "./types";
import { styles } from "./styles";
import { ActionsBlock } from "./components/ActionsBlock";

function StartPage() {
  const dispatch = useAppDispatch();
  const [quote, setQuote] = useState<QuoteType>({ text: "", author: "" });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setQuote({ text: "", author: "" });
    setIsLoading(true);
    dispatch(getRandomQuote())
      .unwrap()
      .then((res) => {
        setQuote({ text: `"${res.text}"`, author: `(c) ${res.author}` });
      })
      .finally(() => {
        setTimeout(() => setIsLoading(false), 300);
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
        <ActionsBlock setQuote={setQuote} />
      </Box>
      <Footer isLoading={isLoading} quote={quote} />
    </Box>
  );
}

export default StartPage;
