import React, { useContext } from "react";
import { LoginContext } from "../../../context/LoginContext";
import AddStudentForm from "../../professor/AddStudentForm";
import Headline from "./Headline";

const Home = () => {
    const { loginState } = useContext(LoginContext)

    return (
        <>
            {!loginState.user && <Headline />}
            {loginState.isProfessor && <AddStudentForm />}
        </>
    )
}


export default Home