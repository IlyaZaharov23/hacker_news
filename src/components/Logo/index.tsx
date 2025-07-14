import { FC } from "react";
import { Box } from "@mui/material";
import mainLogo from "assets/mainLogo.svg";
import { LogoPropsType } from "./types";
import { styles } from "./styles";

export const Logo: FC<LogoPropsType> = ({ size, testId, color }) => {
  return (
    <Box sx={styles.imgWrapper(size, color)} data-testid={testId}>
      <img src={mainLogo} alt="app-logo" width={size} height={size} />
    </Box>
  );
};
