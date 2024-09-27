// import axios from "axios";
import { useState, useEffect } from "react";
import CardProduct from "./components/cardProduct";

function App() {
  const [coffee, setCoffee] = useState(null);

  useEffect(() => {
    try {
      fetch("https://react-mini-projects-api.classbon.com/FastFood/list")
        .then((response) => response.json())
        .then((json) => setCoffee(json));
    } catch (error) {
      console.error("خطا در دریافت داده:", error);
    }
  }, []);

  return (
    <div className="container mx-auto mt-2">
      {coffee ? (
        <div className="grid grid-cols-5 gap-4">
          <CardProduct info={coffee} />
          <CardProduct info={coffee} />
          <CardProduct info={coffee} />
          <CardProduct info={coffee} />
          <CardProduct info={coffee} />
          <CardProduct info={coffee} />
          <CardProduct info={coffee} />
        </div>
      ) : (
        <h2 className="text-2xl">در حال بارگذاری...</h2>
      )}
    </div>
  );
}

export default App;
