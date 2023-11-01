import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header>
    <Link to="" className="logo">
      The Mother & Child Initiative
    </Link>
    <nav>
      <Link to="">About us</Link>
      <Link to="">Our stories</Link>
      <Link to="">News and Events</Link>
      <Link to="" className="nav-btn">
        Donate Today
      </Link>
    </nav>
  </header>
  )
}
