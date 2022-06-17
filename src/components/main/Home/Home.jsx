import React, { useContext } from "react";
import { LoginContext } from "../../../context/LoginContext";
import AddStudentForm from "../../prof/AddStudentForm";
import Headline from "./Headline";

const Home = () => {
    const { loginState } = useContext(LoginContext)

    return (
        <>
            <Headline />
            {loginState.isProf && <AddStudentForm />}
        </>
    )
}


export default Home