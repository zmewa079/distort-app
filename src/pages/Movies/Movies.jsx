import styles from './Movies.css'

const Movies = ({ user }) => {
    return (
        <>
            <main className={styles.container}>
                <h1>
                    hello, {user ? user.name : "friend"}
                </h1>
            </main>
            <body>

            </body>
        </>
    )
}

export default Movies