import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import type { SliderItem } from "../../lib/types";
import SolidBtn from "../ui/SolidBtn";
import StartLearningToday from "./StartLearningToday";

const sliderItems: SliderItem[] = [
	{
		header: "Start learning something new today",
		body: "Explore a wide range of expert-led courses in design, development, business, and more. Find the skills you need to grow your career and learn at your own pace.",
		imageSrc: "/assets/backgrounds/bg-1.png",
	},
	{
		header: "Pick up where you left off",
		body: "Your learning journey is already in progress. Continue your enrolled courses, track your progress, and stay on track toward completing your goals.",
		imageSrc: "/assets/backgrounds/bg-2.png",
	},
	{
		header: "Learn together, grow faster",
		body: "",
		imageSrc: "/assets/backgrounds/bg-3.png",
	},
];

export default function Dashboard() {
	return (
		<div className="flex flex-col justify-center px-44.25 pt-16 pb-30">
			<Slider />
			<StartLearningToday />
		</div>
	);
}

function Slider() {
	return (
		<div
			className={`relative bg-[url("${sliderItems[0].imageSrc}")] bg-cover bg-center px-12 py-13 pb-20.5 rounded-[30px] w-full max-w-391.5`}
		>
			<p className="mb-4 font-bold text-gray-50 text-5xl">
				{sliderItems[0].header}
			</p>
			<p className="mb-9.5 max-w-304.5 font-extralight text-[24px] text-gray-50 leading-7 tracking-[0.008em]">
				{sliderItems[0].body}
			</p>
			<SolidBtn>Browse courses</SolidBtn>
			<CarouselNav />
			<div className="right-12.5 bottom-13.5 absolute flex gap-7.5 *:size-12">
				<CircleChevronLeft strokeWidth={1} className="text-gray-50" />
				<CircleChevronRight strokeWidth={1} className="text-gray-50" />
			</div>
		</div>
	);
}

function CarouselNav() {
	return (
		<div className="flex justify-center items-center gap-3 mt-13.5 *:rounded-full">
			<div className="bg-gray-100 w-14.25 h-2"></div>
			<div className="bg-[#C1BCBC] w-14.25 h-2"></div>
			<div className="bg-[#C1BCBC] w-14.25 h-2"></div>
		</div>
	);
}
