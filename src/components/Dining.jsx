import { motion } from "framer-motion"
import { useState } from "react"


export default function Dining() {
	const [collection,setCollection]=useState(0);
  return (
	<div>
		<div className="dining">
			<div className="dining_main container">
				<div className="delivery_title">
						<h1>Inspiration for your first order</h1>
							<div className="delivery_title_info">
								<p>Explore curated lists of top restaurants, cafes, pubs, and bars in Kolkata, based on trends</p>
								<p>All collections in Kolkata <i className="fa-solid fa-caret-right"></i></p>
							</div>
					</div>
					<div  className="dining_main_content">
							<motion.div animate={{scale:collection>0 ? "1":"0"}} onClick={()=>setCollection(collection-1)} className="dining_main_1_left">
								<i className="fa-solid fa-chevron-left"></i>
							</motion.div>
							<motion.div animate={{marginLeft:-240*collection}} className="dining_main_1">
					<motion.div initial={{scale:0}} animate={{scale:1}} className="dining_main_1_box">
						<div className="dining_main_1_box_img">
							<img src="https://b.zmtcdn.com/data/collections/fbe01413b99e6a071af5211d569e7ab6_1691566538.jpeg" alt="" />
							<div className="dining_main_1_box_img_info">
								<p>11 Best Insta-worthy Pla..</p>
							</div>
						</div>
					</motion.div>
					<motion.div initial={{scale:0}} animate={{scale:1}} className="dining_main_1_box">
						<div className="dining_main_1_box_img">
							<img src="https://b.zmtcdn.com/data/collections/43d0572e2bcdcefbc2cc9f6a86be05a8_1683054191.jpg" alt="" />
							<div className="dining_main_1_box_img_info">
								<p>11 Best Insta-worthy Pla..</p>
							</div>
						</div>
					</motion.div>
					<motion.div initial={{scale:0}} animate={{scale:1}} className="dining_main_1_box">
						<div className="dining_main_1_box_img">
							<img src="https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1675231247.jpg" alt="" />
							<div className="dining_main_1_box_img_info">
								<p>11 Best Insta-worthy Pla..</p>
							</div>
						</div>
					</motion.div>
					<motion.div initial={{scale:0}} animate={{scale:1}} className="dining_main_1_box">
						<div className="dining_main_1_box_img">
							<img src="https://b.zmtcdn.com/data/collections/77c1b9704985885cbe2cb094e9983eab_1682080540.jpg" alt="" />
							<div className="dining_main_1_box_img_info">
								<p>11 Best Insta-worthy Pla..</p>
							</div>
						</div>
					</motion.div>
					<motion.div initial={{scale:0}} animate={{scale:1}} className="dining_main_1_box">
						<div className="dining_main_1_box_img">
							<img src="https://b.zmtcdn.com/data/collections/038023025a7859881a3fa3b3b1c93416_1675231457.jpg" alt="" />
							<div className="dining_main_1_box_img_info">
								<p>11 Best Insta-worthy Pla..</p>
							</div>
						</div>
					</motion.div>
					<motion.div initial={{scale:0}} animate={{scale:1}} className="dining_main_1_box">
						<div className="dining_main_1_box_img">
							<img src="https://b.zmtcdn.com/data/collections/706d897c97831fde7a470ab77e79808c_1692120097.jpg" alt="" />
							<div className="dining_main_1_box_img_info">
								<p>11 Best Insta-worthy Pla..</p>
							</div>
						</div>
					</motion.div>
				</motion.div>
							<motion.div animate={{scale:collection<2 ? "1":"0"}} onClick={()=>setCollection(collection+1)} className="dining_main_1_right">
							<i className="fa-solid fa-chevron-right"></i>
							</motion.div>
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
							<img src="https://b.zmtcdn.com/data/pictures/1/20053591/11d054a2f3b6f78f7da488aefcef2faf_featured_v2.jpg" alt="" />
						</div>
						<div className="delivery_2_main_main_content_info">
							<p>Effingut</p>
							<button>4.3<i className="fa-solid fa-star"></i></button>
							<p>North Indian</p>
							<p>₹2,500 for one</p>
						</div>
					</motion.div>
					<motion.div initial={{ scale: 0.4,opacity:0 }} whileInView={{ scale: 1,opacity:1 }} className="delivery_2_main_main_content">
						<div className="delivery_2_main_main_content_img">
							<img src="https://b.zmtcdn.com/data/pictures/4/19294704/61e0522969e3fe4a4e0b53261b7e4382_featured_v2.jpg" alt="" />
						</div>
						<div className="delivery_2_main_main_content_info">
							<p>Hammer</p>
							<button>4.4<i className="fa-solid fa-star"></i></button>
							<p>Continental,Mexican</p>
							<p>₹2000 for one</p>
						</div>
					</motion.div>
					<motion.div initial={{ scale: 0.4,opacity:0 }} whileInView={{ scale: 1,opacity:1 }} className="delivery_2_main_main_content">
						<div className="delivery_2_main_main_content_img">
							<img src="https://b.zmtcdn.com/data/pictures/2/19897972/bbec3bb27f975ad1830a03fc49c8e39f_featured_v2.jpg" alt="" />
						</div>
						<div className="delivery_2_main_main_content_info">
							<p>Club Aeries</p>
							<button>4.3<i className="fa-solid fa-star"></i></button>
							<p>North Indian,Chinese,</p>
							<p>₹1800 for one</p>
						</div>
					</motion.div>
					<motion.div initial={{ scale: 0.4,opacity:0 }} whileInView={{ scale: 1,opacity:1 }} className="delivery_2_main_main_content">
						<div className="delivery_2_main_main_content_img">
							<img src="https://b.zmtcdn.com/data/pictures/9/18634729/c44e9ecdac163587c755ba16088dfe09_featured_v2.jpg" alt="" />
						</div>
						<div className="delivery_2_main_main_content_info">
							<p>Carpe Diem</p>
							<button>4.1<i className="fa-solid fa-star"></i></button>
							<p>Chinese,North Indian</p>
							<p>₹1900 for one</p>
						</div>
					</motion.div>
					<motion.div initial={{ scale: 0.4,opacity:0 }} whileInView={{ scale: 1,opacity:1 }} className="delivery_2_main_main_content">
						<div className="delivery_2_main_main_content_img">
							<img src="https://b.zmtcdn.com/data/pictures/4/18420364/1306f64f1f043bfd97ea14ca10c738e6_featured_v2.jpg" alt="" />
						</div>
						<div className="delivery_2_main_main_content_info">
							<p>Ozora</p>
							<button>4.1<i className="fa-solid fa-star"></i></button>
							<p>North Indian,Chinese</p>
							<p>₹3000 for one</p>
						</div>
					</motion.div>
					<motion.div initial={{ scale: 0.4,opacity:0 }} whileInView={{ scale: 1,opacity:1 }} className="delivery_2_main_main_content">
						<div className="delivery_2_main_main_content_img">
							<img src="https://b.zmtcdn.com/data/pictures/3/18812843/d7da6aa95ba117ac94a4490ecc7e947a_featured_v2.jpg" alt="" />
						</div>
						<div className="delivery_2_main_main_content_info">
							<p>UNO Pizzeria & Grill</p>
							<button>4.3<i className="fa-solid fa-star"></i></button>
							<p>Pizza,finger</p>
							<p>₹1400 for one</p>
						</div>
					</motion.div>
					<motion.div initial={{ scale: 0.4,opacity:0 }} whileInView={{ scale: 1,opacity:1 }} className="delivery_2_main_main_content">
						<div className="delivery_2_main_main_content_img">
							<img src="https://b.zmtcdn.com/data/pictures/6/23636/4b37c93ac0e800fe8ea9f9f00718e400_featured_v2.jpg" alt="" />
						</div>
						<div className="delivery_2_main_main_content_info">
							<p>The Coner Courtyard</p>
							<button>4.3<i className="fa-solid fa-star"></i></button>
							<p>Italian,Salad</p>
							<p>₹950 for one</p>
						</div>
					</motion.div>
					<motion.div initial={{ scale: 0.4,opacity:0 }} whileInView={{ scale: 1,opacity:1 }} className="delivery_2_main_main_content">
						<div className="delivery_2_main_main_content_img">
							<img src="https://b.zmtcdn.com/data/pictures/5/19603635/2252d87e5ef4527d2edaff0ab795d3cf_featured_v2.jpg" alt="" />
						</div>
						<div className="delivery_2_main_main_content_info">
							<p>Octa</p>
							<button>4.3<i className="fa-solid fa-star"></i></button>
							<p>Sushi</p>
							<p>₹2000 for one</p>
						</div>
					</motion.div>
					<motion.div initial={{ scale: 0.4,opacity:0 }} whileInView={{ scale: 1,opacity:1 }} className="delivery_2_main_main_content">
						<div className="delivery_2_main_main_content_img">
							<img src="https://b.zmtcdn.com/data/pictures/7/20668557/72259f27f9c3f20fd31408be6991898f_featured_v2.jpg" alt="" />
						</div>
						<div className="delivery_2_main_main_content_info">
							<p>Plan B</p>
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
