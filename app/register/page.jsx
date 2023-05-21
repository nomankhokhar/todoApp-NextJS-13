"use client";
import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { toast } from 'react-hot-toast';
import { Context } from '@/components/Clients';
import { useRouter } from 'next/navigation';

const page = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(Context)
  const router = useRouter();

  const registerHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          password
        })
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
        <form onSubmit={registerHandler}>
          <input type="txt" onChange={e => setName(e.target.value)} value={name} placeholder='enter name...' />
          <input type="email" onChange={e => setEmail(e.target.value)} value={email} placeholder='enter email...' />
          <input type="password" onChange={e => setPassword(e.target.value)} value={password} placeholder='enter password...' />

          <button type='submit'>Register</button>
          <p>OR</p>
          <Link href={"/login"}>Login</Link>
        </form>
      </section>
    </div>
  )
}



export default page