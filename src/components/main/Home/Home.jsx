import React, { useContext } from "react";
import { LoginContext } from "../../../context/LoginContext";
import Headline from "./Headline";

const Home = () => {
    const { loginState } = useContext(LoginContext)
    return (
        <>
            {!loginState.user && <Headline />}
        </>
    )
}


export default Home