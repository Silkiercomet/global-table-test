export const defaultReset = {name: "",username: "",email: "",street: "",suite: "",city: "",}

export const createNewDoc = (content = defaultReset) => ({
    name:content.name,
    username:content.username,
    email:content.email,
    address:{
      street:content.street,
      suite: content.suite,
      city: content.city
      }
    }) 
    export const editDocFormat = (content) => ({
        name: content.name,
        username: content.username,
        email: content.email,
        street: content.address["street"],
        suite: content.address["suite"],
        city: content.address["city"],
      }) 