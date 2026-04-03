import { Star } from "lucide-react";
import SolidBtn from "./SolidBtn";

export default function BootcampCard() {
	return (
		<div className="bg-white p-5 rounded-xl max-w-126.5">
			<img
				src="src/assets/coding-screen.png"
				alt=""
				className="rounded-[10px]"
			/>
			<div className="flex justify-between items-center mt-4">
				<p className="font-medium text-[14px] text-gray-500">
					Lecturer Marilyn Mango
				</p>
				<span className="flex items-center gap-1 text-[14px]">
					<Star size={16} fill="#F4A316" color="#F4A316" />
					4.9
				</span>
			</div>
			<p className="mt-2.5 font-semibold text-gray-900 text-2xl">
				Advanced React & TypeScript Development
			</p>
			<p className="mt-2.5 max-w-100 font-medium text-gray-500">
				Master modern React patterns, hooks, and TypeScript integration for
				building scalable web applications.
			</p>
			<div className="flex justify-between items-center mt-5">
				<div className="flex items-center gap-2">
					<p className="font-medium text-[12px] text-gray-400">
						Starting from{" "}
					</p>
					<span className="font-semibold text-[32px] text-gray-900">$299</span>
				</div>
				<SolidBtn>Details</SolidBtn>
			</div>
		</div>
	);
}
