import "./ListContacts.css";
import y from "../../data/dbContact.json";
export default function ListMessage() {
  return (
    <div>
      <h1>la liste des messages.</h1>
      <ul>
        {y.contacts.map((contact) => (
          <li key={contact.id}>
            <table>
              <thead>
                <tr>
                  <th scope="col">Nom</th>
                  <th scope="col">Email</th>
                  <th scope="col">Tel</th>
                  <th scope="col">Message</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{contact.nom}</td>
                  <td>{contact.email}</td>
                  <td>{contact.tel}</td>
                  <td>{contact.message}</td>
                </tr>
              </tbody>
            </table>
          </li>
        ))}
      </ul>
    </div>
  );
}
