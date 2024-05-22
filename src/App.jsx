import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsList from "./components/ProjectsSidebar";
import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  // function handleStartAddProject() {
  //   setProjectsState((prevState)=> {...projectsState, selectedProjectId: 1}
  // }}

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddproject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  console.log(projectsState);

  let content;
  console.log(projectsState.selectedProjectId);
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddproject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    {
      content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
    }
  }
  console.log(projectsState.selectedProjectId);
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsList
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
      />
      {/* <NewProject /> */}
      {/* <NoProjectSelected onStartAddProject={handleStartAddProject} /> */}
      {content}
    </main>
  );
}

export default App;
