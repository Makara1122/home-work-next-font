import SideBarComponent from "@/components/sidebar/SideBarComponent";
import "@/app/globals.css";
import { Suspense } from "react";
import Loading from "./dashboard/loading";
export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html>
			<body>
				<aside className="fixed h-screen">
					<SideBarComponent />
				</aside>
				<Suspense fallback={<Loading/>}>
				<main className="">{children}</main>
				</Suspense>
				
			</body>
		</html>
	);
}
