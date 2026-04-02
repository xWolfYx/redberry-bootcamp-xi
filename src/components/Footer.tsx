import { Rocket } from "lucide-react";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { PiPhoneLight } from "react-icons/pi";
import { RiInstagramFill } from "react-icons/ri";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";

const socials = [
	{
		id: 1,
		site: "https://facebook.com",
		icon: <TiSocialFacebook />,
	},
	{
		id: 2,
		site: "https://twitter.com",
		icon: <FaTwitter />,
	},
	{
		id: 3,
		site: "https://instagram.com",
		icon: <RiInstagramFill />,
	},
	{
		id: 4,
		site: "https://linkedin.com",
		icon: <TiSocialLinkedin />,
	},
	{
		id: 4,
		site: "https://youtube.com",
		icon: <FaYoutube />,
	},
];

const links = [
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
		<footer className="">
			<div className="pt-20 pb-5">
				<div className="w-[301.36px]">
					<div className="flex items-center gap-3 mb-4">
						<div className="bg-[#4F46E5] p-3 rounded-lg text-gray-100">
							<Rocket className="size-6" />
						</div>
						<span className="font-medium text-[#130E67] text-2xl">
							Bootcamp
						</span>
					</div>
					<p className="mb-6 font-medium text-[#130E67]">
						Your learning journey starts here! Browse courses to get started.
					</p>
					<ul className="flex *:flex items-center *:items-center gap-5.5 *:size-4.75 *:text-[#736BEA]">
						{socials.map((s) => (
							<li key={s.id}>
								<a href={s.site} target="_blank">
									{s.icon}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
}
