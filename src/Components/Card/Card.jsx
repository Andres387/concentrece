import React from 'react';

const Card = ({ id, onClick }) => (
  <div onClick={() => onClick(id)} className="carta-box">
    <div className="carta">
      <div className="cara detras">
        <img src={`./resources/${id % 8 + 1}.jpg`} alt={`Card ${id % 8 + 1}`} />
      </div>
      <div className="cara">
        <img src="./resources/moon.jpg" alt="Moon" />
      </div>
    </div>
  </div>
);

const App = () => {
  const destape = (id) => {
    // Handle the click event here
    console.log(`Card clicked: ${id}`);
  };

  return (
    <div>
      <div className="row">
        {[...Array(16).keys()].map((index) => (
          <Card key={index} id={index} onClick={destape} />
        ))}
      </div>
    </div>
  );
};

export default App; 