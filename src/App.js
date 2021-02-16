import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState, useEffect } from 'react';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }

    getTasks()
  },[]);

  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data;
  }
  //Add Task
  const addTaskAction = async (e) => {
    const res = await fetch('http://localhost:5000/tasks',
      {
        method: 'POST',
        headers:{
          'Content-type': 'application/json'
        },
        body: JSON.stringify(e)
      })
      const data = await res.json()

      setTasks([...tasks, data])

    // const id = Math.floor(Math.random()*1000)+1;
    // const newTask = {id, ...e};
    // setTasks([...tasks, newTask]);
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((e) => e.id === id ? {...e, reminder:!e.reminder} : e));
  };

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method:'DELETE'
    });

    setTasks(tasks.filter((e) => e.id !== id));
  };
  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask addTask={addTaskAction}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : (
        'No Tasks to show'
      )}
    </div>
  );
}

export default App;
