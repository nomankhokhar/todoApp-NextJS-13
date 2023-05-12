"use client"

import Link from "next/link";
import { createContext, useContext, useState } from "react";

const Context = createContext({ user: {} });

export const ContextProvider = ({ children }) => {

    const [user, setUser] = useState({});

    return <Context.Provider value={{
        user,
        setUser
    }}>{children}</Context.Provider>
}


export const LogoutBtn = () => {

    const logoutHandler = () => {
        alert('Logout');
    }

    const { user } = useContext(Context)

    return user?.id ?
        <button className="btn" onClick={logoutHandler}>logout</button>
        :
        <Link href={"/login"}>login</Link>
}

export const TodoButon = ({ id, completed }) => {
    const deleteHandler = (id) => {
        alert(`Delete ${id}`);
    }
    return <>
        <input type="checkbox" checked={completed} />
        <button className="btn" onClick={() => deleteHandler(id)}>Delete</button>
    </>
}