
// import React, { useState } from "react";

// import "./styles.css";
// const [number1, setNumber1] = useState(0);
//     const [number2, setNumber2] = useState(0);
//     const [total, settotal] = useState(number1 + number2);
// function addnum() {
//     settotal(number1 + number2);
// }

// const Stats = (props) => {
//     const { posts } = props;
//     return (
//         {posts.map((post) => (
//         <div className="App">
//       <h1>Adding Two Numbers</h1>

//       <div className="number-inputs" key={post.id}>
//         <input
//           type="number"
//           placeholder="0"
//           value={post.oxy}
          
//           onChange={(e) => setNumber1(+e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="0"
//           value={post.oxy}
          
//           onChange={(e) => setNumber2(+e.target.value)}
//         />
//       </div>

//       <button onMouseOver={addnum}>Add Them!</button>

//       <h2>{total}</h2>

     
//     </div>
//    ))} 
 
//    );
  
// }
// export default Stats;

import React, { useState } from "react";

import "./styles.css";

const Stats = () => {
    
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [total, settotal] = useState(number1 + number2);
    function addnum() {
        settotal(number1 + number2);
    }

  return (
    
    <div className="App">
      <h1>Adding Two Numbers</h1>
      

      <div className="number-inputs">
        <input
          type="number"
          placeholder="0"
          value={number1}
          onChange={(e) => setNumber1(+e.target.value)}
        />
        <input
          type="number"
          placeholder="0"
          value={number2}
          onChange={(e) => setNumber2(+e.target.value)}
        />
      </div>

      <button onMouseOver={addnum}>Add Them!</button>

      <h2>{total}</h2>

      
    </div>
  );
}
export default Stats;
