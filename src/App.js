import classes from "./App.module.scss";
import {
  MyInformation,
  AboutMe,
  MySkills,
  MyProjects,
  MyOtherSkills,
} from "./components";

function App() {
  return (
    <div className={classes.container}>
      <MyInformation></MyInformation>
      <AboutMe></AboutMe>
      <MySkills></MySkills>
      <MyOtherSkills />
      <MyProjects></MyProjects>
    </div>
  );
}

export default App;
