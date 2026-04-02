import { Rocket } from "lucide-react";

export default function RocketLogo({ size }: { size: string }) {
	return (
		<div className={`bg-[#4F46E5] p-3 rounded-lg text-gray-100  size-${size}`}>
			<Rocket className="size-full" />
		</div>
	);
}
