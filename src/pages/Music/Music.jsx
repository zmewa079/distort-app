import styles from './Music.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import SearchForm from '../../components/SearchForm/SearchForm'
import { Link } from 'react-router-dom'

const Music = ({ props, suggestions }) => {

    var str = "Tupac Amaru Shakur ( TOO-pahk shə-KOOR; born Lesane Parish Crooks, June 16, 1971 – September 13, 1996), better known by his stage name 2Pac and by his alias Makaveli, was an American rapper, songwriter, and actor. He is widely considered to be one of the most influential rappers of all time. Much of Shakur's work has been noted for addressing contemporary social issues that plagued inner cities, and he has often been considered a symbol of activism against inequality.Shakur was born in Manhattan...";

    var res = str.substring(0,1000);

    return (
        <div >
            <main class='mainContainer'>
                <h1>
                    Welcome to the Music page
                </h1>
                <SearchForm suggestions={suggestions} />
            </main>
            <body className='musicContainer'>
                <div class='finalbox'>
                    
                </div>
                <div class='testBox'>
                    <h3 class='testArtist'>
                        Tupac
                    </h3>
                    
                    <a 
                        class='testYoutube'
                        href="https://www.youtube.com/results?search_query=tupac" target='_blank'>Link to Youtube
                    </a>
                    <p class='testDescription'>
                        {res}...
                    </p>
                    <br />
                    <button class='testButton'>Add to list</button>
                </div>
            </body>
        </div>
    )
}

export default Music