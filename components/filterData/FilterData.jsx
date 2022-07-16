import { useState, useEffect } from "react";
import styles from "./filter.module.css"
const FilterData = ({ display, setDisplay, data }) => {
  const [filterByName, setFilterByName] = useState("");
  const [filterByEmail, setFilterByEmail] = useState("");
  const [filterByCity, setFilterByCity] = useState("");

  useEffect(() => {

    if (filterByName) {
      const dataByName = display.filter((e) =>
        e.name.toLowerCase().includes(filterByName)
      );
      return setDisplay(dataByName);
    }

    if (filterByEmail) {
      const dataByEmail = display.filter((e) =>
        e.email.toLowerCase().includes(filterByEmail)
      );
      return setDisplay(dataByEmail);
    }

    if (filterByCity) {
      const dataByCity = display.filter((e) =>
        e.address.city.toLowerCase().includes(filterByCity)
      );
      return setDisplay(dataByCity);
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
