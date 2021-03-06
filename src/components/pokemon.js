/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import '../assets/styles/pokemon.scss';
import Skeleton from './Skeleton';
import Modal from './Modal';

function Pokemon(props) {

  const [result, setResult] = React.useState([]);
  const [poke, setPoke] = React.useState([]);
  const [load, setLoad] = React.useState('true');

  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);

  const [show, setShow] = React.useState(false);
  const [id, setId] = React.useState('');

  const [modal, setModal] = React.useState();
  const [isModalOpen, toggleModal] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    const results = searchResults.filter((person) => person.name.toLowerCase().includes(searchTerm));
    setSearchResults(results);
    if (searchTerm === '') {
      setSearchResults(poke);
    }
  }, [searchTerm]);

  useEffect(() => {
    console.log('kolo');
  }, [show]);

  const arr = [];
  useEffect(() => {
    //setLoading('true');

    fetch('https://pokeapi.co/api/v2/pokemon/?limit=152')
      .then((response) => response.json())
      .then((data) => setResult(
        data.results.map((item) => {
          //console.log(item.url);
          fetch(item.url)
            .then((response) => response.json())
            .then((allpokemon) => arr.push(allpokemon));
          setSearchResults(arr);
          setPoke(arr);
          //setLoad('false');
          return item.url;
        }),
      ));
  }, []);

  setTimeout(() => {
    setLoad(false);
  }, 3500);
  console.log(props.tema.head);
  return (
    <>
    
      <div className='search'>
        <input
          className='searchTerm'
          type='text'
          placeholder="Search by pokemon's name"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <div className='pokegallery'>
        
        {/* <img src={data.sprites.front_default} alt='pokeimg' /> */}
        { load ? (
          <Skeleton />
        ) : (

          searchResults.map((img, i) => (
            
            <div id={i + 1} key={i}>
              
              <div onClick={() => setModal(i)} className='card' style={{ width: '10rem', height: '15rem', backgroundColor:props.tema.card, cursor: 'pointer' }}>
                <img className='card-img-top' src={img.sprites.front_default} alt='pokemon' />
                <div className='card-body'>
                  <h5 className='card-title'>{img.name}</h5>
                  <h6>{img.types[0].type.name}</h6>
                </div>
              </div>
             
              {/* <Modal open={i === modal} {...{ modal, setModal }}>
             <h2>{img.name}</h2>
          </Modal> */}

              <Modal {...{ modal, setModal }} isOpen={i === modal} toggle={setModal}>
                <h2>{img.name}</h2>
                <img src={img.sprites.front_default} alt='pokemon' style={{ height: '200px' }} />
                <p>
                type:
                  {img.types[0].type.name}
                </p>
                <p>
                abilities:
                  {img.abilities[0].ability.name}
                </p>
                <p>
                height:
                  {img.height}
                </p>
                <p>
                weight:
                  {img.weight}
                </p>
                <button onClick={() => toggleModal(false)}>cerrar</button>

              </Modal>

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

        {/* <ul>
          {searchResults.map((img) => (
            <div>
              <div className='card' style={{ width: '10rem', height: '15rem', backgroundColor: '#F0F0C9' }}>
                <img className='card-img-top' src={img.sprites.front_default} alt='pokemon' />
                <div className='card-body'>
                  <h5 className='card-title'>{img.name}</h5>
                  <h6>{img.types[0].type.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </ul> */}

      </div>
      
    </>
  );
}

export default Pokemon;
