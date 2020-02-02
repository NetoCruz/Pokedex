/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import '../assets/styles/pokemon.scss';

function Pokemon() {

  const [result, setResult] = React.useState([]);
  const [poke, setPoke] = React.useState([]);
  //const [loading, setLoading] = React.useState('false');
  const [load, setLoad] = React.useState('true');

  const arr = [];
  useEffect(() => {
    //setLoading('true');
    fetch('https:pokeapi.co/api/v2/pokemon?limit=32')
      .then((response) => response.json())
      .then((data) => setResult(
        data.results.map((item) => {
          //console.log(item.url);
          fetch(item.url)
            .then((response) => response.json())
            .then((allpokemon) => arr.push(allpokemon));
          setPoke(arr);
          //setLoad('false');
          return item.url;
        }),
      ));
  }, []);

  setTimeout(() => {
    setLoad(false);
  }, 2000);
  console.log(poke);
  return (
    <>
      <div className='pokegallery'>

        {/* <img src={data.sprites.front_default} alt='pokeimg' /> */}
        { load ? (
          <p>Loading</p>
        ) : (
          poke.map((img) => (
            <div>
              <div className='card' style={{ width: '10rem', height: '15rem', backgroundColor: '#F0F0C9' }}>
                <img className='card-img-top' src={img.sprites.front_default} alt='pokemon' />
                <div className='card-body'>
                  <h5 className='card-title'>{img.name}</h5>
                  <h6>{img.types[0].type.name}</h6>
                </div>
              </div>
            </div>
            // <li className='cards__item'>
            //   <div className='card'>
            //     <div>
            //       <img className='card-img-top' src={img.sprites.front_default} alt='pokemon' />
            //     </div>
            //     <div className='card__content'>
            //       <div className='card__title'>{img.name}</div>
            //       <p className='card__text'>
            //         { img.types[0].type.name }
            //       </p>
            //     </div>
            //   </div>
            // </li>
          ))
        )}
        {/* <button
          onClick={handleClick}
        >
          { load ? 'Close Additional Info' : 'More Info' }
        </button> */}
      </div>
    </>
  );
}

export default Pokemon;
