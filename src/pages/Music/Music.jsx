import styles from './Music.css'
import AddMusic from '../../components/AddSuggestion/AddSuggestion'
import { Link } from 'react-router-dom'

const Music = ({ user, suggestions }) => {
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
                    <p></p>
                    <AddMusic suggestion={suggestion}/>
                    <h2>{<Link to="/details" state={suggestion}>{suggestion.Name}</Link>}</h2>
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
