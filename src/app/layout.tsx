import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={"h-full"}>
        <body
            className={`bg-default-200 h-full m-0 p-0`}
        >
        {children}
        </body>
        </html>
    );
}
