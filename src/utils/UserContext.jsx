import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "N/A",
});

export default UserContext;
