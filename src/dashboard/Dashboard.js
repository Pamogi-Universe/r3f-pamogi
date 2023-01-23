import { useState } from "react";

import classes from "./Dashboard.module.css";
import Tasks from "./dashboardMenu/tasks/Tasks";
import ProjectDashboard from "./dashboardMenu/projectDashboard/ProjectDashboard";
import Projects from "./dashboardMenu/projects/Projects";
import Contributions from "./dashboardMenu/contributions/Contributions";
import Investments from "./dashboardMenu/investments/Investments";

const Dashboard = (props) => {
  const [placeholderProjects, setPlaceholderProjects] = useState([
    "Equilibrium Project",
    "Lorem Project",
    "Ipsum Project",
  ]);
  const [SelectedProject, setSelectedProject] = useState(placeholderProjects[0]);

  const [currentMenu, setCurrentMenu] = useState("Project Dashboard");
  const handleProjectSelection = (event) => {
    setSelectedProject(event.target.value);
  }
  const handleMenuButton = (event) => {
    setCurrentMenu(event.target.innerText);
  }
  
  return (
    <div className={classes.dash_container}>
      <div className={classes["dash_sidebar-container"]}>
        <div className={classes["dash_sidebar-container_logo"]}>
          <img src="/pamogi-logo.png" width={100} />
        </div>
        <div className={classes.dash_buttons_section}>
          <div className={classes["dash_buttons-container"]}>
            <button onClick={handleMenuButton} >Project Dashboard</button>
            <button onClick={handleMenuButton}>Projects</button>
            <button onClick={handleMenuButton}>Tasks</button>
            <button onClick={handleMenuButton}>Contributions</button>
            <button onClick={handleMenuButton}>Investments</button>
          </div>
        </div>
      </div>
      <div className={classes["dash_main-canva"]}>
        <div className={classes["dash_project-selection_container"]}>
          <select className={classes["dash_project-selection_select"]} onChange={handleProjectSelection} >
            {placeholderProjects.map((project, index) => {
              return (
                <option key={index} value={project}>
                  {project}
                </option>
              );
            })}
          </select>
          <div>
            <button className={classes["dash_project-selection_create-button"]}>
              {" "}
              Create new project
            </button>
          </div>
        </div>
        <button onClick={() => setDashboardVisible(false)}>Switch to 3D</button>
        {currentMenu === "Project Dashboard" && <ProjectDashboard projectData={SelectedProject} />}
        {currentMenu === "Projects" && <Projects projectData={SelectedProject} />}
        {currentMenu === "Tasks" && <Tasks projectData={SelectedProject} />}
        {currentMenu === "Contributions" && <Contributions projectData={SelectedProject} />}
        {currentMenu === "Investments" && <Investments projectData={SelectedProject} />}     
      </div>
    </div>
  );
};

export default Dashboard;
