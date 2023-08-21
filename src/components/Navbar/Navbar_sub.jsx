import { useLocation, useNavigate } from "react-router-dom";


export default function Navbar_sub() {
	const navigate=useNavigate();
	const location=useLocation();
	const loc=location.pathname;
  return (
	<div>
		<div className="navbar_sub container">
			<div className="navbar_sub_menu">
				<p className="hover_menu_top">Home</p>
				<span>/</span>
				<p className="hover_menu_top">India</p>
				<span>/</span>
				<p>Kolkata Restaurants</p>
			</div>
			<div className="navbar_sub_nav">
					<div onClick={()=>navigate("/")} className={loc=="/"?"navbar_sub_nav_main border_bottom":"navbar_sub_nav_main"}>
						<div className="navbar_sub_nav_main_img">
							<img src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png" alt="" />
						</div>
						<p>Delivery</p>
					</div>
				<div onClick={()=>navigate("/dining")} className={loc=="/dining"?"navbar_sub_nav_main border_bottom":"navbar_sub_nav_main"}>
				<div className="navbar_sub_nav_main_img">
						<img src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png" alt="" />
					</div>
					<p>Dining Out</p>
				</div>
				<div onClick={()=>navigate("/nightlife")} className={loc=="/nightlife"?"navbar_sub_nav_main border_bottom":"navbar_sub_nav_main"}>
				<div className="navbar_sub_nav_main_img">
						<img src="https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png" alt="" />
					</div>
					<p>Night Life</p>
				</div>
			</div>
		</div>
		<span id="navbar_sub_botton_line"></span>
	</div>
  )
}
