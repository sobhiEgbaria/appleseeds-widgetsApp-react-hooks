import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "what is html ?",
    content: "HTML, in full hypertext markup language",
  },

  {
    title: "what is css ?",
    content:
      "CSS (Cascading Style Sheets) is one of two of the core technologies for building Web pages",
  },

  {
    title: "what is javascript ?",
    content:
      "JavaScript is a text-based programming language used both on the client-side and server-side",
  },

  {
    title: "what is react ?",
    content:
      "React is a JavaScript library developed by Facebook,  Its aim is to allow developers to easily create fast user interfaces for websites and applications alike",
  },
];

export default () => {
  return (
    <>
      <Accordion items={items} />
    </>
  );
};
