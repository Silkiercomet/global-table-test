import React from "react";
import AddForm from "../addForm/AddForm";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import styles from "./modal.module.css";
/*crear una segunda instancia de form hook en este componente
  usar un effect suando el metodo reset() para inicializarlo con los datos existentes
*/
const ModalEditForm = ({ elementToEdit, editRow, setEditContactId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    reset({
      name: elementToEdit.name,
      username: elementToEdit.username,
      email: elementToEdit.email,
      street: elementToEdit.address["street"],
      suite: elementToEdit.address["suite"],
      city: elementToEdit.address["city"],
    });
  }, [elementToEdit]);
  
  return (
    <>
      <div className={styles.container}>
        <h1>edit element</h1>
        <span className={styles.close} onClick={() => setEditContactId(null)}>
          &times;
        </span>

        <div className={styles.modal__content}>
          <AddForm
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            addContact={editRow}
          />
        </div>
      </div>
    </>
  );
};

export default ModalEditForm;
