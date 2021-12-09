import styles from './Music.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import SearchForm from '../../components/SearchForm/SearchForm'

const Music = ({ user, suggestions }) => {
    return (
        <>
            <main className={styles.container}>
                <h1>
                    Welcome to the Music page
                </h1>
            </main>
            <body>

                <div>
                    <SearchForm suggestions={suggestions} />
                </div>
            </body>
        </>
    )
}

export default Music



