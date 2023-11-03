import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header>
    <Link to="" className="logo">
      <span>Mother &</span>
      <span>Child Initiative</span>
    </Link>
    <nav>
      <Link to="">About us</Link>
      <Link to="" className="nav-btn">
        Donate Today
      </Link>
    </nav>
  </header>
  )
}
