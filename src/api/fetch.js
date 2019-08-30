import { products } from "./queries";

const fetchData = () => {
  const query = products;

  fetch("https://nordic-shop-api.herokuapp.com/", {
    credentials: "omit",
    headers: {
      accept: "*/*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/json"
    },
    body: JSON.stringify({
      variables: {},
      query: query
    }),
    method: "POST",
    mode: "cors"
  })
    .then(response => response.json())
    .then(console.log);
};

export default fetchData;
