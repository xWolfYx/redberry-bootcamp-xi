export default function TransparentBtn({
	children,
	styles,
}: {
	children: string;
	styles?: string;
}) {
	return (
		<button
			type="button"
			className={`px-6.5 py-3 border-[#958FEF] font-medium border-2 text-xl rounded-lg text-[#4F46E5] capitalize ${styles}`}
		>
			{children}
		</button>
	);
}
