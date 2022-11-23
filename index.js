const submitData = (UserName,UserEmail)=>{
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: UserName,
            email: UserEmail,
        }),
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
        const id = object.id
        document.querySelector("body").append(id)
    })
    .catch(function (error) {
        const errorMesaage = error.message;
        document.querySelector("body").append(errorMesaage)
      });
}

// Add your code here
// Add your code here
