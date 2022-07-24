
export function Header() {
  return (
    <header className="bg-primary">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <p className="m-0 d-flex align-items-center">
              <img src="/logo.png" width={40} alt="last five f1" className="me-2" />
              <strong className="navbar-brand text-light">
                L5F1  
              </strong>
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
