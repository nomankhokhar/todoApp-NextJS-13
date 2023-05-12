"use client";

import React from 'react'

const addTodoForm = () => {
    return (
        <div className='login'>
            <section>
                <form>
                    <input type="email" placeholder='Task Title...' />
                    <input type="password" placeholder='Task Description...' />
                    <button type='submit'>Add Task</button>
                   
                </form>
            </section>
        </div>
    )
}

export default addTodoForm