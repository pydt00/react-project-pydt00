import styles from "./ErrorPage.module.css"

export default function ErrorPage() {
    return (
        <div className={styles.errorContainer}>
            <h1 className={styles.errorLabel}>Error</h1>
            
            <img 
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.8ksDhaI4ydsL9sAJWsiYQgHaEM%3Fpid%3DApi&f=1&ipt=0cf61f2e6b085e9bdce2fab7becd03977e4de1e93f73f60a669d549dd39ac8a5&ipo=images" 
                alt="Chyba při načítání aplikace" 
                className={styles.errorImage} 
            />
        </div>
    )
}