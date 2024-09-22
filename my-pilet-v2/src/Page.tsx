import * as React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalState } from 'piral-core';
//app getdata
type CustomGlobalState = {
  selectedOption: string;
};

export default () => {
  //const state = useGlobalState();
  const state = useGlobalState() as unknown as CustomGlobalState | undefined; 
  // Ensure that state is defined before accessing selectedOption
  const selectedOption = state?.selectedOption || 'None';

  return (
    <>
      <h1>This is from pilet version 2 -- Selected Option: {selectedOption}</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat reiciendis illum qui nulla adipisci, laudantium
        vitae atque dicta blanditiis ab. Quae deleniti eum sapiente temporibus tenetur, maxime quibusdam iure nisi.
        <Link to="/page1">Go to Pilet 1</Link>
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus assumenda adipisci autem et nam quis, corporis
        maxime id? Commodi maiores eligendi similique velit porro consectetur! Voluptates quo autem omnis deserunt?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis similique veritatis nesciunt non esse commodi
        eligendi fugit officia earum distinctio. Mollitia blanditiis iusto cum pariatur quaerat fuga qui molestias
        delectus?
      </p>
    </>
  );
};
