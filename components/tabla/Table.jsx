const Table = ({ data, setElementToEdit, setEditContactId, handleDelete, setDisplay }) => {

  const handleEdit = (contact) => {
    setElementToEdit(contact);
  };
  
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((contact) => (
          <tr key={contact.id} id={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.username}</td>
            <td>{contact.email}</td>
            <td>{`${contact.address["street"]}, ${contact.address["suite"]}. ${contact.address["city"]}`}</td>
            <td>
              <button
                className="edit"
                onClick={() => {
                  handleEdit(contact), setEditContactId(contact.id);
                }}
              >
                edit
              </button>
              <button
                className="delete"
                onClick={() => handleDelete(contact.id,setDisplay,data)}
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
