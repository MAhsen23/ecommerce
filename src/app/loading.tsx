import React from 'react'
import styles from '@/styles/loading.module.css'

const loading = () => {
    return (
        <main className="flex items-center justify-center h-screen">
            <div className={styles.spinner}></div>
        </main>
    )
}

export default loading