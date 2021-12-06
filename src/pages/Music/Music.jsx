import styles from './Music.css'
import AddMusic from '../../components/AddMusic/AddMusic'

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
                    <p>{suggestion.Name}</p>
                    <AddMusic suggestion={suggestion}/>
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
