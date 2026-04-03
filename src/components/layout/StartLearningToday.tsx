import BootcampCard from "../ui/BootcampCard";

export default function StartLearningToday() {
	return (
		<div className="mt-14">
			<span className="font-semibold text-[40px] text-gray-950 capitalize">
				Start learning today
			</span>
			<p className="font-medium text-[18px] text-gray-700">
				Choose from our most popular courses and begin your journey
			</p>
			<div className="flex gap-6 mt-6">
				<BootcampCard />
				<BootcampCard />
				<BootcampCard />
			</div>
		</div>
	);
}
