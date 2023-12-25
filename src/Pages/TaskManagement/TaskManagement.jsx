import React, { useState, useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import axios from 'axios';

const ItemType = 'TASK';

const Task = ({ id, name, description, priority, status, moveTask }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { id, name, description, priority, status },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`p-4  lg:w-72 border m-4 bg-cyan-500 ${isDragging ? 'opacity-50' : ''}`}
    >
      <h4 className="text-2xl font-semibold mb-2">{name}</h4>
      <p className="text-gray-700 text-xl">{description}</p>
    </div>
  );
};

const List = ({ title, tasks, status, moveTask }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemType,
    drop: (item) => moveTask(item.id, status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  const isActive = canDrop && isOver;

  return (
    <div
      ref={drop}
      className={`p-4 lg:w-96 md:w-84 w-64  border mb-4 ${
        isActive ? 'border-dashed' : ''
      } lg:w-300 md:w-200 sm:w-100`}
    >
      <h3 className="text-2xl text-white bg-teal-500 p-2 text-center m-4  font-bold mb-4">{title}</h3>
      {tasks.map((task) => (
        <Task key={task.id} {...task} moveTask={moveTask} />
      ))}
    </div>
  );
};

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/task');
        if (response.status === 200) {
          setTasks(response.data);
        } else {
          console.error('Failed to fetch tasks:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const moveTask = (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-col md:flex-row mx-10 ">
      <List title="To-Do" tasks={tasks} status="to-do" moveTask={moveTask} />
      <List
        title="Ongoing"
        tasks={tasks.filter((task) => task.status === 'ongoing')}
        status="ongoing"
        moveTask={moveTask}
      />
      <List
        title="Completed"
        tasks={tasks.filter((task) => task.status === 'completed')}
        status="completed"
        moveTask={moveTask}
      />
    </div>
  );
};

export default TaskManagement;
