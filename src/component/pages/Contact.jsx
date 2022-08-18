import "./Contact.css";
import "./form.css";
import axios from "axios";
import { useState } from "react";

export default function Contact() {
  const [nom, setNom] = useState();
  const [email, setEmail] = useState();
  const [tel, setTel] = useState();
  const [message, setMessage] = useState();
  const [submitted, setSubmitted] = useState(false);
  const handelSubmit = (event) => {
    /* c'est pour dire au formulaire ne pas recharger la page on utilisant  preventDefault() */
    event.preventDefault();
    const contacts = { nom, email, tel, message };

    axios
      .post("http://localhost:4001/contacts", contacts)
      .then((reponse) => {
        console.log(reponse);
        setSubmitted(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (submitted) {
    return (
      <>
        <p>Merci de votre message.</p>
      </>
    );
  }

  return (
    <>
      <div className="hearder">
        <h2>Contacter Nous</h2>
      </div>

      <div className="box">
        <div className="left">
          <div className="box-left">
            <form method="post" onSubmit={handelSubmit}>
              <div className="form-group">
                <label for="Nom"> Nom :</label>
                <input
                  type="text"
                  name="Nom"
                  required
                  onChange={(event) => setNom(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label for="mail ">Email:</label>
                <input
                  type="email"
                  name="mail"
                  required
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label for="Numéro de télephone">Numéro de téléphone: </label>
                <input
                  type="text"
                  name="Numéro de télephone"
                  required
                  onChange={(event) => setTel(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label for="msg">Comment pouvons-nous vous aider ? : </label>
                <textarea
                  id="msg"
                  name="user_message"
                  required
                  onChange={(event) => setMessage(event.target.value)}
                ></textarea>
              </div>
              <div className="toto">
                <input type="submit" value="Envoyer" id="submit" />
              </div>
            </form>
          </div>
        </div>

        <div className="container-right">
          <div className="box-right">
            <ul id="right-column">
              <li>
                <div className="icone">
                  <i class="fa-solid fa-location-dot"></i> Address: 194 Rue de
                  la Ronce, 76230 Isneauville{" "}
                </div>
              </li>
              <li>
                <div className="icone">
                  <i class="fa-solid fa-phone"></i> Téléphone: 07 50 50 50 50{" "}
                </div>
              </li>
              <li>
                <div className="icone">
                  <i class="fa-solid fa-envelope-circle-check"></i> Email:
                  contact@petstore.com
                </div>
              </li>
            </ul>

            <ul id="reseauxSociaux">
              <a href="#">
                <li>
                  <div className="iconeReseaux">
                    <i class="fa-brands fa-linkedin  fa-2xl"></i>{" "}
                  </div>
                </li>
              </a>
              <a href="#">
                <li>
                  <div className="iconeReseaux">
                    <i class="fa-brands fa-facebook-square  fa-2xl"></i>{" "}
                  </div>
                </li>
              </a>
              <a href="#">
                <li>
                  <div className="iconeReseaux">
                    <i class="fa-brands fa-twitter fa-2xl"></i>
                  </div>
                </li>
              </a>
              <a href="#">
                <li>
                  <div className="iconeReseaux">
                    <i class="fa-brands fa-instagram fa-2xl"></i>{" "}
                  </div>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
