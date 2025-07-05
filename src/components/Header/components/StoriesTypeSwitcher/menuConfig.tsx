import GradeIcon from "@mui/icons-material/Grade";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import WorkIcon from "@mui/icons-material/Work";
import PushPinIcon from "@mui/icons-material/PushPin";
import GitHubIcon from "@mui/icons-material/GitHub";
import { API_ENDPOINTS } from "config/api";

export const menuItems = [
  {
    value: API_ENDPOINTS.ASK_STORIES,
    title: "Ask",
    icon: (sx: any) => <LiveHelpIcon sx={sx} />,
  },
  {
    value: API_ENDPOINTS.BEST_STORIES,
    title: "Best",
    icon: (sx: any) => <GradeIcon sx={sx} />,
  },
  {
    value: API_ENDPOINTS.JOB_STORIES,
    title: "Job",
    icon: (sx: any) => <WorkIcon sx={sx} />,
  },
  {
    value: API_ENDPOINTS.NEW_STORIES,
    title: "New",
    icon: (sx: any) => <FiberNewIcon sx={sx} />,
  },
  {
    value: API_ENDPOINTS.SHOW_STORIES,
    title: "Show",
    icon: (sx: any) => <GitHubIcon sx={sx} />,
  },
  {
    value: API_ENDPOINTS.TOP_STORIES,
    title: "Top",
    icon: (sx: any) => <PushPinIcon sx={sx} />,
  },
];
