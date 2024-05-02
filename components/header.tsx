import { MenuIcon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/router"
import ConnectWalletButton from "@/components/connect-wallet-button"
import { siteConfig } from "@/config/site"
import { cn } from "@/utils/cn"
import { IconButton } from "./ui/icon-button"
import { Typography } from "./ui/typography"
import { text } from "stream/consumers"

const MenuItems = [
  {
    text: "Reviews",
    href: "/Reviews",
  },
  {
    text: "Map",
    href: "/",
  },
  {
    text: "Challenges",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
]

export default function Header() {
  const { asPath } = useRouter();

  return (
    <header className="fixed left-0 top-0 z-20 w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto flex justify-center items-center p-6 md:px-6"> 
        <ul className="ml-0 hidden items-center gap-6 md:flex">
          {MenuItems.map((item) => (
            <li key={item.text}>
              <Link
                href={item.href}
                className={cn("text-gray-600 hover:underline", {
                  "text-gray-900": item.href === "/" ? asPath === item.href : asPath.startsWith(item.href),
                })}
              >
                <Typography level="body4" className=" left-10 font-semibold">
                  {item.text}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

