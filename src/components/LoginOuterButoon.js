


const Login = (props) => {
    return (
<button
 className={`cursor-pointer items-center w-20 h-10 absolute right-36 top-7 border rounded-lg bg-green-500 ${props.display? "" : "hidden"}`}
 onClick={props.Clicked}
 >
 Login
 </button>
    );
};

export default Login;
