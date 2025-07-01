import { FC } from "react";
import { Box, CircularProgress } from "@mui/material";
import { styles } from "./styles";

type LoaderTypeProps = {
  fullScreen?: boolean;
  centerInParent?: boolean;
};

export const ProgressLoader: FC<LoaderTypeProps> = ({
  fullScreen = false,
  centerInParent = false,
}) => {
  return (
    <Box
      sx={{
        ...(fullScreen
          ? styles.fullScreen
          : centerInParent
          ? styles.centerInParent
          : styles.default),
      }}
    >
      <CircularProgress
        size={fullScreen ? 40 : centerInParent ? 32 : 20}
        sx={
          fullScreen || centerInParent
            ? styles.customLoader
            : styles.defaultLoader
        }
      />
    </Box>
  );
};
