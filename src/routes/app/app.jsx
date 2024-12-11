import { Link, Outlet, useLocation } from "react-router-dom";
import "./app.css";

function App() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "selected" : "";
  };

  return (
    <>
      <nav className="top-nav">
        <Link to="/" className={isActive("/")}>
          Home
        </Link>
        <Link to="projects" className={isActive("/projects")}>
          Projects
        </Link>
        <Link to="experience" className={isActive("/experience")}>
          Experience
        </Link>
        <Link to="about" className={isActive("/about")}>
          About Me
        </Link>
        {/* TODO: color theme switcher */}
      </nav>

      <Outlet />
    </>
  );
}

export default App;
