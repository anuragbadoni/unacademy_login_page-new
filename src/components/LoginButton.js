

const LoginButton = (props) => {
    return (
        <div className="flex justify-between items-center mt-8">
            <button className="bg-gray-300 text-gray-500 w-32 h-12 rounded-md cursor-no-drop">Login</button>
            <p className="cursor-pointer border border-dashed border-x-0 border-t-0 text-sm font-bold" onClick={props.clickedEmail}>
                continue with {props.data}
            </p>
        </div>
    );
};
export default LoginButton;
