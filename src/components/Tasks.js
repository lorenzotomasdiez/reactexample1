import Task from './Task';
const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <>
            {tasks.map((e, index) => (<Task key={index} task={e} onDelete={onDelete} onToggle={onToggle}/>))}
        </>
    )
}

export default Tasks
