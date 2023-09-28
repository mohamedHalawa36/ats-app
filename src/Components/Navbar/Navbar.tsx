import "./navbar.css";
export default function Navbar() {
  return (
    <nav className="nav-container">
      <div className="nav-element">program details</div>
      <span className="vertical-devider"></span>
      <div className="nav-element">application form</div>
      <span className="vertical-devider"></span>
      <div className="nav-element">workflow</div>
      <span className="vertical-devider"></span>
      <div className="nav-element">preview</div>
    </nav>
  );
}
