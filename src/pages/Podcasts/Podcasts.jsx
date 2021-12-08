import styles from './Podcasts.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import SearchForm from '../../components/SearchForm/SearchForm'

const Podcasts = ({ user, suggestions }) => {
    return (
        <>
            <main className={styles.container}>
                <h1>
                    Welcome to the Podcasts page
                </h1>
            </main>
            <body>
                <SearchForm suggestions={suggestions} />
            </body>
        </>
    )
}

export default Podcasts