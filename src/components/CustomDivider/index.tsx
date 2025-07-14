import { FC } from "react";
import { Box } from "@mui/material";
import { DIVIDER_TYPE } from "constants/dividerTypes";
import { DividerPropsType } from "./types";
import { styles } from "./styles";

export const CustomDivider: FC<DividerPropsType> = ({ position, height }) => {
  return (
    <Box
      sx={
        position === DIVIDER_TYPE.VERTICAL
          ? styles.vertical(height)
          : styles.horizontal
      }
    />
  );
};
