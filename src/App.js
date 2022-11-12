import React from 'react';
import { useState } from 'react';
import data from './data';
import SingleQuestion from './Question'

function App() {
  const [question,setQuestion]=useState(data);
  return (
     <div className="container">
      <h3>Question and answer about login</h3>
      <section className="info">
    {    question.map((question)=>{
          return <SingleQuestion key={question.id} {...question}/>
        })}
      </section>
     </div>
  );
}

export default App;
