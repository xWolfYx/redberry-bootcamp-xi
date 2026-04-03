import { LockKeyhole, Star } from "lucide-react";
import { Link } from "react-router-dom";
import SolidBtn from "../ui/SolidBtn";
import TransparentBtn from "../ui/TransparentBtn";

export default function ContinueLearning() {
	return (
		<div className="mt-28">
			<div className="flex flex-col">
				<span className="font-semibold text-[40px] text-gray-950 capitalize">
					Continue learning
				</span>
				<div className="flex justify-between">
					<span className="font-medium text-[18px] text-gray-700">
						Pick up where you left
					</span>
					<Link
						to="/"
						className="font-medium text-[#4F46E5] text-[20px] underline capitalize"
					>
						See all
					</Link>
				</div>
			</div>
			<div className="relative mt-8">
				<div className="top-1/2 left-1/2 z-10 absolute flex flex-col items-center bg-white px-14 py-8 border border-gray-300 rounded-xl w-104.5 -translate-1/2">
					<div className="flex justify-center bg-[#DDDBFA] mb-3 py-4 rounded-full aspect-square">
						<LockKeyhole color="#4F46E5" strokeWidth={1.5} size={40} />
					</div>
					<p className="mb-6">Sign in to track your learning progress</p>
					<SolidBtn>Log In</SolidBtn>
				</div>
				<div className="flex gap-6 blur-sm">
					<ActiveCourse />
					<ActiveCourse />
					<ActiveCourse />
				</div>
			</div>
		</div>
	);
}

function ActiveCourse() {
	return (
		<div className="flex flex-col gap-2 bg-white p-5 rounded-xl">
			<div className="flex gap-4">
				<img src="/assets/old-pc.png" alt="" className="rounded-xl" />
				<div>
					<div className="flex justify-between">
						<p>Lecturer Marilyn Mango</p>
						<span className="flex items-center gap-1 text-[14px]">
							<Star size={16} fill="#F4A316" color="#F4A316" />
							4.9
						</span>
					</div>
					<p>Advanced React & TypeScript Development</p>
				</div>
			</div>
			<div>
				<div className="flex justify-between gap-10">
					<div className="w-full">
						<span className="font-medium text-[12px]">65% Complete</span>
						<div className="bg-[#DDDBFA] rounded-full w-full h-4">
							<div
								className="bg-[#4F46E5] rounded-full h-4"
								style={{ width: "65%" }}
							></div>
						</div>
					</div>
					<TransparentBtn>View</TransparentBtn>
				</div>
			</div>
		</div>
	);
}
