import { motion } from "framer-motion"
import { useState } from "react"


export default function Delivery() {
	const [firstOrder,setFirstOrder]=useState(0);
	const [brands,setBrands]=useState(0);
	console.log(firstOrder)
  return (
	<div>
		<div className="delivery" id="one">
			<div className="delivery_1_main container">
				<div className="delivery_title">
					<h1>Inspiration for your first order</h1>
				</div>
				<div className="delivery_1_main_main">
						<motion.div animate={{scale:firstOrder>0 ? "1":"0"}} onClick={()=>setFirstOrder(firstOrder-1)} className="delivery_content_left">
							<i className="fa-solid fa-chevron-left"></i>
						</motion.div>
				<div className="delivery_content">
					<motion.div animate={{marginLeft:-193*firstOrder}} className="delivery_1_main_box">
							<motion.div initial={{scale:0}} animate={{scale:1}} className="delivery_1_main_box_img">
								<img src="https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png" alt="" />
							</motion.div>
							<div className="delivery_1_main_box_title">
								<p>Briyani</p>
							</div>
						</motion.div>
					<div className="delivery_1_main_box">
						<motion.div initial={{scale:0}} animate={{scale:1}} className="delivery_1_main_box_img">
							<img src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png" alt="" />
						</motion.div>
						<div className="delivery_1_main_box_title">
							<p>Pizza</p>
						</div>
					</div>
					<div className="delivery_1_main_box">
						<motion.div initial={{scale:0}} animate={{scale:1}} className="delivery_1_main_box_img">
							<img src="https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png" alt="" />
						</motion.div>
						<div className="delivery_1_main_box_title">
							<p>Rolls</p>
						</div>
					</div>
					<div className="delivery_1_main_box">
						<motion.div initial={{scale:0}} animate={{scale:1}} className="delivery_1_main_box_img">
							<img src="https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png" alt="" />
						</motion.div>
						<div className="delivery_1_main_box_title">
							<p>Chicken</p>
						</div>
					</div>
					<div className="delivery_1_main_box">
						<motion.div initial={{scale:0}} animate={{scale:1}} className="delivery_1_main_box_img">
							<img src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png" alt="" />
						</motion.div>
						<div className="delivery_1_main_box_title">
							<p>Burger</p>
						</div>
					</div>
					<div className="delivery_1_main_box">
						<motion.div initial={{scale:0}} animate={{scale:1}} className="delivery_1_main_box_img">
							<img src="https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png" alt="" />
						</motion.div>
						<div className="delivery_1_main_box_title">
							<p>Momos</p>
						</div>
					</div>
					<div className="delivery_1_main_box">
						<motion.div initial={{scale:0}} animate={{scale:1}} className="delivery_1_main_box_img">
							<img src="https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png" alt="" />
						</motion.div>
						<div className="delivery_1_main_box_title">
							<p>Dosa</p>
						</div>
					</div>
					<div className="delivery_1_main_box">
						<motion.div initial={{scale:0}} animate={{scale:1}} className="delivery_1_main_box_img">
							<img src="https://b.zmtcdn.com/data/o2_assets/c21624eac87ed1c8c87ef1ea52980ded1632716659.png" alt="" />
						</motion.div>
						<div className="delivery_1_main_box_title">
							<p>Chowmein</p>
						</div>
					</div>
					<div className="delivery_1_main_box">
						<motion.div initial={{scale:0}} animate={{scale:1}} className="delivery_1_main_box_img">
							<img src="https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png" alt="" />
						</motion.div>
						<div className="delivery_1_main_box_title">
							<p>Cake</p>
						</div>
					</div>
					<div className="delivery_1_main_box">
						<motion.div initial={{scale:0}} animate={{scale:1}} className="delivery_1_main_box_img">
							<img src="https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg" alt="" />
						</motion.div>
						<div className="delivery_1_main_box_title">
							<p>North Thali</p>
						</div>
					</div>
				</div>
						<motion.div animate={{scale:firstOrder<4 ? "1":"0"}} onClick={()=>setFirstOrder(firstOrder+1)} className="delivery_content_right">
							<i className="fa-solid fa-chevron-right"></i>
						</motion.div>
				</div>
			</div>
		</div>
		<div className="delivery" id="two">
			<div className="delivery_1_main container">
				<div className="delivery_title">
					<h1>Tops brands for you</h1>
				</div>
				<div className="delivery_1_main_main">
						<motion.div animate={{scale:brands>0 ? "1":"0"}} onClick={()=>setBrands(brands-1)} className="delivery_content_left">
							<i className="fa-solid fa-chevron-left"></i>
						</motion.div>
				<div className="delivery_content">
					<motion.div animate={{marginLeft:-193*brands}} className="delivery_1_main_box">
							<motion.div initial={{scale:0}} animate={{scale:1}}  className="delivery_1_main_box_img">
								<img src="https://b.zmtcdn.com/data/brand_creatives/logos/3a58b67479fd290ff96996002438736e_1672389253.png" alt="" />
							</motion.div>
							<div className="delivery_1_main_box_title">
								<p>WOW! Momo</p>
							</div>
						</motion.div>
					<div className="delivery_1_main_box">
						<motion.div initial={{scale:0}} animate={{scale:1}} className="delivery_1_main_box_img">
							<img src="https://b.zmtcdn.com/data/brand_creatives/logos/560b209a689eefa9feb367b5d5604097_1611382952.png" alt="" />
						</motion.div>
						<div className="delivery_1_main_box_title">
							<p>KFC</p>
						</div>
					</div>
					<div className="delivery_1_main_box">
						<motion.div initial={{scale:0}} animate={{scale:1}} className="delivery_1_main_box_img">
							<img src="https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188103.png" alt="" />
						</motion.div>
						<div className="delivery_1_main_box_title">
							<p>Burger King</p>
						</div>
					</div>
					<div className="delivery_1_main_box">
						<motion.div initial={{scale:0}} animate={{scale:1}} className="delivery_1_main_box_img">
							<img src="https://b.zmtcdn.com/data/brand_creatives/logos/f9eef3c0e4df808bd5590eefdf5c9c1d_1677580200.png" alt="" />
						</motion.div>
						<div className="delivery_1_main_box_title">
							<p>Mio Amore</p>
						</div>
					</div>
					<div className="delivery_1_main_box">
						<motion.div initial={{scale:0}} animate={{scale:1}} className="delivery_1_main_box_img">
							<img src="https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png" alt="" />
						</motion.div>
						<div className="delivery_1_main_box_title">
							<p>Pizza Hut</p>
						</div>
					</div>
					<div className="delivery_1_main_box">
						<motion.div initial={{scale:0}} animate={{scale:1}} className="delivery_1_main_box_img">
							<img src="https://b.zmtcdn.com/data/brand_creatives/logos/7bd8d15b440414feab366ee63b046f5d_1672388843.png" alt="" />
						</motion.div>
						<div className="delivery_1_main_box_title">
							<p>WOW! China</p>
						</div>
					</div>
					<div className="delivery_1_main_box">
						<motion.div initial={{scale:0}} animate={{scale:1}} className="delivery_1_main_box_img">
							<img src="https://b.zmtcdn.com/data/brand_creatives/logos/0b4a596580e55368edd9c0711bfcf424_1629439244.png" alt="" />
						</motion.div>
						<div className="delivery_1_main_box_title">
							<p>Haldiram&#39;s Prabhuji</p>
						</div>
					</div>
					<div className="delivery_1_main_box">
						<motion.div initial={{scale:0}} animate={{scale:1}} className="delivery_1_main_box_img">
							<img src="https://b.zmtcdn.com/data/brand_creatives/logos/a2531dc570196c0cd9322814eb010d94_1605102324.png" alt="" />
						</motion.div>
						<div className="delivery_1_main_box_title">
							<p>Gupta Brothers</p>
						</div>
					</div>
					<div className="delivery_1_main_box">
						<motion.div initial={{scale:0}} animate={{scale:1}} className="delivery_1_main_box_img">
							<img src="https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676520462.png" alt="" />
						</motion.div>
						<div className="delivery_1_main_box_title">
							<p>Subway</p>
						</div>
					</div>
					<div className="delivery_1_main_box">
						<motion.div initial={{scale:0}} animate={{scale:1}} className="delivery_1_main_box_img">
							<img src="https://static.startuptalky.com/2021/08/McDonald-s-Case-Study-Startuptalky.jpg" alt="" />
						</motion.div>
						<div className="delivery_1_main_box_title">
							<p>McDonald&#39;s</p>
						</div>
					</div>
				</div>
						<motion.div animate={{scale:brands<4 ? "1":"0"}} onClick={()=>setBrands(brands+1)} className="delivery_content_right">
							<i className="fa-solid fa-chevron-right"></i>
						</motion.div>
				</div>
			</div>
		</div>
		<div className="delivery_2 container">
			<div className="delivery_2_main">
				<div className="delivery_title">
					<h1>Delivery Restaurants in Kolkata</h1>
				</div>
				<div className="delivery_2_main_main">
					<motion.div initial={{ scale: 0.4,opacity:0 }} whileInView={{ scale: 1,opacity:1 }} className="delivery_2_main_main_content">
						<div className="delivery_2_main_main_content_img">
							<img src="https://b.zmtcdn.com/data/dish_photos/f3c/ca15e9be9beba62d3f9837cac4d6cf3c.jpg" alt="" />
						</div>
						<div className="delivery_2_main_main_content_info">
							<p>Chennai Square</p>
							<button>4.3<i className="fa-solid fa-star"></i></button>
							<p>South Indian, Beverages</p>
							<p>₹200 for one</p>
						</div>
					</motion.div>
					<motion.div initial={{ scale: 0.4,opacity:0 }} whileInView={{ scale: 1,opacity:1 }} className="delivery_2_main_main_content">
						<div className="delivery_2_main_main_content_img">
							<img src="https://b.zmtcdn.com/data/dish_photos/552/ae2cd5cf51a9df1fe5a72cafc7c57552.jpg" alt="" />
						</div>
						<div className="delivery_2_main_main_content_info">
							<p>AnnaRas</p>
							<button>4.4<i className="fa-solid fa-star"></i></button>
							<p>Street Food, Desserts</p>
							<p>₹200 for one</p>
						</div>
					</motion.div>
					<motion.div initial={{ scale: 0.4,opacity:0 }} whileInView={{ scale: 1,opacity:1 }} className="delivery_2_main_main_content">
						<div className="delivery_2_main_main_content_img">
							<img src="https://b.zmtcdn.com/data/pictures/chains/1/19343931/945cb77e8a59d76193cbd32bae097626_o2_featured_v2.jpg" alt="" />
						</div>
						<div className="delivery_2_main_main_content_info">
							<p>Blue Tokia Coffee Roasters</p>
							<button>4.3<i className="fa-solid fa-star"></i></button>
							<p>Cafe,Coffee,Beverages,...</p>
							<p>₹200 for one</p>
						</div>
					</motion.div>
					<motion.div initial={{ scale: 0.4,opacity:0 }} whileInView={{ scale: 1,opacity:1 }} className="delivery_2_main_main_content">
						<div className="delivery_2_main_main_content_img">
							<img src="https://b.zmtcdn.com/data/dish_photos/283/5fbe8805c259538d20ae6e9a0f358283.jpg" alt="" />
						</div>
						<div className="delivery_2_main_main_content_info">
							<p>KFC</p>
							<button>4.1<i className="fa-solid fa-star"></i></button>
							<p>Fast Food,Burger,Briyani</p>
							<p>₹200 for one</p>
						</div>
					</motion.div>
					<motion.div initial={{ scale: 0.4,opacity:0 }} whileInView={{ scale: 1,opacity:1 }} className="delivery_2_main_main_content">
						<div className="delivery_2_main_main_content_img">
							<img src="https://b.zmtcdn.com/data/dish_photos/6ec/141b4223cc76e5dabb57ece3e1fe56ec.jpg" alt="" />
						</div>
						<div className="delivery_2_main_main_content_info">
							<p>Gupta Brothers</p>
							<button>4.1<i className="fa-solid fa-star"></i></button>
							<p>Misthi,Desserts,North...</p>
							<p>₹200 for one</p>
						</div>
					</motion.div>
					<motion.div initial={{ scale: 0.4,opacity:0 }} whileInView={{ scale: 1,opacity:1 }} className="delivery_2_main_main_content">
						<div className="delivery_2_main_main_content_img">
							<img src="https://b.zmtcdn.com/data/dish_photos/ecf/e4cc2fde639c51201056e35818131ecf.jpg" alt="" />
						</div>
						<div className="delivery_2_main_main_content_info">
							<p>Hindustan Sweets</p>
							<button>4.3<i className="fa-solid fa-star"></i></button>
							<p>Misthi,Desserts,North...</p>
							<p>₹200 for one</p>
						</div>
					</motion.div>
					<motion.div initial={{ scale: 0.4,opacity:0 }} whileInView={{ scale: 1,opacity:1 }} className="delivery_2_main_main_content">
						<div className="delivery_2_main_main_content_img">
							<img src="https://b.zmtcdn.com/data/pictures/chains/4/25234/19840ba6ecc1fcf8a9358f5572e31cad_o2_featured_v2.jpg" alt="" />
						</div>
						<div className="delivery_2_main_main_content_info">
							<p>Mio Amore</p>
							<button>4.3<i className="fa-solid fa-star"></i></button>
							<p>Bakery, Desserts,Streets...</p>
							<p>₹200 for one</p>
						</div>
					</motion.div>
					<motion.div initial={{ scale: 0.4,opacity:0 }} whileInView={{ scale: 1,opacity:1 }} className="delivery_2_main_main_content">
						<div className="delivery_2_main_main_content_img">
							<img src="https://b.zmtcdn.com/data/pictures/chains/4/19068604/4de4976b95304b9835eb76258a683e77_o2_featured_v2.jpg" alt="" />
						</div>
						<div className="delivery_2_main_main_content_info">
							<p>Moginis</p>
							<button>4.3<i className="fa-solid fa-star"></i></button>
							<p>Bakery, Desserts,Streets...</p>
							<p>₹200 for one</p>
						</div>
					</motion.div>
					<motion.div initial={{ scale: 0.4,opacity:0 }} whileInView={{ scale: 1,opacity:1 }} className="delivery_2_main_main_content">
						<div className="delivery_2_main_main_content_img">
							<img src="https://b.zmtcdn.com/data/pictures/chains/0/21060/b46307a6a28d24ecf69d5ec83ee9d451_o2_featured_v2.jpg" alt="" />
						</div>
						<div className="delivery_2_main_main_content_info">
							<p>WOW! Mono</p>
							<button>4.3<i className="fa-solid fa-star"></i></button>
							<p>Momos,Fast Food...</p>
							<p>₹200 for one</p>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	</div>
  )
}
