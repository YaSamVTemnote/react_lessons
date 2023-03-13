import React, {useEffect, useRef, useState} from 'react';
import {ITodoItem} from "../entities/ITodoItem";
import {AiFillEdit, AiFillDelete, AiFillSave} from "react-icons/ai";
import {MdDone, MdCancel} from "react-icons/md";

interface IProps {
    todo: ITodoItem;
    onDoneTodo: (id: number) => void;
    onDeleteTodo: (id: number) => void;
    onUpdateTodo: (id: number, title: string) => void;
}

const TodoItem: React.FC<IProps> = ({todo, onDoneTodo, onDeleteTodo, onUpdateTodo}) => {
    const {title, id, isDone} = todo

    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editedTodo, setEditedTodo] = useState<string>(title);

    const handleDoneTodo = () => {
        onDoneTodo(id)
    }

    const handleDeleteTodo = () => {
        onDeleteTodo(id)
    }
    const handleStartEditing = () => {
        if(!isDone) {
            setIsEditing(!isEditing)
        }
    }

    const handleEdit = (e: React.FormEvent) => {
        e.preventDefault()
        onUpdateTodo(id, editedTodo)
        setIsEditing(false)
    }

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [isEditing])

    return (
        <form onSubmit={handleEdit}>
                {isEditing
                    ? (<input value={editedTodo} onChange={(e) => setEditedTodo(e.target.value)} ref={inputRef}/>)
                        : (<span style={{display: 'flex', margin: 10, textDecoration: isDone ? 'line-through' : 'none'}}>{title}</span>)
                }
                <div>
                    {isEditing
                        ? (
                            <>
                                <span onClick={handleEdit}><AiFillSave/></span>
                                <span onClick={handleStartEditing}><MdCancel/></span>
                            </>
                        )
                        : (
                            <>
                                <span style={{marginLeft: 5}} onClick={handleStartEditing}><AiFillEdit/></span>
                                <span style={{marginLeft: 5}} onClick={handleDeleteTodo}><AiFillDelete/></span>
                                <span style={{marginLeft: 5}} onClick={handleDoneTodo}><MdDone/></span></>
                        )
                    }
                </div>
        </form>
    );
};

export default TodoItem;
