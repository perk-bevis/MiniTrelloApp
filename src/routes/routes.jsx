import Email from "../module/auth/pages/VerificationEmail";
import LoginPage from "../module/auth/pages/LoginPage";
import MainContent from "../module/layout/MainContent";
import Member from "../module/layout/Member";
import Todolist from "../module/layout/Todolist";

const publicRouter = [
  { path: "/", element: <MainContent/> },
  { path: "/boards", element: <MainContent/> },
  { path: "/members", element: <Member/> },
  { path: "/boards/todolist", element: <Todolist/> },
];
const privateRouter = [
  { path: "/loginpage", element: <LoginPage/> },
  { path: "/emailvalidate", element: <Email/> },
];

export { publicRouter ,privateRouter };
