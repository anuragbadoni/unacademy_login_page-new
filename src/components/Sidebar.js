import Login from "./Login"
import Cross from "./Cross";
import EmailInput from "./EmailInput";
import PhoneInput from "./PhoneInput";
import LoginButton from "./LoginButton";
import Footer from "./Footer";
import LoginOuterButton from "./LoginOuterButton"
import { useState } from "react"



const Sidebar = () => {
    const [sidebar, changeSidebar] = useState(true);
    const [emailOrPhone, changeEmailOrPhone] = useState("email");

    const crossClicked = () => {
        sidebar === true ? changeSidebar(false) : changeSidebar(true);
    };

    const changeToEmail = () => {
        emailOrPhone === "email"
            ? changeEmailOrPhone("phone")
            : changeEmailOrPhone("email");
    };


    return (
        <div className="w-screen h-screen ">
        <LoginOuterButton Clicked={crossClicked} display={sidebar}/>
        <div className={`absolute md:w-[600px] right-0 top-0 h-full min-w-fit shadow-2xl  ${sidebar ? "hidden" : "flex"}     `}   >
        
            <div className="h-full pt-3 pl-4 pr-1 sm:pr-6 sm:pr-28 sm:pl-12  ">



                <Cross clicked={crossClicked} />
                <Login />
                {emailOrPhone === "email" ? <PhoneInput /> : <EmailInput />}
                <LoginButton clickedEmail={changeToEmail} data={emailOrPhone} />
                <Footer />
            </div>
        </div>
        </div>
    );
};

export default Sidebar;
