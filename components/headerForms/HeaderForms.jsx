import AddForm from "../addForm/AddForm";
import FilterData from "../filterData/FilterData";
import useHeaderForm from "../../hooks/useHeaderForm"
import styles from "./headerform.module.css"
const HeaderForms = ({setDisplay,data,addContact,register,handleSubmit,errors}) => {
  const {add, filter, handleOpenAndClose} = useHeaderForm()
  
  return (
    <div className="form__container">
        <button
          className={styles.addBtn}
          onClick={() => {
            handleOpenAndClose("add")
          }}
        >
          {add ? "add +" : "cancel"}
        </button>
        <button
          className={styles.addBtn}
          onClick={() => {
            handleOpenAndClose("filter")
          }}
        >
          filter
        </button>

        <article style={{ display: add ? "none" : "block" }}>
          <AddForm
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            addContact={addContact}
          />
        </article>
        
        <article style={{ display: filter ? "none" : "block" }}>
          <FilterData setDisplay={setDisplay} data={data} />
        </article>
      </div>
  )
}

export default HeaderForms
