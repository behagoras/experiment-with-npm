import {axios, lodash as _} from "experiment";

console.log(_.isEmpty({})); // Debería imprimir true


axios.get("https://api.github.com")
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

