import "./connexion.css";
import "./form.css";
export default function Connexion() {
    return(
        <div>
<div className="hearder">
         <h2>Connexion</h2>
        </div>

        <div className="box">
            <div className="left"> 
                 <div className="left-titre">
                    <h3 className="monCompte">J'ai un compte <span className="logoTitre">PetStore</span></h3>
                  </div>
                  
                <div className="box-left">
                    <form action="index.php?page=connexion" method="post">
                      <div className="form-group">
                        <label for="mail">Email </label>
                        <input type="email" name="mail" />
                      </div>
                      <div className="form-group">
                        <label for="password">Mot de passe</label>
                        <input type="password" name="password"  />
                      </div> 
                      <div className="form-group">
                        <a className="passwordOublie" href="#">Mot de passe oublié ?</a>
                      </div>
                      <div className="form-group">
                        <input type="submit" value="Connexion" id="submitConnex" />
                      </div>
                      <input type="hidden" name="frmConnexion" />
                    </form>
                  </div>
                </div>
                <div className="right"> 
                  <div className="right-titre">
                    <h3 className="nouveauCompte"> Je crée mon compte <span className="logoTitre">PetStore</span></h3>
                  </div>
                 
                  <div className="box-right">
                
                          <strong><em>L'inscription est simple et gratuite !</em></strong>
                          <ul className="listePrivileges">
                              <li> Consulter vos points et remises de votre carte de fidélité <span className="logoTitre">PetStore</span></li>
                              <li> Gérez vos informations personnelles</li>
                              <li> Suivez vos commandes passées en magasin ou en ligne</li>
                              <li> et encore de nombreux avantages...</li>
                          </ul>
                         <div className="form-group">
                         <a href="index.php?page=inscription"> <input type ="submit"  value="Créer un compte" id="submit" /></a>
                         </div>
                  </div>
                </div>
                <input type="hidden" name="frmConnexion" />
              






               </div>


        </div>
)};
