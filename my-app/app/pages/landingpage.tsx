'use client'
import { useState } from "react";

export default function LandingPage() {
const [isLogin, setIsLogin] = useState(true)

//Toggle viewing signup or login
const toggleView = () => {
    if (isLogin) {
        setIsLogin(false)
    } else {
        setIsLogin(true)
    }
}

const login = () => {

}

const signup = () => {

}

//Login and Signup component
const LoginSignup = () => {
        return (
            <div className="w-full h-full">
                <div className="dark:bg-slate-800 bg-gray-200 rounded-xl flex flex-col p-12 space-y-4">
                    <h3 className="text-xl">{isLogin ? "Login" : "Signup"}</h3>
                    <input className="rounded-md dark:bg-slate-600 p-1" placeholder="email" type="email"></input>
                    <input className="rounded-md dark:bg-slate-600 p-1"  placeholder="password" type="password"></input>
                    <input className={ "rounded-md dark:bg-slate-600 p-1 " + (isLogin ? "hidden" : "") }  placeholder="repeat password" type="password"></input>
                    <button className="w-full bg-blue-200 dark:bg-slate-500 rounded-md p-1 !mt-8 hover:bg-blue-100 dark:hover:bg-slate-400">{isLogin ? "Login" : "Create account"}</button>
                    <button onClick={toggleView} className="w-fit p-1 rounded-md">{isLogin ? "Create account" : "Login"}</button>
                </div>
            </div>
        )
}

  return (
    <div className="">
      <main className="bg-gray-100 dark:bg-gray-700 w-full h-screen flex justify-center">
        <div className=" h-full w-4/5 flex justify-center items-center">
            <div className="h-2/5 flex w-full">
                <div className="w-full h-full">
                    <h1 className="text-7xl">Welcome.</h1>
                    <h2 className="text-xl">Please login or create an account.</h2>
                </div>
                <LoginSignup></LoginSignup>
            </div>
        </div>
      </main>
    </div>
  );
}
