"use client";
import { Context } from '@/components/Clients';
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const page = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { user, setUser } = useContext(Context)
    const router = useRouter();

    const loginHandler = async (e) => {
        e.preventDefault();
        console.log("Login");
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(
                    {
                        email: email,
                        password: password
                    }
                )
            })

            const data = await res.json();

            if (!data.success) return toast.error(data.message);

            setUser(data.user);
            toast.success(data.message);

        } catch (error) {
            toast.error(error);
        }

    }


    if (user._id) {

        return router.push("/");
    }

    return (
        <div className='login'>
            <section>
                <form onSubmit={loginHandler}>
                    <input type="email" onChange={e => setEmail(e.target.value)} value={email} placeholder='enter email...' />
                    <input type="password" onChange={e => setPassword(e.target.value)} value={password} placeholder='enter password...' />
                    <button type='submit'>Login</button>
                    <p>OR</p>
                    <Link href={"/register"}>New User</Link>
                </form>
            </section>
        </div>
    )
}


export default page