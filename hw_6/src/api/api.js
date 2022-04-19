import Axios from "axios";

export const API_URL =
  "https://623ce73f7efb5abea688639c.mockapi.io/api1/contacts";

export default Axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(),
});
