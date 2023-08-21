import { useState } from "react"
import { motion } from "framer-motion"

export default function Navbar() {
	const [location,setLocation]=useState(false);
	const [mobile,setMobile]=useState(false);
	const [scroll,setScroll]=useState(false);
	function scrollSticky(){
		if(window.scrollY>10){
			setScroll(true)
		}
		else{
			setScroll(false)
		}
	}
	window.addEventListener("scroll",scrollSticky)
	const scrollUp=()=>{
		window.scrollTo({
			top:0,
			behavior:"smooth"
		})}
  return (
	<div>
		<div className="navbar container">
			<div className="hamburger" onClick={()=>setMobile(!mobile)}>
				<motion.span animate={{rotate:mobile?"45deg":"0deg"}}></motion.span>
				<motion.span animate={{opacity:mobile?"0":"1"}} transition={{duration:2000}}></motion.span>
				<motion.span animate={{rotate:mobile?"-45deg":"0deg"}}></motion.span>
			</div>
			<div className="navbar_logo">
				<img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="" />
			</div>
			<div className="navbar_searchbar">
				<div className="navbar_searchbar_main">
					<div className="navbar_searchbar_main_location">
						<i className="fa-solid fa-location-dot"></i>
						<input type="text" placeholder="Kolkata" />
						<motion.i animate={{rotate: location ? "180deg":"0deg"}} onClick={()=>setLocation(!location)} className="fa-solid fa-caret-down"></motion.i>
						<div className={location?"navbar_searchbar_main_location_setlocation":"display_none"}>
							<div className="navbar_searchbar_main_location_setlocation_main">
								<span><i className="fa-solid fa-location-crosshairs"></i> Detect current location</span>
								<p>Using GPS</p>
							</div>
						</div>
					</div>
					<span></span>
					<div className="navbar_searchbar_main_search">
						<i className="fa-solid fa-magnifying-glass"></i>
						<input type="text" placeholder="Search for restaurant, cuisine or a dish" />
					</div>
				</div>
			</div>
			<motion.div className="log" animate={{display:mobile?"flex":""}}>
				<button>Log in</button>
				<button>Sign Up</button>
			</motion.div>
			<motion.div initial={{scale:scroll?0:1}} animate={{scale:scroll?1:0}} onClick={scrollUp} className="scroll_up">
				<i className="fa-solid fa-chevron-up"></i>
			</motion.div>
		</div>
	</div>
  )
}
