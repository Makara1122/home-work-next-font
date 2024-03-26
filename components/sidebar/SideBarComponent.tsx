"use client";

import { Sidebar } from "flowbite-react";

import Link from "next/link";
import { MenuList } from "./menu";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

type MenuItem = {
	name: string;
	path: string;
	icon: React.ElementType;
};

export default function SideBarComponent() {
	const [menuList, setMenuList] = useState<MenuItem[]>(MenuList);
	const path = usePathname()
	return (
		<Sidebar aria-label="Default sidebar example">
			<Sidebar.Items>
				<Sidebar.ItemGroup>
					{menuList.map((item, index) => (
						<Sidebar.Item className={`${path == item.path?"bg-green-400" : ""} `}
							key={index}
							as={Link}
							href={item.path}
							icon={item.icon}
							
						>
							{item.name}
						</Sidebar.Item>
					))}
				</Sidebar.ItemGroup>
			</Sidebar.Items>
		</Sidebar>
	);
}
