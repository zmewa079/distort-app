import React from 'react';
import { useLocation } from 'react-router-dom'
import Music from '../Music/Music';

const Details = () => {
const location = useLocation()
const suggestion = location.state 

  return (
      <>
        <main>
          <body>
          <p>Artist Name: {suggestion.Name}</p>
            <p>Type: {suggestion.Type}</p>
            <p>Description: {suggestion.wTeaser}</p>
            <p>Wikipedia Description: <a href={suggestion.wUrl}>View wikipedia page</a></p>
            <p>Youtube: <iframe width="420" height="315" src={suggestion.yUrl} /></p>
          </body>
        </main>
      </>
  )
            }

export default Details


