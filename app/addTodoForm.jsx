"use client";

import { Context } from '@/components/Clients';
import { redirect, useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'
import { toast } from 'react-hot-toast';

const addTodoForm = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")


    const { user } = useContext(Context);

    const router = useRouter();

    const submitHandle = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/newtask', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, description })
            })

            const data = await res.json()

            if (!data.success) return toast.error(data.message);

            toast.success(data.message);

            setTitle("")
            setDescription("")
            router.refresh();
        } catch (error) {
            toast.error(error);
        }
    }

    if (!user._id) return redirect("/login");

    return (
        <div className='login'>
            <section>
                <form onSubmit={submitHandle}>
                    <input type="txt" value={title} onChange={e => setTitle(e.target.value)} placeholder='Task Title...' />
                    <input type="txt" value={description} onChange={e => setDescription(e.target.value)} placeholder='Task Description...' />
                    <button type='submit'>Add Task</button>

                </form>
            </section>
        </div>
    )
}

export default addTodoForm