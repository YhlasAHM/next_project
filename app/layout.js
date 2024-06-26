import "./global.css";

import { Providers } from "../provider";
/* import dynamic from "next/dynamic";
import { Suspense } from "react";
 */
export const metadata = {
  title: "next page",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}