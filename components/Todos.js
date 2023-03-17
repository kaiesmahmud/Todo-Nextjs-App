import React, {  useState } from 'react'

//Chakra UI
import {  Flex } from '@chakra-ui/react'
//components
import { TodoCreate } from './TodoCreate'
import TodoList from './TodoList'

export const Todos = () => {
    const [note, setNote] = useState("")
    const [Todos, setTodos] = useState([])
    // console.log(Todos)

    const handleToggle = (id)=>{
        // console.log(id)
        const newTodoList = Todos.filter(todo=>{
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        })
        setTodos(newTodoList)
    }
//For Clear All the obj that has a boolean value of completed is true
    const handleClearCompleted= ()=>{
        const newTodoList = Todos.filter(todo=>todo.completed === false)
        setTodos(newTodoList)
    }
  return (
    <>
        <Flex
            fontSize={['xs','sm','md']}
            w={'100%'}
            direction={'column'}
            justify={'center'}
            align={'center'}
            gap={'3'}
          >
            <TodoCreate note={note} setNote={setNote} Todos={Todos} setTodos={setTodos}/>
            <TodoList Todos={Todos} handleToggle={handleToggle} handleClearCompleted={handleClearCompleted}/>
          </Flex>
    </>
  )
}
