'use client'
import { useState } from "react";

export default function LandingPage() {
const [SignupState, setSignupState] = useState("Login")

//Toggle viewing signup or login
const toggleView = () => {
    if (SignupState == "Signup") {
        setSignupState("Login")
    } else if (SignupState == "Login") {
        setSignupState("Signup")
    }
}

//Login and Signup components
const Signup = () => {
    if (SignupState === "Signup") {
        return (
            <div className="w-full h-full">
                <div className="dark:bg-slate-800 bg-slate-300 rounded-md flex flex-col p-12 space-y-4">
                    <h3 className="text-xl">Signup</h3>
                    <input className="rounded-md dark:bg-slate-600 p-1" placeholder="Username" type="text"></input>
                    <input className="rounded-md dark:bg-slate-600 p-1"  placeholder="password" type="password"></input>
                    <button onClick={toggleView} className="w-min">Login</button>
                </div>
            </div>
        )
    } else if (SignupState === "Login") {
        return (
            <div className="w-full h-full">
                <div className="dark:bg-slate-800 bg-slate-300 rounded-md flex flex-col p-12 space-y-4">
                    <h3 className="text-xl">Login</h3>
                    <input className="rounded-md dark:bg-slate-600 p-1" placeholder="Username" type="text"></input>
                    <input className="rounded-md dark:bg-slate-600 p-1"  placeholder="password" type="password"></input>
                    <button onClick={toggleView} className="w-min">Create account</button>
                </div>
            </div>
        )
    }
}

  return (
    <div className="">
      <main className="bg-gray-200 dark:bg-gray-700 w-full h-screen flex justify-center">
        <div className=" h-full w-4/5 flex justify-center items-center">
            <div className="h-2/5 flex w-full">
                <div className="w-full h-full">
                    <h1 className="text-7xl">Welcome.</h1>
                    <h2 className="text-xl">Please login or create an account.</h2>
                </div>
                <Signup></Signup>
            </div>
        </div>
      </main>
      <footer className="">
        
      </footer>
    </div>
  );
}
