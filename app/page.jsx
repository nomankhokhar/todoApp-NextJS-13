import React from 'react'
import Form from "./addTodoForm"
import { TodoItem } from '../components/ServerComponents'

const page = () => {
  return (
    <div className="container">

      <Form />

      <section className="todosContainer">
        <TodoItem title={"sample Noman Ali"} id={"sampleid"}
          completed={true}
          description={"I will done this project soon"} />
      </section>
    </div>
  )
}

export default page