import ProjectSideBar  from "./components/ProjectSideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
  const [projectState, setprojectState] = useState({selectedProjectId:undefined, projects:[]})
  
  const handleStartAddProject = ()=>{
    setprojectState(prevState=>{
      return {
        ...prevState,
        selectedProjectId:null
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


  let content;

  if(projectState.selectedProjectId ===null){
    content = <NewProject onAdd={handleAddProject}/>
  }else if(projectState.selectedProjectId === undefined){
    content = <NoProjectSelected osStartAddProject={handleStartAddProject}/>
  }





  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onStartAddProject={handleStartAddProject} projects={projectState.projects}/>
      {content}
    </main>
  );
}

export default App;
