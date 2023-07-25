import "./globals.css";
import type {Metadata} from "next";
import {Footer, Navbar} from "@/components";

export const metadata: Metadata = {
	title: "Car Hub",
	description: "Discover the best car in the world.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<div>
			<Navbar />
			<body className={"relative"}>{children}</body>
			<Footer />
		</div>
	);
}
