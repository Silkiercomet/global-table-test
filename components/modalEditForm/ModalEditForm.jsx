import AddForm from "../addForm/AddForm";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import styles from "./modal.module.css";
import { editDocFormat } from "../../utils/formatingFunctions";
/*crear una segunda instancia de form hook en este componente
  usar un effect suando el metodo reset() para inicializarlo con los datos existentes
*/
const ModalEditForm = ({ elementToEdit, editRow, setEditContactId }) => {
  
  const {register,handleSubmit,formState: { errors },reset} = useForm();

  useEffect(() => {
    reset(editDocFormat(elementToEdit));
  }, [elementToEdit]);

  return (
    <>
      <div id="myModal" className={styles.modal}>
        <section className={styles.container}>
          <header className={styles.modal__header}>
            <h1 className={styles.title}>edit element</h1>
            <span
              className={styles.close}
              onClick={() => setEditContactId(null)}
            >
              &times;
            </span>
          </header>

          <div className={styles.modal__content}>
            <AddForm
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              addContact={editRow}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default ModalEditForm;
