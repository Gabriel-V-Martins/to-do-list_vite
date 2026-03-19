import React from 'react';
import TodoItem from './todoItem';

export default function TodoList({ todos, removeTask }) {
    return (
        <ul style={styles}>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} removeTask={removeTask} />
            ))}
        </ul>
    );
};

const styles = {
    listStyle: "none",
    padding: 0,
};