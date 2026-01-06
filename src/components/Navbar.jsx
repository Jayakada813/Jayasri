export default function Navbar({ currentPage, setPage }) {
  const pages = ["home", "course", "progress", "quiz", "certificate"];

  return (
    <nav className="navbar">
      <ul>
        {pages.map((p) => (
          <li
            key={p}
            className={currentPage === p ? "active" : ""}
            onClick={() => setPage(p)} // Calls handleNavClick in App.jsx
          >
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </li>
        ))}
      </ul>
    </nav>
  );
}
