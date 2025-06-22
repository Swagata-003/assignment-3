import React, { useState } from 'react';
import './Kanban.css';

const initialData = {
  todo: ['Add new book to database', 'Approve user registration requests'],
  inProgress: ['Create categories for newly added books'],
  done: ['Check overdue books'],
};

function KanbanBoard() {
  const [tasks, setTasks] = useState(initialData);

  const handleDrop = (e, category) => {
    const task = e.dataTransfer.getData('task');
    const from = e.dataTransfer.getData('from');

    if (from === category) return;

    setTasks(prev => {
      const newSource = prev[from].filter(item => item !== task);
      const newDest = [...prev[category], task];
      return { ...prev, [from]: newSource, [category]: newDest };
    });
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  const dragStart = (e, task, category) => {
    e.dataTransfer.setData('task', task);
    e.dataTransfer.setData('from', category);
  };

  return (
    <div className="kanban-container">
      {Object.keys(tasks).map(category => (
        <div
          key={category}
          className="kanban-column"
          onDrop={(e) => handleDrop(e, category)}
          onDragOver={allowDrop}
        >
          <h3>{category.toUpperCase()}</h3>
          {tasks[category].map((task, idx) => (
            <div
              key={idx}
              className="kanban-task"
              draggable
              onDragStart={(e) => dragStart(e, task, category)}
            >
              {task}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;
