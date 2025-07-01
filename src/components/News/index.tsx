import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../store/hooks";
import { newStoriesGet } from "../../store/hackerNews/selectors";
import { styles } from "./styles";

function News() {
  const news = useAppSelector(newStoriesGet);
  return (
    <Box sx={styles.mainWrapper}>
      {news.map((item) => (
        <Box key={item.id} sx={styles.newsItemWrapper}>
          <Typography>{item.title}</Typography>
          <Box sx={styles.newsInfoWrapper}>
            <Typography>{item.by}</Typography>
            <Typography>{item.score}</Typography>
            <Typography>{item.time}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default News;
