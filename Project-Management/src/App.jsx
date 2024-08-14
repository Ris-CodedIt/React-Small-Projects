import ProjectSideBar  from "./components/ProjectSideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setprojectState] = useState({selectedProjectId:undefined, projects:[], tasks: []})
  
  const handleStartAddProject = ()=>{
    setprojectState(prevState=>{
      return {
        ...prevState,
        selectedProjectId:null
      }
    })
  }

  const handleAddTask = (text)=>{
    setprojectState(prevState=>{
      const taskId = Math.random()
      const newTask = {
      text:text,
      id: taskId,
      projectId: prevState.selectedProjectId,
      }
      return {
        ...prevState,
        tasks: [ newTask , ...prevState.tasks]
      }
  })

  }


  const handleDeleteTask = (taskId)=>{
    setprojectState(prevState=>{
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task)=> task.id !== taskId)
      }
    })
  }
  

  
  const handleSelectProject =(id)=>{
    setprojectState(prevState=>{
      return {
        ...prevState,
        selectedProjectId:id
      }
    })
  }


  const handleCancelAddProject = ()=>{
    setprojectState(prevState=>{
      return {
        ...prevState,
        selectedProjectId:undefined
      }
    })
  }


  const handleDeleteProject = ()=>{
    setprojectState(prevState=>{
      return {
        ...prevState,
        selectedProjectId:undefined,
        projects: prevState.projects.filter((project)=> project.id !== prevState.selectedProjectId)
      }
    })
  }

  const handleAddProject = (projectData)=>{
    setprojectState(prevState=>{
      const projectId = Math.random()
      const newProject = {
      ...projectData,
      id: projectId
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects:[...prevState.projects, newProject]
      }
    })
  }
  

  const selectedProject = projectState.projects.find(project=> project.id === projectState.selectedProjectId)

  let content = (
  <SelectedProject 
    project={selectedProject}  
    onDeleteProject={handleDeleteProject} 
    onAddTask={handleAddTask} 
    onDeleteTask={handleDeleteTask}
    tasks={projectState.tasks}
    />)

  if(projectState.selectedProjectId ===null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  }else if(projectState.selectedProjectId === undefined){
    content = <NoProjectSelected osStartAddProject={handleStartAddProject}/>
  }





  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onStartAddProject={handleStartAddProject} projects={projectState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectState.selectedProjectId}/>
      {content}
    </main>
  );
}

export default App;
