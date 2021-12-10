import React from 'react';
import { useLocation } from 'react-router-dom'
import Music from '../Music/Music';
import './Details.css'

const Details = () => {
const location = useLocation()
const suggestion = location.state 

  return (
      <>
        <main>
          <body className='contents'>
          <p>Artist Name: {suggestion.Name}</p>
            <p className='type'>
              Type: {suggestion.Type}
            </p>
            <p className='desc'>
              Description: {suggestion.wTeaser}
            </p>
            <p className='wiki'>
              Wikipedia Description: <a href={suggestion.wUrl}>View wikipedia page</a>
            </p>
            <div className='youtubec'>
              <p>Youtube: </p>
              <iframe width="420" height="315" src={suggestion.yUrl} />
            </div>
          </body>
        </main>
      </>
  )
      }

export default Details


