import { Metadata } from "next";
import "@/styles/index.scss";
import SEO from "./components/seo";

export const metadata: Metadata = {
  title: "Esteban Burgos CV",
  description:
    "This is my personal data, please contact me if you need more information.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SEO />
      <body>{children}</body>
    </html>
  );
}
