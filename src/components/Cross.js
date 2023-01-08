
import { RxCross1 } from "react-icons/rx";

const Cross = (props) => {
    return (
        <div className="h-16" onClick={props.clicked}>
            <RxCross1 size={25} />
        </div>
    );
};

export default Cross;
