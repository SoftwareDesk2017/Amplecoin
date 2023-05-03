
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	}
	const handleItemClick = (sectionId) => {
		const section = document.getElementById(sectionId);
		window.scrollTo({
		top: section.offsetTop ,
		behavior: "smooth"
		});
	};

	return (
		<header>
			<div className="logo">
			<img  src="../assets/images/logo.png" />
			<h3>AMPLE COIN</h3>
			</div>
			
			<nav ref={navRef}>
				<a href="/#" onClick={() => handleItemClick("hero")}>Home</a>
				<a href="/#" onClick={() => handleItemClick("about")}>About</a>
				<a href="/#" onClick={() => handleItemClick("whitepaper")}>WhitePaper</a>
				<a href="/#" onClick={() => handleItemClick("roadmap")}>RoadMap</a>
                <a href="/#" onClick={() => handleItemClick("whitelist")}>WhiteList</a>
                <a href="/#" onClick={() => handleItemClick("tockennomics")}>Tockennomics</a>
                <a href="/#" onClick={() => handleItemClick("teams")}>Teams</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;