export type Links = {
	header: string;
	links: Link[];
};

type Link = {
	text: string;
	link: string;
	icon?: React.ReactNode;
};

export type SliderItem = { header: string; body: string; imageSrc: string };
