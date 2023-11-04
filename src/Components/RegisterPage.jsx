import { useState } from "react";
import { Link } from "react-router-dom";


export default function RegisterPage(){
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    function registerUser(ev){
        ev.preventDefault();
    }

    return(  
        <div className="mt-6 grow flex items-center justify-around">
            <div className="mb-16">
                <h1 className="text-3xl text-center mb-4">Register</h1>
                <form width="100px" height="100px" onSubmit={registerUser}>
                    <input type="name" placeholder="Enter your Name"
                        value={name}
                        onChange={ev=>setName(ev.target.value)} />

                    <input type="email" placeholder="Enter your email" 
                        value={email}
                        onChange={ev=>setEmail(ev.target.value)}/>

                    <input type="password" placeholder="Enter your Password" 
                        value={password}
                        onChange={ev=>setPassword(ev.target.value)}/>

                    <button className="primary">Register</button>
                    <div className="text-center py-2 text-gray-600">Already have an account?
                        <Link to={"/login"} className="underline text-black"> Go to login page</Link>
                    </div>
                </form>
            </div>           
        </div>

    );
}