import type { Metadata } from "next";
import "../../globals.css";


export function generateMetadata ({params}:{params:{name:string}}): Metadata {
  const title = `Discover ${params.name} - Nutrispark`
  const description = `Learn all about nutritional values of ${params.name} `
  return({
    title:title,
    description: description
  })
};

export default function FoodLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    {children}
    </>
  );
}
