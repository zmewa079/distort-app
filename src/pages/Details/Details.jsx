import React from 'react';
import { useLocation } from 'react-router-dom'
import Music from '../Music/Music';

const Details = () => {
const location = useLocation()
const suggestion = location.state 

  return (
      <>
          <main >
            {suggestion?.Name}
            {suggestion.Type}
            {suggestion.wTeaser}
            {suggestion.wUrl}
            {suggestion.yUrl}
          </main>
          <body>
    
          </body>
      </>
  )
            }

export default Details


