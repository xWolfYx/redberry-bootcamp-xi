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
			className={`bg-[#4F46E5] px-4 py-3 border-2 rounded-lg font-medium text-white capitalize ${styles}`}
		>
			{children}
		</button>
	);
}
