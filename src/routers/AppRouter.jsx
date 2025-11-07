

import Router from "./Router"; 
import { UserProvider } from "../Context/UserContext";
import Navbaar from "./Navbaar";

const AppRouter = () => {
  return (
    <UserProvider>
      <Navbaar/>
      <Router />
    </UserProvider>
  );
};

export default AppRouter;
