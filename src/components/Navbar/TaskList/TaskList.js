import React, { useState } from "react";
import "./TaskList.css";
import propTypes from "prop-types";

import TaskItem from "../../TaskItem/TaskItem";

export default function TaskList({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask,
}) {
  const addTask = () => {
    onAddTask("Nova Tarefa", taskState);
  };
  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content"></div>
      {tasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            taskState={task.state}
            onTaskUpdate={onTaskUpdate}
            onDeleteTask={onDeleteTask}
          />
        );
      })}
      <button onClick={addTask}>Adicionar tarefa</button>
    </div>
  );
}

TaskList.propTypes = {
  title: propTypes.string.isRequired,
  onAddTask: propTypes.func.isRequired,
  tasks: propTypes.array.isRequired,
};
