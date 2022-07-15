import styles from "./addform.module.css";
const AddForm = ({ register, handleSubmit, errors, addContact }) => {
  return (
    <>
      <span className={styles.form__container_errors}>
        {errors.name && (
          <span className={styles.error}>{errors.name.message},</span>
        )}
        {errors.userName && (
          <span className={styles.error}>{errors.username.message},</span>
        )}
        {errors.email && (
          <span className={styles.error}>{errors.email.message},</span>
        )}
        {errors.address && (
          <span className={styles.error}>{errors.address.message}</span>
        )}
      </span>

      <form className={styles.form} onSubmit={handleSubmit(addContact)}>
        <input
          className={styles.inputfield}
          type="text"
          autoComplete="off"
          name="name"
          placeholder="add the full name"
          {...register("name", {
            required: {
              value: true,
              message: "Necesitas ingresar un nombre",
            },
            pattern: {
              value: /^[a-zA-Z ]{2,30}$/i,
              message: "Nombre invalido",
            },
          })}
        />

        <input
          className={styles.inputfield}
          type="text"
          autoComplete="off"
          name="username"
          placeholder="add the username"
          {...register("username", {
            required: {
              value: true,
              message: "Necesitas ingresar un nombre de usuario",
            },
          })}
        />

        <input
          className={styles.inputfield}
          type="text"
          autoComplete="off"
          name="email"
          placeholder="example@gmail.com"
          {...register("email", {
            required: {
              value: true,
              message: "Necesitas ingresar un email",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "El formato de email no es correcto",
            },
          })}
        />

        <input
          className={styles.inputfield}
          type="text"
          autoComplete="off"
          name="street"
          placeholder="add the street"
          {...register("street", {
            required: {
              value: true,
              message: "Necesitas ingresar una direccion",
            },
          })}
        />

        <input
          className={styles.inputfield}
          type="text"
          autoComplete="off"
          name="suite"
          placeholder="add the suite"
          {...register("suite", {
            required: {
              value: true,
              message: "Necesitas ingresar una direccion",
            },
          })}
        />

        <input
          className={styles.inputfield}
          type="text"
          autoComplete="off"
          name="city"
          placeholder="add the city"
          {...register("city", {
            required: {
              value: true,
              message: "Necesitas ingresar una direccion",
            },
          })}
        />

        <button className={styles.submitBtn} type="submit">
          submit
        </button>
        
      </form>
    </>
  );
};

export default AddForm;
