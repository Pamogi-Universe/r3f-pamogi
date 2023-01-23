import {useState } from "react";

import classes from './Dashboard.module.css';


const Dashboard = (props) => {
  const [placeholderProjects, setPlaceholderProjects] = useState(["Equilibrium Project", "Lorem Project", "Ipsum Project"])

    return(
        <div className={classes.dash_container}>
        <div className={classes["dash_sidebar-container"]}>
          <div className={classes["dash_sidebar-container_logo"]}>
            <img src="/pamogi-logo.png" width={100} />
          </div>
          <div className={classes.dash_buttons_section}>
            <div className={classes["dash_buttons-container"]}>
              <button>Project dashboard</button>
              <button>Projects</button>
              <button>Tasks</button>
              <button>Contributions</button>
              <button>Investments</button>
            </div>
          </div>
        </div>
        <div className={classes["dash_main-canva"]}>
          <div className={classes["dash_project-selection_container"]}>
            <select className={classes["dash_project-selection_select"]}>
              {placeholderProjects.map((project, index) => {
                return(
                  <option key={index} value={project}>{project}</option>
                )
              })}
            </select>
            <div>
              <button className={classes["dash_project-selection_create-button"]}> Create new project</button>
            </div>
          </div>
          <button onClick={() => setDashboardVisible(false)}>Switch to 3D</button>

        </div>
      </div>
    )
}

export default Dashboard;