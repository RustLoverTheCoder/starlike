import Cookies from "js-cookie";

export const request = async ({
  data,
  method,
  url,
}: {
  data: any;
  method: "GET" | "POST";
  url: string;
}) => {
  const token = Cookies.get("token");

  const headers: any = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  let res;
  if (method === "POST") {
    try {
      res = await fetch("http://localhost:3000" + url, {
        method: method,
        headers: headers,
        body: JSON.stringify(data),
      }).then((res) => res.json());
    } catch (e) {
      console.log(e);
    }
  } else {
    const urlParams = new URLSearchParams(data).toString();
    const newUrl = `http://localhost:3000${url}?${urlParams}`;
    try {
      res = await fetch(newUrl, {
        method: method,
        headers: headers,
      }).then((res) => res.json());
    } catch (e) {
      console.log(e);
    }
  }
  return res;
};
