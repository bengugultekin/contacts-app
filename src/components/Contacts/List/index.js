import { useState } from "react";

function List({ contacts }) {
  // Describe filter input
  const [filterText, setFilterText] = useState("");

  // Filtering
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  console.log(filtered);
  return (
    <div>
      {/* Filter input */}
      <input
        placeholder="Filter contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <h4>
        <span>Name</span>
        <span>|</span>
        <span>Number</span>
      </h4>
      {/* Listing contacts */}
      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span>
          </li>
        ))}
      </ul>
      <p>
        You have <strong>{filtered.length}</strong> contact
        {filtered.length > 1 ? "s" : ""}.
      </p>
    </div>
  );
}

export default List;
