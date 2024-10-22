import { Link, Outlet } from "react-router-dom";
import "./app.css";

function App() {
  return (
    <>
      <nav className="top-nav">
        <Link to="/">Home</Link>
        <Link to="projects">Projects</Link>
        <Link to="experience">Experience</Link>
        <Link to="about">About Me</Link>
      </nav>

      <Outlet />
    </>
  );
}

export default App;
