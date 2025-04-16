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
				{/* <Link to="about" className={isActive("/about")}>
          About Me
        </Link> */}
				{/* TODO: color theme switcher */}
			</nav>

			<Outlet />

			<footer>
				<p>Work in progress. Some sections may be incomplete.</p>
				<div className="copyright">
					<p>© 2024-2025 Ryan Smith</p>
					<p>All rights reserved.</p>
				</div>
			</footer>
		</>
	);
}

export default App;
