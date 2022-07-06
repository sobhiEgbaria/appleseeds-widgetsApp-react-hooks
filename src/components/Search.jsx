import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Search.css";

const Search = () => {
  const [inputTerm, setInputTerm] = useState("react js");
  const [data, setData] = useState([]);

  const onSearchChange = (inputTerm) => {
    setInputTerm(inputTerm);
  };

  console.log(data);

  useEffect(() => {
    const apiSearch = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: inputTerm,
        },
      });
      setData(data.query.search);
    };
    const timerId = setTimeout(() => {
      apiSearch();
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [inputTerm]);

  const dataRender = data.map((item) => {
    return (
      <div key={item.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${item.pageid}`}
            className="ui button"
          >
            Visit
          </a>
        </div>
        <div className="content">
          <div className="header title">{item.title}</div>
          <span
            className="text"
            dangerouslySetInnerHTML={{ __html: item.snippet }}
          ></span>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="ui form">
        <div className="ui field">
          <label>Enter Search Term</label>
          <input
            value={inputTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            type="text"
            className="input"
            placeholder="Enter her"
          />
        </div>
        <div className="ui celled list">{dataRender}</div>
      </div>
    </>
  );
};

export default Search;
