import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer__addr">
        <h1 className="footer__logo">PetStore</h1>
        <p>une petite description toto</p>
        <address>
          <p>194 Rue de la Ronce, 76230 Isneauville</p>
          <br />
          <p>07 10 12 25 52</p>
          <br />
          <a href="index.php?page=contact">
            <input
              type="submit"
              value="Nous contacter"
              id="submit"
              />
          </a>
        </address>
        <br />
        <div className="footer__iconesSocial">
          <a href="#">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-snapchat-square"></i>
          </a>
        </div>
      </div>

      
      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">INFORMATIONS</h2>
          <ul className="nav__ul">
            <li>
              <a href="#">Qui sommes nous ?</a>
            </li>
            <li>
              <a href="#">Découvrir Petsor Santé</a>
            </li>

            <li>
              <a href="#">Découvrir mydogmate</a>
            </li>

            <li>
              <a href="#">Espace Presse</a>
            </li>
            <li>
              <a href="#">CGV</a>
            </li>
            <li>
              <a href="#">Crédit</a>
            </li>
            <li>
              <a href="#">Mentions légales</a>
            </li>
            <li>
              <a href="#">Modes de livraison</a>
            </li>
            <li>
              <a href="#">Tous nos magasins</a>
            </li>
            <li>
              <a href="#">Toutes nos offres promotionnelles</a>
            </li>
          </ul>
         </li>
        <li className="nav__item">
          <h2 className="nav__title">CATEGORIES</h2>

          <ul className="nav__ul">
            <li>
              <a href="#">Chiens</a>
            </li>
            <li>
              <a href="#">Chats</a>
            </li>

            <li>
              <a href="#">Aquariophilie & Bassins</a>
            </li>

            <li>
              <a href="#">Oiseaux</a>
            </li>

            <li>
              <a href="#">Rongeurs & Co</a>
            </li>

            <li>
              <a href="#">Reptiles & Co</a>
            </li>

            <li>
              <a href="#">Animaux de la nature</a>
            </li>
            <li>
              <a href="#">Livres, Cadeaux & Art créatif</a>
            </li>
            <li>
              <a href="#">Nos Conseils</a>
            </li>
          </ul>
        </li>
        <li className="nav__item">
          <h2 className="nav__title">PETSTORE RECOMMANDE</h2>

          <ul className="nav__ul">
            <li>
              <a href="#">PetStore</a>
            </li>

            <li>
              <a href="#">Royal Canin</a>
            </li>

            <li>
              <a href="#">Nutrivia Nature</a>
            </li>
            <li>
              <a href="#">Nutrivia</a>
            </li>

            <li>
              <a href="#">Wellnes</a>
            </li>

            <li>
              <a href="#">Orijen</a>
            </li>
            <li>
              <a href="#">Acana</a>
            </li>

            <li>
              <a href="#">Nature Diet</a>
            </li>

            <li>
              <a href="#">Lily's Kitchen</a>
            </li>
            <li>
              <a href="#">Vigor &Sage</a>
            </li>

            <li>
              <a href="#">Carnilove</a>
            </li>

            <li>
              <a href="#">Vitakraft</a>
            </li>
            <li>
              <a href="#">Tetra</a>
            </li>
          </ul>
        </li>
      </ul> 

      <div className="legal">
        <p>PetStore &copy;{new Date().getFullYear()} - all rights reserved</p>
      </div> 
    </footer>
  )
};
