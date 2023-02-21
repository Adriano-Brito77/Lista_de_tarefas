import React from 'react'

import { ITask } from "../interfaces/Task" 
import styles from "./TaskList.module.css"

type Props = {
  taskList: ITask[]
  handledelete (id:number):void
  handleEdit(task:ITask): void
}

const TaskList = ({taskList, handledelete, handleEdit}: Props) => {
  return (
    <>
    {taskList.length > 0 ? 
    taskList.map((task) => (
      <div key={task.id} className = {styles.task}>
        <div className={styles.details}>
        <h4>{task.title}</h4>
        <p>Dificuldade:{task.difficulty}</p>
        </div>
        <div className={styles.action}>
          <i className='bi bi-pencil' onClick={() => handleEdit(task)}></i>
          <i className='bi bi-trash'onClick={() =>{handledelete(task.id)}}></i>
        </div>
      </div>
      ))
    :
    <p>Não tem terefas cadastradas</p>
    }
    </>
  )
}

export default TaskList