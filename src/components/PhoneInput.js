import ReactPhoneInput from "react-phone-input-2";
import { useState } from "react";
import "react-phone-input-2/lib/bootstrap.css";
const Form = (props) => {
    const [phone, setPhone] = useState("");
    return (
        <ReactPhoneInput
            placeholder="Enter phone number"
            disableSearchIcon
            country={"in"}

            inputStyle={{
                width: "100%"
            }}
            value={phone}
            onChange={(event) => setPhone(event.value)}
        />


    );
};
export default Form;
