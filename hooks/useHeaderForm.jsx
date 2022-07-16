import {useState} from "react"

const useHeaderForm = () => {
const [add, setAdd] = useState(true);
const [filter, setFilter] = useState(true);

const openAddForm = () =>  {setAdd(!add), setFilter(true)}
const openFilterForm = () =>  {setFilter(!filter), setAdd(true)}

const handleOpenAndClose = (event) => {
    switch (event) {
        case "add":
            openAddForm()
            break;
        case "filter":
            openFilterForm()
            break;
    
        default:
            break;
    }
}


  return {add, filter, handleOpenAndClose}
}

export default useHeaderForm