import React, { useState } from 'react'
import Container from "../components/Container";
import SearchBar from '../components/SearchBar';
import Grid from '../components/Grid'; 
import Card from '../components/Card';
import {useTypewriter,Cursor} from 'react-simple-typewriter';


const IMAGE_SIZE = 'portrait_uncanny'

export default function Home() {
  const [heroes, setHeroes] = useState([]);
  const [text] = useTypewriter({
    words: ['Investigate Marvel heroes','Know more about your favourite characters'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80
  });
  let cards;

  if (heroes) {
    cards = heroes.map((hero) =>(
      <Card 
      name={hero.name} 
      id={hero.id} 
      key={hero.id} 
      thumbnail={`${hero.thumbnail.path}/${IMAGE_SIZE}.${hero.thumbnail.extension}`}
      />
    ))
  }

  return (
    <Container>
        <h1 className='title-1'>{text}
          <span style={{color: 'red'}}><Cursor/></span>
        </h1>
        <SearchBar setter={setHeroes}/>
        <Grid>
            {cards ? cards: ""}
        </Grid>
    </Container>
  )
}
