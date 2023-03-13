import React from 'react';

interface IProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    onAddTodo: (e: React.FormEvent) => void;
}

const InputField: React.FC<IProps> = ({todo, setTodo, onAddTodo}) => {
    return (
        <form onSubmit={onAddTodo}>
            <input placeholder='Enter todo' value={todo} onChange={(e) => setTodo(e.target.value)}/>
            <button type='submit'>Add</button>
        </form>
    );
};

export default InputField;
