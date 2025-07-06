import { Typography, Box } from "@mui/material";
import { styles } from "./styles";

export const DeletedNestedComment = () => {
  return (
    <Box sx={styles.blockWrapper}>
      <Typography sx={styles.text}>Deleted Comment</Typography>
    </Box>
  );
};
