export default function SolidBtn({
	children,
	styles,
}: {
	children: string;
	styles?: string;
}) {
	return (
		<button
			type="button"
			className={`bg-[#4F46E5] px-6.5 py-4.5 rounded-lg text-white text-xl capitalize cursor-pointer ${styles}`}
		>
			{children}
		</button>
	);
}
