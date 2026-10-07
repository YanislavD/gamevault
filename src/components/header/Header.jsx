import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const navLinkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">GameVault</Link>

      <nav className="nav">
        <NavLink to="/" end className={navLinkClass}>Home</NavLink>
        <NavLink to="/games" end className={navLinkClass}>Catalog</NavLink>
        <NavLink to="/games/add" className={navLinkClass}>Add Game</NavLink>
        <NavLink to="/profile" className={navLinkClass}>Profile</NavLink>
        <NavLink to="/login" className={navLinkClass}>Login</NavLink>
        <NavLink to="/register" className={navLinkClass}>Register</NavLink>
      </nav>
    </header>
  )
}
