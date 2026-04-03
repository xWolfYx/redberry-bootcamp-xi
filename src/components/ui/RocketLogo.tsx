import { Rocket } from "lucide-react";

export default function RocketLogo({ size }: { size: number }) {
	return (
		<div
			className="bg-[#4F46E5] p-3 rounded-xl text-gray-100"
			style={{ width: size, height: size }}
		>
			<Rocket className="size-full" />
		</div>
	);
}
