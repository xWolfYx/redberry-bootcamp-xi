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
			className={`px-4 py-3 border-[#958FEF] border-2 rounded-lg font-medium text-[#4F46E5] capitalize ${styles}`}
		>
			{children}
		</button>
	);
}
