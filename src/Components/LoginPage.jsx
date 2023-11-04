import { Link } from "react-router-dom";

export default function LoginPage(){
    return(
        <div className="mt-6 grow flex items-center justify-around">
            <div className="mb-16">
                <h1 className="text-3xl text-center mb-4">Login</h1>
                <form width="100px" height="100px">
                    <input type="email" placeholder="Enter your email" />
                    <input type="password" placeholder="Enter your Password" />
                    <button className="primary bg-slate-400 py-1 px-2 my-3 rounded-md">Login</button>
					<button className="primary bg-slate-400 py-1 px-2 rounded-md">Login with Google</button>
                    <div className="text-center py-2 text-gray-600">Don't have an Account yet?
                        <Link to={"/register"} className="underline text-black"> Join us now!</Link>
                    </div>
                </form>
            </div>           
        </div>
    );
}