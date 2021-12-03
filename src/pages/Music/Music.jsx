import styles from './Music.css'

const Music = ({ user, suggestionData }) => {

    return (
        <>
            <main className={styles.container}>
                <h1>
                    Welcome to the Music page
                </h1>
            </main>
            <body>

            </body>
        </>
    )
}

export default Music

//pass the data to search from to this file 
//set the state of this page to equal the suggestion data
//map the result to a div
//each div, map info inside the result (name, descriptions)[suggestionData.name]