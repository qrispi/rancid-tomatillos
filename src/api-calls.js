export default (path) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${path}`)
      .then(response => {
        if(!response.ok) {
          throw new Error(response.status)
        } else {
          return response.json();
        }
      }
    )
}