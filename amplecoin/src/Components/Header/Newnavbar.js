import React from "react";
import './Newnavbar.css';

const Newnavbar =() =>{
    const handleItemClick = (sectionId) => {
		const section = document.getElementById(sectionId);
		window.scroll({
		top: section.offsetTop - 90 ,
		behavior: "smooth"
		});
    }
    return(
       
  
    <nav>
        <div class="logo">
            <img src="logo.svg" alt="Logo Image" />
        </div>
        
        <ul class="nav-links">
        <a href="/#" onClick={() => handleItemClick("hero")}>Home</a>
				<li><a href="/#" onClick={() => handleItemClick("about")}>About</a></li>
				<li><a href="/#" onClick={() => handleItemClick("whitepaper")}>WhitePaper</a></li>
				<li><a href="/#" onClick={() => handleItemClick("roadmap")}>RoadMap</a></li>
                <li><a href="/#" onClick={() => handleItemClick("whitelist")}>WhiteList</a></li>
                <li><a href="/#" onClick={() => handleItemClick("tockennomics")}>Tockennomics</a></li>
                <li><a href="/#" onClick={() => handleItemClick("teams")}>Teams</a></li>
            
        </ul>
    </nav>
    


    )
}

export default Newnavbar;