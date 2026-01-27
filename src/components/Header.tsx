import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoBadge}>
          <span className={styles.logoText}>DIVE CONF 26</span>
        </div>
        
        <div className={styles.actions}>
          <button className={styles.actionButton}>INSCREVER-SE</button>
          <button className={styles.actionButton}>PATROCINAR</button>
        </div>
      </div>
    </header>
  )
}

