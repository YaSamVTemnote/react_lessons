import React, {useState} from 'react';
import './App.css';
import InputField from "./components/InputField";
import {ITodoItem} from "./entities/ITodoItem";
import TodoList from "./components/TodoList";
import {IFetchedTodo} from "./entities/IFetchedTodo";

const App: React.FC = () => {

    type User = {
        age: number;
        name: string
    }

    const user: User = {
        age: 42,
        name: 'Bob'
    }

    type OmittedUser = Omit<User, 'age'>

    const secondUser: OmittedUser = {
        name: 'test',
    }

    // const serviceUser: Partial<User> = user




    // type ParsedJson = {
    //     name: string;
    //     data: boolean
    // }
    //
    // const testJson = '{"name": "test", "data": "42"}'
    //
    // const objFromJson: ParsedJson = JSON.parse(testJson)

    // let todosList: IFetchedTodo[] = []
    //
    // fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(resp => resp.json())
    //     .then(json => {
    //         if('id' in json) {
    //             todosList.push(json)
    //         } else if(Array.isArray(json)) {
    //             todosList = json
    //         } else {
    //             throw new Error('Unexpected error occurred')
    //         }
    //         console.log(todosList)
    //     })

    // type User = {
    //     name: string;
    //     age: number
    // }
    //
    // type Service = {
    //     id: number;
    //     createdAt: string;
    // }
    //
    // type UserDb = User & Service

    // interface User {
    //     name: string;
    //     age: number
    // }
    //
    // interface UserDb extends User {
    //         id: number;
    //         createdAt: string;
    // }

    // interface Service {
    //     id: number;
    //     createdAt: string;
    // }




    const [todo, setTodo] = useState<string>('');
    const [todos, setTodos] = useState<ITodoItem[]>([]);

    const onAddTodo = (e: React.FormEvent) => {
        e.preventDefault()

        if(todo) {
            setTodos([...todos, {id: Date.now(), title: todo, isDone: false}])
            setTodo('')
        }

    }

    return (
    <div className="App">
      <InputField todo={todo} setTodo={setTodo} onAddTodo={onAddTodo}/>
        <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
