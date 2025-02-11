
import "./globals.css";
import { Inter } from "next/font/google";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nyakallo App",
  description: "the life and times of Nyakallo Mahlakametsa vol.1",
  keywords: "Bio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost normal-case text-xl">
              Quote Unquote
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/about/contact">Contact</Link>
              </li>
              <li>
                <Link href="/githubusers">GitHub Users</Link>
              </li>
            </ul>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}