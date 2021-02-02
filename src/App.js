import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text:'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id:2,
        text:'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true
    },
    {
        id:3,
        text:'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    }
]);
  //Add Task
  const addTaskAction = () => {
    console.log('flama');
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((e) => e.id === id ? {...e, reminder:!e.reminder} : e));
  };

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((e) => e.id !== id));
  };
  return (
    <div className='container'>
      <Header addTask={addTaskAction}/>
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : (
        'No Tasks to show'
      )}
    </div>
  );
}

export default App;
