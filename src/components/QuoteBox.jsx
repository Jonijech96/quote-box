import { Quote } from "./Quote";
import quoteItems from "../quotes.json/"
import "./QuoteBox.css"
import { useState } from "react";


export function QuoteBox() {
  const [quoteIndex, setQuoteIndex] = useState(Math.floor(Math.random() * quoteItems.length));
  
  return(
    <div className="quote-box ">
      <Quote quote={quoteItems[quoteIndex].quote} author={quoteItems[quoteIndex].author} setIndex={setQuoteIndex} size={quoteItems.length}/>
    </div>
  );
};


