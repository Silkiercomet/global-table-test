import { useState } from "react"

/* crear un modal
rellenarlo con formas 
este solo se mostrara al pulsar edit y enviara la id del elemento a un estado
*/
const Table = ({data, setElementToEdit,setEditContactId,handleDelete}) => {
const [isEditing, setIsEditing] = useState(false)
const handleEdit = (contact) => {
  setElementToEdit(contact)
}
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
        {data.map(contact =>         
        <tr key={contact.id} id={contact.id}>
          <td>{contact.name}</td>
          <td>{contact.username}</td>
          <td>{contact.email}</td>
          <td>{`${contact.address["street"]}, ${contact.address["suite"]}. ${contact.address["city"]}`}</td>
          <td>
           <button className="edit" onClick={() => {handleEdit(contact), setEditContactId(contact.id)}}>edit</button>
           <button className="delete" onClick={() => handleDelete(contact.id)}>delete</button>
           </td>
        </tr>)}


      </tbody>
    </table>
  )
}

export default Table