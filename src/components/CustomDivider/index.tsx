import { FC } from "react";
import { Box } from "@mui/material";
import { DIVIDER_TYPE } from "constants/dividerTypes";
import { styles } from "./styles";

type DividerPropsType = {
  position: string;
  height?: number;
};

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
