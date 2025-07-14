import { FC } from "react";
import { Box } from "@mui/material";
import mainLogo from "assets/mainLogo.svg";
import { styles } from "./styles";

type LogoPropsType = {
  size: number;
  testId?: string;
};

export const Logo: FC<LogoPropsType> = ({ size, testId }) => {
  return (
    <Box sx={styles.imgWrapper(size)} data-testid={testId}>
      <img src={mainLogo} alt="app-logo" width={size} height={size} />
    </Box>
  );
};
