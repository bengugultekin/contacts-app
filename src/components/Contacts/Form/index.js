import { useState, useEffect } from "react";

// Empty values for initial input values
const initialFormValues = { fullname: "", phone_number: "" };

function Form({ addContact, contacts }) {
  // Describe form object
  const [form, setForm] = useState(initialFormValues);

  // Cleaning input values
  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  // Describe Change Input
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Describe Submit Event
  const onSubmit = (e) => {
    // Stoping refresh when submit form
    e.preventDefault();

    // Cleaning empty values
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }

    // Adding lits item and protecting other list items
    addContact([...contacts, form]);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="Full Name"
          value={form.fullname}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          name="phone_number"
          placeholder="Phone Number"
          value={form.phone_number}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
