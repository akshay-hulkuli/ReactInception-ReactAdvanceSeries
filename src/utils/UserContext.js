import { createContext } from "react";

const UserContext  = createContext({
    loggedInUser: "Default value"
})

export default UserContext;