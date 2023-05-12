"use client";
import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div className='login'>
    <section>
        <form>
            <input type="email" placeholder='enter email...' />
            <input type="txt" placeholder='enter name...' />
            <input type="password" placeholder='enter password...' />
            <button type='submit'>Register</button>
            <p>OR</p>
            <Link href={"/login"}>Login</Link>
        </form>
    </section>
</div>
  )
}

export const metadata = {
    title: 'Register',
    description: 'this is Register page of todo App',
  }

export default page