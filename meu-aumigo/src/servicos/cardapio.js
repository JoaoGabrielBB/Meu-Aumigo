import axios from "axios"

axios.get("http://localhost:8000/cachorros")
  .then(res => console.log(res.data))