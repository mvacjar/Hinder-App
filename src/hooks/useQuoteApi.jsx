import { useState, useEffect } from "react";

export default function useQuoteApi() {
  const [quote, setQuote] = useState(null);
  useEffect(() => {
    async function fetchData() {
      fetch("https://type.fit/api/quotes")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          const randomQuote = Math.floor(Math.random() * data.length);
          const newQuote = data[randomQuote].text;
          if (newQuote.length > 70) {
            fetchData();
          } else {
            setQuote(newQuote);
          }
        });
    }
    fetchData();
  }, []);

  return { quote };
}
