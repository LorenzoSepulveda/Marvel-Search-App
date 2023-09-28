import React, {useState, useEffect} from 'react'

//Importamos los hooks
import { useParams } from 'react-router-dom'

import { fetchHero } from '../utils/utils';

export default function HeroDetails() {

  let {id} = useParams();

  const [hero, setHero] = useState();

  let name;
  let description;
  let thumbnailPath;
  let thumbnailExtension;
  let thumbnailUrl;
  let series;
  let comics;

  useEffect(() => {
    fetchHero(id)
      .then((data) => setHero(data))
      .catch((err) => console.error(err));
  }, []);

  if (hero) {
    name = hero.data.results[0].name;
    description = hero.data.results[0].description;
    thumbnailPath = hero.data.results[0].thumbnail.path;
    thumbnailExtension = hero.data.results[0].thumbnail.extension;
    thumbnailUrl = `${thumbnailPath}.${thumbnailExtension}`;
    series = hero.data.results[0].series.items;
    comics = hero.data.results[0].comics.items;
  }

  if(!hero) return;

  return (
    <div className="container large">
      <div className="hero__details-container">
        <img src={thumbnailUrl} alt="hero image full size" />
        <div className="hero__details">
          <h4 className='desc-title'>Name</h4>
          <p className='hero-desc'>{name}</p>
          {description ? (
            <>
              <h4 className='desc-title'>Description</h4>
              <p className='hero-desc'>{description}</p>
            </>
          ) : null}
          <div className="hero__series">
            <h4 className='desc-title'>Series</h4>
            <ul className='hero-desc'>
              {series
                ? series.map((title) => (
                    <li key={Math.random() * 1000}>{title.name}</li>
                  ))
                : null}
            </ul>
          </div>
          <div className="hero__comics">
            <h4 className='desc-title'>Comics</h4>
            <ul className='hero-desc'>
              {comics
                ? comics.map((stories) => (
                    <li key={Math.random() * 1000}>{stories.name}</li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}