import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1 className={styles.title}>
          RatingFinance
        </h1>
        <div>
          
        </div>
      </div>

      <div className={styles.center}>
      <div className={styles.grid}>
        <a
          href="/protocol"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Uniswap <span>-&gt;</span>
          </h2>
          <p>Description</p>
        </a>

        <a
          href="/protocol"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Uniswap <span>-&gt;</span>
          </h2>
          <p>Description</p>
        </a>

        <a
          href="/protocol"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Uniswap <span>-&gt;</span>
          </h2>
          <p>Description</p>
        </a>

        <a
          href="/protocol"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Uniswap <span>-&gt;</span>
          </h2>
          <p>Description</p>
        </a>
      </div>
      </div>

      
    </main>
  )
}
