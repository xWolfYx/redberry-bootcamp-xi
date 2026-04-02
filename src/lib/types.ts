export type Links = {
	header: string;
	links: Link[];
};

type Link = {
	text: string;
	link: string;
	icon?: React.ReactNode;
};
