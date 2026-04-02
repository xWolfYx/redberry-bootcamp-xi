import { FaTwitter, FaYoutube } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { PiPhoneLight } from "react-icons/pi";
import { RiInstagramFill } from "react-icons/ri";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import type { Links } from "../lib/types";
import RocketLogo from "./RocketLogo";

const socials = [
	{
		id: 1,
		site: "https://facebook.com",
		Icon: TiSocialFacebook,
	},
	{
		id: 2,
		site: "https://twitter.com",
		Icon: FaTwitter,
	},
	{
		id: 3,
		site: "https://instagram.com",
		Icon: RiInstagramFill,
	},
	{
		id: 4,
		site: "https://linkedin.com",
		Icon: TiSocialLinkedin,
	},
	{
		id: 5,
		site: "https://youtube.com",
		Icon: FaYoutube,
	},
];

const links: Links[] = [
	{
		header: "Explore",
		links: [
			{ text: "Enrolled Courses", link: "/" },
			{ text: "Browse Courses", link: "/" },
		],
	},
	{
		header: "Account",
		links: [{ text: "My Profile", link: "/" }],
	},
	{
		header: "Contact",
		links: [
			{
				icon: <MdOutlineEmail />,
				text: "contact@company.com",
				link: "mailto:contact@company.com",
			},
			{
				icon: <PiPhoneLight />,
				text: "(+995) 555 111 222",
				link: "mailto:contact@company.com",
			},
			{
				icon: <LuMapPin />,
				text: "Aghmashenebeli St.115",
				link: "",
			},
		],
	},
];

export default function Footer() {
	return (
		<footer className="px-44.25">
			<div className="flex justify-center pt-20 pb-5">
				<div className="mr-auto w-[301.36px]">
					<div className="flex items-center gap-3 mb-4">
						<RocketLogo size="11.25" />
						<span className="font-medium text-[#130E67] text-2xl">
							Bootcamp
						</span>
					</div>
					<p className="mb-6 font-medium text-[#130E67]">
						Your learning journey starts here! Browse courses to get started.
					</p>
					<ul className="flex items-center gap-5.5 *:text-[#736BEA]">
						{socials.map((s) => (
							<SocialLink key={s.id} icon={<s.Icon />} site={s.site} />
						))}
					</ul>
				</div>
				<div className="flex gap-30">
					{links.map((link) => (
						<LinksList key={link.header} link={link} />
					))}
				</div>
			</div>
			<div className="flex justify-between pb-5 text-gray-500">
				<p>Copyright © 2026 Redberry International</p>
				<p className="*:text-[#736BEA]">
					All Rights Reserved | <a href="/">Terms and Conditions</a> |{" "}
					<a href="/">Privacy Policy</a>
				</p>
			</div>
		</footer>
	);
}

function LinksList({ link }: { link: Links }) {
	return (
		<ul key={link.header}>
			<div className="mb-4 font-semibold text-[#130E67]">{link.header}</div>
			{link.links.map((l) => (
				<li key={l.text} className="mb-2.5 text-gray-500">
					<a href={l.link} className="flex items-center gap-1.5">
						{l.icon ? l.icon : null}
						{l.text}
					</a>
				</li>
			))}
		</ul>
	);
}

function SocialLink({ icon, site }: { icon: React.ReactNode; site: string }) {
	return <a href={site}>{icon}</a>;
}
