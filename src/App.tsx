import React, {useState} from 'react';


//css
import styles from "./app.module.css"

//components
import Footer from './components/Footer';
import Header from "./components/Header"
import Modal from './components/Modal';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

//interface
import {ITask} from './interfaces/Task'


function App() {
  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

  const taskDelete = (id:number) =>{
    setTaskList(taskList.filter(task => {
      return task.id !== id
    }))
  }

  const hideOrShowModal = (display:boolean) => {
    const modal = document.querySelector("#modal")
    if(display){
      modal!.classList.remove("hide")
    }else{
      modal!.classList.add("hide")
    }
  }

  const handleEdit = (task:ITask) =>{
    hideOrShowModal(true)
    setTaskToUpdate(task)
  }

  const updateTask = ( id:number, title:string, difficulty:number) => {
    
    const updateTask: ITask = {id, title, difficulty}

    const updateItens = taskList.map(task =>{
      return task.id === updateTask.id ? updateTask : task
 
    })
    setTaskList(updateItens)

    hideOrShowModal(false)
  }

  return (
    <div className="App">
      <Modal children = {<TaskForm btntext="Editar Tarefa" taskList = {taskList} task={taskToUpdate} handleUpdate={updateTask}/>}/>
      <Header/>
      <main className={styles.main}>
        <div>
        <h1>O que você vai fazer ?</h1>
        <TaskForm 
        btntext="Criar Tarefa" 
        taskList = {taskList} 
        setTaskList ={setTaskList} 
        />
        </div>
        <div>
        <h1>Suas tarefas:</h1>
        <TaskList 
        taskList = {taskList}
        handledelete = {taskDelete}
        handleEdit = {handleEdit}
        />
        </div>
      </main>
      <Footer/>     
    </div>
  );
}

export default App;
