import GradeIcon from "@mui/icons-material/Grade";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import WorkIcon from "@mui/icons-material/Work";
import PushPinIcon from "@mui/icons-material/PushPin";
import GitHubIcon from "@mui/icons-material/GitHub";
import { STORIES_SHOWED_TYPE } from "constants/storiesTypes";

export const menuItems = [
  {
    value: STORIES_SHOWED_TYPE.ASK,
    title: "Ask",
    icon: (sx: any) => <LiveHelpIcon sx={sx} />,
  },
  {
    value: STORIES_SHOWED_TYPE.BEST,
    title: "Best",
    icon: (sx: any) => <GradeIcon sx={sx} />,
  },
  {
    value: STORIES_SHOWED_TYPE.JOB,
    title: "Job",
    icon: (sx: any) => <WorkIcon sx={sx} />,
  },
  {
    value: STORIES_SHOWED_TYPE.NEW,
    title: "New",
    icon: (sx: any) => <FiberNewIcon sx={sx} />,
  },
  {
    value: STORIES_SHOWED_TYPE.SHOW,
    title: "Show",
    icon: (sx: any) => <GitHubIcon sx={sx} />,
  },
  {
    value: STORIES_SHOWED_TYPE.TOP,
    title: "Top",
    icon: (sx: any) => <PushPinIcon sx={sx} />,
  },
];
