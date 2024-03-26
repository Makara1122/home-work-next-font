import { Suspense } from "react";
import "@/app/globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import Loading from "./loading";
import Error from "./error";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

import {inter, localCustomFont, suwannaphum} from '@/app/(user)/_app'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {


	return (
		<html lang="en">
			<body className={`h-screen flex flex-col ${suwannaphum.variable} ${inter.variable} ${localCustomFont.variable}`}>
				<header>
					<NavbarComponent />
				</header>
				<ErrorBoundary errorComponent={Error}>
					<Suspense fallback={<Loading />}>
						<div className="mx-[100px] ">
						{children}
						</div>
					</Suspense>
				</ErrorBoundary>
			</body>
		</html>
	);
}
