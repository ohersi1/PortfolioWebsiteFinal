import React from "react";
import WorkImg from "../assets/projects/workImg.jpeg";
import RealImg from "../assets/projects/realestate.jpg";
import youtube from "../assets/youtube.png";
import stripe from "../assets/stripe.png";
import bankist from "../assets/bankist.png";
import weather from "../assets/weather.png";
import dice from "../assets/dice.png";
import crypto from '../assets/crypto.png'

const Work = () => {
	return (
		<div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f] ">
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
						Work
					</p>
					<p className="py-6">Check out some of my recent work</p>
				</div>
				{/* Container */}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					{/* Grid Item */}
					<div
						style={{ backgroundImage: `url(${youtube})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						<div>
							<span className="text-2xl font-bold text-white tracking-wider">
								Youtube Application
							</span>
							<div className="pt-8 text-center">
								<a
									href="https://osmanyoutubecloneapp.netlify.app/"
									target="_blank"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a
									href="https://github.com/ohersi1/YoutubeCloneApplication"
									target="_blank"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${crypto})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						<div>
							<span className="text-2xl font-bold text-white tracking-wider">
								Crypto Application
							</span>
							<div className="pt-8 text-center">
								<a href="https://osmancryptoapp.netlify.app/" target="_blank">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="https://github.com/ohersi1/CryptoAppReact" target="_blank">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${stripe})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						<div>
							<span className="text-2xl font-bold text-white tracking-wider">
								Stripe Clone
							</span>
							<div className="pt-8 text-center">
								<a href="https://osmanstripeclone.netlify.app/" target="_blank">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a
									href="https://github.com/ohersi1/StripeCloneProject"
									target="_blank"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${bankist})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						<div>
							<span className="text-2xl font-bold text-white tracking-wider">
								Fake Bank website
							</span>
							<div className="pt-8 text-center">
								<a href="https://bankistbank.netlify.app/" target="_blank">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a
									href="https://github.com/ohersi1/BankistProject"
									target="_blank"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${weather})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						<div>
							<span className="text-2xl font-bold text-white tracking-wider">
								Weather Application
							</span>
							<div className="pt-8 text-center">
								<a href="https://osmanweatherapp.netlify.app" target="_blank">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a
									href="https://github.com/ohersi1/ReactWeatherApp"
									target="_blank"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${dice})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center"
					>
						<div>
							<span className="text-2xl font-bold text-white tracking-wider">
								Dice Game
							</span>
							<div className="pt-8 text-center">
								<a href="https://osmanpiggame.netlify.app/" target="_blank">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a
									href="https://github.com/ohersi1/PigGameProject"
									target="_blank"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
