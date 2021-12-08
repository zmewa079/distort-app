import styles from './Movies.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import SearchForm from '../../components/SearchForm/SearchForm'

const Movies = ({ user, suggestions }) => {
    return (
        <>
            <main className={styles.container}>
                <h1>
                    Welcome to the movies page
                </h1>
            </main>
            <body>
                <SearchForm suggestions={suggestions} />
            </body>
        </>
    )
}

export default Movies