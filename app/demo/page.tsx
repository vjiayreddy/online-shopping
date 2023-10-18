"use client";
import React, { useState } from "react";
import TodoListComponent from "@/components/sample/todoList";
import { Button } from "@mui/material";

const DemoPage = () => {
  const [text, setText] = useState<string>("");
  const [todo, setTodo] = useState([
    { id: 1, title: "Read Book" },
    { id: 2, title: "Fix Bug" },
  ]);

  const onClickHandler = () => {
    let newTodo = { id: 3, title: text };
    setTodo([...todo,newTodo]);
  };

  console.count("Demo Page - Rendered");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button size="small" onClick={onClickHandler}>Add</Button>
      <TodoListComponent data={todo} />
    </div>
  );
};

export default DemoPage;
