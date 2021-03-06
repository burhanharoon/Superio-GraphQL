import Image from 'next/image'
import Link from 'next/link'
import logo from "../images/login.jpg"
import { useQuery } from "@apollo/client"
import { AUTH_LOGIN } from '../services/graphQL/queries/user'
import { useState } from 'react'
import { useRouter } from 'next/dist/client/router'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState(null);
    const router = useRouter()
    const { refetch: queryLogin } = useQuery(AUTH_LOGIN, {
        fetchPolicy: "network-only",
        skip: true
    });

    const loginHandler = async (e) => {
        e.preventDefault();
        console.log("Hello");
        const res = await queryLogin({ email, password })
        let data = res.data.userLogin;
        console.log(data);
        localStorage.setItem('token', data.token);
        setToken(data.token);
        router.push('/');
    }

    return (
        <div className="w-full flex sm:p-4" >
            <Link href='/'>
                <a>
                    <h1 className='absolute z-10 mb-4 flex md:hidden gap-2 items-center p-8 text-white sm:text-black text-2xl'>
                        <img src="./logo.jpg" alt="logo" className='w-10 rounded-xl ' />
                        <p>Superio</p>
                    </h1>
                </a>
            </Link>
            <figure className="flex z-0 md:hidden">
                <Image src={logo} alt="Picture of the author" />
            </figure>

            <div className='w-2/3 flex flex-col md:gap-4 h-screen py-4 md:w-full'>

                <Link href='/'>
                    <a>
                        <h1 className='hidden md:flex gap-2 items-center justify-center text-white md:text-black text-2xl'>
                            <img src="./logo.jpg" alt="logo" className='w-10 rounded-xl ' />
                            <p>Superio</p>
                        </h1>
                    </a>
                </Link>

                <div className='flex justify-end md:justify-between mr-8 sm:m-0 mt-4'>
                    <Link href='/register'><button className="btn btn-outline btn-primary">Login / Register</button></Link>
                    <button className=" ml-4 btn btn-primary">Job Post</button>
                </div>

                <div className='flex justify-center items-center h-screen'>
                    <div className='flex flex-col align-center justify-center gap-4 '>

                        <h1 className='font-bold text-2xl'>Login to Jobio</h1>

                        <form className="flex gap-4 flex-col align-center justify-center">
                            <label htmlFor="username">Username</label>
                            <input type="text" placeholder="username" className="input input-info input-bordered" onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="Password">Password</label>
                            <input type="password" id="Password" name="Password" placeholder="password" className="input input-info input-bordered" onChange={(e) => setPassword(e.target.value)} />
                            <div className="flex justify-between items-center sm:w-full sm:text-xs">
                                <label className="cursor-pointer label flex gap-2 ">
                                    <input type="checkbox" className="checkbox sm:checkbox-xs" />
                                    <span>Remember me</span>
                                </label>
                                <p className='font-bold sm:text-right '>Forgot your password?</p>
                            </div>
                            <button onClick={e => { loginHandler(e) }} className="btn btn-block btn-info">LogIn</button>
                            <Link href='/register'>
                                <a className="flex justify-center">Don't have an account? Sign up</a>
                            </Link>
                        </form>

                        <div className='flex justify-between sm:flex-col sm:gap-4'>

                            <button className="btn sm:w-full w-1/2 text-xs btn-outline btn-primary gap-2 mr-2">
                                <svg className="h-5 text-blue-500" viewBox="0 0 24 24" fill="blue" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                <span> Log in via Facebook</span>
                            </button>

                            <button className="btn w-1/2 sm:w-full text-xs btn-outline gap-2 btn-secondary">
                                <svg className="h-5 text-red-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M17.788 5.108A9 9 0 1021 12h-8" /></svg>
                                <span> Login via Google+</span>
                            </button>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Login