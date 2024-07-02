import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
          <img src="images/Perfume.svg" alt="Logo" width={180} />
        </div>
        <div className="col">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a
                className="nav-link active text-dark"
                aria-current="page"
                href="#"
              >
                Lanzamientos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Fragancias Masculinas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Fragancias Femeninas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" aria-disabled="true">
                Cofres y sets
              </a>
            </li>
            <li className="col">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
