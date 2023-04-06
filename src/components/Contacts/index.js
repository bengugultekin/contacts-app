import "./styles.css";

import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Bengu",
      phone_number: "123123",
    },
    {
      fullname: "Onur",
      phone_number: "542343",
    },
    {
      fullname: "Ayfer",
      phone_number: "566778685",
    },
  ]);

  useEffect(() => {
    // console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
