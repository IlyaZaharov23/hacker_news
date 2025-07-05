import { FC } from "react";
import { Box } from "@mui/material";
import { DIVIDER_TYPE } from "constants/dividerTypes";
import { styles } from "./styles";

type DividerPropsType = {
  position: string;
};

export const CustomDivider: FC<DividerPropsType> = ({ position }) => {
  return (
    <Box
      sx={
        position === DIVIDER_TYPE.VERTICAL ? styles.vertical : styles.horizontal
      }
    />
  );
};
