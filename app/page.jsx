import React, { Suspense } from 'react'
import Form from "./addTodoForm"
import Todos from './todos';



const page = async () => {


  return (
    <div className="container">

      <Form />
      <Suspense fallback={<div className='loader'>loading...</div>}>
        <Todos />
      </Suspense>
    </div>
  )
}

export default page