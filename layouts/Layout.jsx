import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
        <nav>
            <Link href="/home">home</Link> | <Link href="/login">login</Link>
        </nav>
        <div>{children}</div>
    </div>
  )
}
