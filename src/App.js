/*  import logo from  './logo.svg' */
import React, { useState } from "react";
import "./App.css";
import $ from "jquery";
import { Routes, Route, Link } from "react-router-dom";

var showQuotes;
var ajaxData;
var results;
/* var category = "happiness"; */
const KEY = "rLeSc4OwwQOU3GhPylOvsg==lIp0LQpEBDZEVE6l";

/* whole  set of categories   */

var category = [
  "age",
  "alone",
  "amazing",
  "anger",
  "attitude",
  "beauty",
  "best",
  "business",
  "change",
  "communications",
  "cool",
  "courage",
  "dating",
  "death",
  "design",
  "dreams",
  "education",
  "experience",
  "family",
  "famous",
  "fear",
  "fitness",
  "food",
  "freedom",
  "friendship",
  "funny",
  "future",
  "good",
  "great",
  "happiness",
  "health",
  "history",
  "home",
  "hope",
  "humor",
  "imagination",
  "inspirational",
  "intelligence",
  "jealousy",
  "knowledge",
  "leadership",
  "learning",
  "legal",
  "life",
  "love",
  "men",
  "money",
  "morning",
  "movies",
  "success",
];

function Head() {
  return (
    <div className="head-container">
      <h1 className="title">wise quotes </h1>
      <h4>wise sayings and Aphorisms </h4>
      <h3>Topics</h3>
      <div className="menu-topics">
        <Link
          to="succes"
          style={{ textDecoration: "none" }}
          className="topic-item"
        >
          Success
        </Link>
        <Link
          to="inspiration"
          style={{ textDecoration: "none" }}
          className="topic-item"
        >
          Inspiration
        </Link>
        <Link
          to="courage"
          style={{ textDecoration: "none" }}
          className="topic-item"
        >
          Courage
        </Link>
      </div>
    </div>
  );
}

function Success() {
  const [quotation, setQuotation] = useState(
    "At a certain point, a man has gotta stand on his toes "
  );
  const [author, setAuthor] = useState("Jason Statham");
  const [Category, setCategory] = useState("Success");

  function getData() {
    function fetchQuotesFromApi() {
      $.ajax({
        method: "GET",
        url: "https://api.api-ninjas.com/v1/quotes?category=" + category[49],
        headers: { "X-Api-Key": KEY },
        contentType: "application/json",
        success: function (result) {
          results = result[0].quote;

          setQuotation(results);
          setAuthor(result[0].author);
          setCategory(result[0].category);
        },
        error: function ajaxError(jqXHR) {
          console.error("Error: ", jqXHR.responseText);
        },
      });
    }

    fetchQuotesFromApi();
  }
  return (
    <div className="body">
      <div className="author-block">
        <p className="author-title">AUTHOR</p>
        <p className="author-name">{author}</p>
      </div>

      <div className="category-block">
        <p className="category-title">CATEGORY</p>

        <p className="category-name">{Category}</p>
      </div>
      <div className="quote-block">
        <p className="quote-title">QUOTE</p>

        <p className="quotes">{quotation}</p>
      </div>
      <p className="more-quotes">More Quotes</p>

      <button className="next-quote-button" onClick={getData}>
        Next Quote
      </button>
    </div>
  );
}

function Inspiration() {
  const [quotation, setQuotation] = useState(
    " A man needs inspiration in Life  "
  );
  const [author, setAuthor] = useState("christiano Ronaldo");
  const [Category, setCategory] = useState("Inspiration");

  function getInspirationData() {
    function fetchQuotesFromApi() {
      $.ajax({
        method: "GET",
        url: "https://api.api-ninjas.com/v1/quotes?category=" + category[36],
        headers: { "X-Api-Key": KEY },
        contentType: "application/json",
        success: function (result) {
          results = result[0].quote;

          setQuotation(results);
          setAuthor(result[0].author);
          setCategory(result[0].category);
        },
        error: function ajaxError(jqXHR) {
          console.error("Error: ", jqXHR.responseText);
        },
      });
    }

    fetchQuotesFromApi();
  }
  return <div>
     <div className="body">
      <div className="author-block">
        <p className="author-title">AUTHOR</p>
        <p className="author-name">{author}</p>
      </div>

      <div className="category-block">
        <p className="category-title">CATEGORY</p>

        <p className="category-name">{Category}</p>
      </div>
      <div className="quote-block">
        <p className="quote-title">QUOTE</p>

        <p className="quotes">{quotation}</p>
      </div>
      <p className="more-quotes">More Quotes</p>

      <button className="next-quote-button" onClick={getInspirationData}>
        Next Quote
      </button>
    </div>
  </div>;
}

function Courage() {
  const [quotation, setQuotation] = useState(
    "You need to fight the Lion"
  );
  const [author, setAuthor] = useState("Lisandro Martinez");
  const [Category, setCategory] = useState("Courage");

  function getCourageData() {
    function fetchQuotesFromApi() {
      $.ajax({
        method: "GET",
        url: "https://api.api-ninjas.com/v1/quotes?category=" + category[11],
        headers: { "X-Api-Key": KEY },
        contentType: "application/json",
        success: function (result) {
          results = result[0].quote;

          setQuotation(results);
          setAuthor(result[0].author);
          setCategory(result[0].category);
        },
        error: function ajaxError(jqXHR) {
          console.error("Error: ", jqXHR.responseText);
        },
      });
    }

    fetchQuotesFromApi();
  }
  return <div>
     <div className="body">
      <div className="author-block">
        <p className="author-title">AUTHOR</p>
        <p className="author-name">{author}</p>
      </div>

      <div className="category-block">
        <p className="category-title">CATEGORY</p>

        <p className="category-name">{Category}</p>
      </div>
      <div className="quote-block">
        <p className="quote-title">QUOTE</p>

        <p className="quotes">{quotation}</p>
      </div>
      <p className="more-quotes">More Quotes</p>

      <button className="next-quote-button" onClick={getCourageData}>
        Next Quote
      </button>
    </div>
  </div>;
}

export default function App() {
  return (
    <div className="app-container">
      <Head />

      <Routes>
        <Route path="/" element={<Success />}></Route>
        <Route path="/succes" element={<Success />}>
          Success
        </Route>
        <Route path="/inspiration" element={<Inspiration />}>
          Inspiration
        </Route>
        <Route path="/courage" element={<Courage />}>
          Courage
        </Route>
      </Routes>

      <div className="footer">
        <div>
          <p>An App created by Jeff Veron using React </p>
        </div>
        <div>
          <a href="mailto:57jeff.veron@gmail.com">57jeff.veron@gmail.com</a>
        </div>
      </div>
    </div>
  );
}

/* export default App; */
