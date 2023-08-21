import { motion } from "framer-motion"

export default function NightLife() {
  return (
	<div>
		<div className="dining">
			<div className="dining_main container">
				<div className="delivery_title">
						<h1>Collections</h1>
							<div className="delivery_title_info">
								<p>Explore curated lists of top restaurants, cafes, pubs, and bars in Kolkata, based on trends</p>
								<p>All collections in Kolkata <i className="fa-solid fa-caret-right"></i></p>
							</div>
					</div>
					<div  className="dining_main_content">
							{/* <motion.div animate={{scale:collection>0 ? "1":"0"}} onClick={()=>setCollection(collection-1)} className="dining_main_1_left">
								<i className="fa-solid fa-chevron-left"></i>
							</motion.div> */}
							<motion.div className="dining_main_1">
					<motion.div initial={{scale:0}} animate={{scale:1}} className="dining_main_1_box">
						<div className="dining_main_1_box_img">
							<img src="https://b.zmtcdn.com/data/collections/f141889a9c1564098ee6a9763a941d78_1675232844.jpg" alt="" />
							<div className="dining_main_1_box_img_info">
								<p>23 Best Bars & Pubs</p>
							</div>
						</div>
					</motion.div>
					<motion.div initial={{scale:0}} animate={{scale:1}} className="dining_main_1_box">
						<div className="dining_main_1_box_img">
							<img src="https://b.zmtcdn.com/data/collections/a9362905a0378c532acc0c146dbf472c_1675237481.jpg" alt="" />
							<div className="dining_main_1_box_img_info">
								<p>8 Finest Microbreweries</p>
							</div>
						</div>
					</motion.div>
				</motion.div>
							{/* <motion.div animate={{scale:collection<2 ? "1":"0"}} onClick={()=>setCollection(collection+1)} className="dining_main_1_right">
							<i className="fa-solid fa-chevron-right"></i>
							</motion.div> */}
					</div>
			</div>
		</div>
		<div className="dining_2">
			<div className="dining_2_main container">
				<div className="banner_img">
							<img src="https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png" alt="" />
						</div>
						<div className="delivery_title">
							<h1>Trending dining restaurants in Kolkata</h1>
						</div>
						<div className="delivery_2_main_main">
					<motion.div initial={{ scale: 0.4,opacity:0 }} whileInView={{ scale: 1,opacity:1 }} className="delivery_2_main_main_content">
						<div className="delivery_2_main_main_content_img">
							<img src="https://b.zmtcdn.com/data/pictures/7/19301747/597a94ed9b98090574d7a0438b0afaa7_featured_v2.jpg" alt="" />
						</div>
						<div className="delivery_2_main_main_content_info">
							<p>Barishh</p>
							<button>4.3<i className="fa-solid fa-star"></i></button>
							<p>North Indian</p>
							<p>₹2,500 for one</p>
						</div>
					</motion.div>
					<motion.div initial={{ scale: 0.4,opacity:0 }} whileInView={{ scale: 1,opacity:1 }} className="delivery_2_main_main_content">
						<div className="delivery_2_main_main_content_img">
							<img src="https://b.zmtcdn.com/data/pictures/0/20435900/7814fe8619b6cf1d02316c511e5edbd6_featured_v2.jpg" alt="" />
						</div>
						<div className="delivery_2_main_main_content_info">
							<p>Botanik</p>
							<button>4.4<i className="fa-solid fa-star"></i></button>
							<p>Continental,Mexican</p>
							<p>₹2000 for one</p>
						</div>
					</motion.div>
					<motion.div initial={{ scale: 0.4,opacity:0 }} whileInView={{ scale: 1,opacity:1 }} className="delivery_2_main_main_content">
						<div className="delivery_2_main_main_content_img">
							<img src="https://b.zmtcdn.com/data/pictures/4/19294704/61e0522969e3fe4a4e0b53261b7e4382_featured_v2.jpg" alt="" />
						</div>
						<div className="delivery_2_main_main_content_info">
							<p>Cafe Mezzuna</p>
							<button>4.3<i className="fa-solid fa-star"></i></button>
							<p>North Indian,Chinese,</p>
							<p>₹1800 for one</p>
						</div>
					</motion.div>
					<motion.div initial={{ scale: 0.4,opacity:0 }} whileInView={{ scale: 1,opacity:1 }} className="delivery_2_main_main_content">
						<div className="delivery_2_main_main_content_img">
							<img src="https://b.zmtcdn.com/data/pictures/1/23831/7f96bd8591d3d32d5f09e83b236f01f6_featured_v2.jpg" alt="" />
						</div>
						<div className="delivery_2_main_main_content_info">
							<p>First Innings Multicuisine Restaur</p>
							<button>4.1<i className="fa-solid fa-star"></i></button>
							<p>Chinese,North Indian</p>
							<p>₹1900 for one</p>
						</div>
					</motion.div>
					<motion.div initial={{ scale: 0.4,opacity:0 }} whileInView={{ scale: 1,opacity:1 }} className="delivery_2_main_main_content">
						<div className="delivery_2_main_main_content_img">
							<img src="https://b.zmtcdn.com/data/pictures/0/21360/6fb454cae8a66e5cbf147070bb35101b_featured_v2.jpg" alt="" />
						</div>
						<div className="delivery_2_main_main_content_info">
							<p>Makati</p>
							<button>4.1<i className="fa-solid fa-star"></i></button>
							<p>North Indian,Chinese</p>
							<p>₹3000 for one</p>
						</div>
					</motion.div>
					<motion.div initial={{ scale: 0.4,opacity:0 }} whileInView={{ scale: 1,opacity:1 }} className="delivery_2_main_main_content">
						<div className="delivery_2_main_main_content_img">
							<img src="https://b.zmtcdn.com/data/pictures/4/19930364/1fc3309f39ac1f14f5ce475e8352ca6a_featured_v2.jpg" alt="" />
						</div>
						<div className="delivery_2_main_main_content_info">
							<p>Wafira</p>
							<button>4.3<i className="fa-solid fa-star"></i></button>
							<p>Pizza,finger</p>
							<p>₹1400 for one</p>
						</div>
					</motion.div>
					<motion.div initial={{ scale: 0.4,opacity:0 }} whileInView={{ scale: 1,opacity:1 }} className="delivery_2_main_main_content">
						<div className="delivery_2_main_main_content_img">
							<img src="https://b.zmtcdn.com/data/pictures/3/19570523/ec03bb1c11335ba77f87e85a7a18cc69_featured_v2.jpg" alt="" />
						</div>
						<div className="delivery_2_main_main_content_info">
							<p>Someplace Else - The Park</p>
							<button>4.3<i className="fa-solid fa-star"></i></button>
							<p>Italian,Salad</p>
							<p>₹950 for one</p>
						</div>
					</motion.div>
					<motion.div initial={{ scale: 0.4,opacity:0 }} whileInView={{ scale: 1,opacity:1 }} className="delivery_2_main_main_content">
						<div className="delivery_2_main_main_content_img">
							<img src="https://b.zmtcdn.com/data/pictures/5/20528405/86bc515f8199735a535168b505a79012_featured_v2.jpg" alt="" />
						</div>
						<div className="delivery_2_main_main_content_info">
							<p>Soba Sassy</p>
							<button>4.3<i className="fa-solid fa-star"></i></button>
							<p>Sushi</p>
							<p>₹2000 for one</p>
						</div>
					</motion.div>
					<motion.div initial={{ scale: 0.4,opacity:0 }} whileInView={{ scale: 1,opacity:1 }} className="delivery_2_main_main_content">
						<div className="delivery_2_main_main_content_img">
							<img src="https://b.zmtcdn.com/data/pictures/4/21424/abe358d249a95a52c17dabeaea015259_featured_v2.jpg" alt="" />
						</div>
						<div className="delivery_2_main_main_content_info">
							<p>Heka</p>
							<button>4.3<i className="fa-solid fa-star"></i></button>
							<p>American,Continental</p>
							<p>₹1000 for one</p>
						</div>
					</motion.div>
				</div>
				</div>	
		</div>
	</div>
  )
}
