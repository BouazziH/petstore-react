import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <header>
      <nav id="navp">
        <div id="logoNav">
          <a href="">
            <img src="/assets/img/logo1.png" alt="logo de petstore" />
          </a>
        </div>
        <div>
          <ul id="headMenu">
            <div className="container">
              <input type="search" placeholder="Rechercher ..." />
              <button type="submit">Search</button>
            </div>
            <li>
             <Link to="/">
                <div className="icon">
                  <i class="fa-solid fa-house fa-2xl"></i>
                </div>
                <span>Home</span>
             </Link>
            </li>

            <li>
               <Link to="Contact">
                <div className="icon">
                  <i class="fa-solid fa-phone fa-2xl"></i>
                </div>
               <span>Contact</span>
               </Link> 
              
            </li>

            <li>
              <Link to="Panier">
                <div className="icon">
                  <i class="fa-solid fa-basket-shopping fa-2xl"></i>
                </div>
                <div>
                  <span>Panier</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="Logout">
                <div className="icon">
                  <i class="fa-solid fa-right-from-bracket fa-2xl"></i>
                </div>
                <div>
                  <span>Logout</span>
                </div>
              </Link>
            </li>

            <li>
              <Link to="Connexion">
                <div className="icon">
                  <i class="fa-solid fa-user fa-2xl"></i>
                </div>
                <div>
                  <span>Connexion</span>
                </div>
              </Link>
            </li>

            <li>
              <Link to="Lists-contacts">
                <div className="icon">
                  <i class="fa-solid fa-user fa-2xl"></i>
                </div>
                <div>
                  <span>Lists contacts</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
