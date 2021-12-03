import styles from './Music.css'
import React, { useState, useEffect } from 'react'



const Music = ({ user, suggestions }) => {
const [musicSuggestions, setMusicSuggestions] = useState([])

    useEffect(()=> {
        setMusicSuggestions(suggestions)
    }, [])

    return (
        <>
            <main className={styles.container}>
                <h1>
                    Welcome to the Music page
                </h1>
            </main>
            <body>
            {suggestions?.Similar?.Results.map(suggestion =>
            <>
                <div>
                    <p>{suggestion.Name}</p>
                </div>
            </>  
            )}
            </body>
        </>
    )
}


export default Music


//map the result to a div
//each div, map info inside the result (name, descriptions)[suggestionData.name]