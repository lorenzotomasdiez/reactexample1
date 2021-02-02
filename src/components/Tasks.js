import Task from './Task';
const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <>
            {tasks.map((e) => (<Task key={e.id} task={e} onDelete={onDelete} onToggle={onToggle}/>))}
        </>
    )
}

export default Tasks
