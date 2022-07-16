import { useState, useEffect } from "react";
import styles from "./filter.module.css";
const FilterData = ({ setDisplay, data }) => {
  const [filterByName, setFilterByName] = useState("");
  const [filterByEmail, setFilterByEmail] = useState("");
  const [filterByCity, setFilterByCity] = useState("");

  useEffect(() => {
    let temporalData = data
      .filter((element) =>
        filterByName !== ""
          ? element.name.toLowerCase().includes(filterByName)
          : element
      )
      .filter((element) =>
        filterByEmail !== ""
          ? element.email.toLowerCase().includes(filterByEmail)
          : element
      )
      .filter((element) =>
        filterByCity !== ""
          ? element.address.city.toLowerCase().includes(filterByCity)
          : element
      );

    if (filterByName || filterByEmail || filterByCity) {
      setDisplay(temporalData);
      return;
    }

    setDisplay(data);
  }, [filterByName, filterByEmail, filterByCity]);

  return (
    <>
      <div className={styles.container}>
        <input
          className={styles.inputfield}
          type="text"
          placeholder="filter by name"
          value={filterByName}
          onChange={(e) => setFilterByName(e.target.value)}
        ></input>

        <input
          className={styles.inputfield}
          type="text"
          placeholder="filter by email"
          value={filterByEmail}
          onChange={(e) => setFilterByEmail(e.target.value)}
        ></input>

        <input
          className={styles.inputfield}
          type="text"
          placeholder="filter by city"
          value={filterByCity}
          onChange={(e) => setFilterByCity(e.target.value)}
        ></input>
      </div>
    </>
  );
};

export default FilterData;
