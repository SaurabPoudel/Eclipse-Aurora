import { ContextProvider } from "./context";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fun with Eclipse",
  description: "By Eclipse Aurora",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </head>
      <body className="w-full h-full">
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
