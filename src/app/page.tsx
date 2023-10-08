import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';




export default function Page() {
  let protocols = [{name: "Uniswap", description:"Description"}, 
                  {name: "Aave", description:"Description"},
                  {name: "Protocol 3", description:"Description"},
                  {name: "Protocol 4", description:"Description"},
                  {name: "Protocol 5", description:"Description"}]

  return (
    
        
    <main className={styles.main}>
      <div className={styles.center}>
        <h1 className={styles.title}>
          RatingFinance
        </h1>
      </div>

      <div className={styles.center}>
      <h3 className={styles.description}>
          [The Dapps Review Platform]
      </h3>
      </div>
<div className={styles.card1}>
<div className={styles.center}>
      <h2>
          Click on a Protocol to read verified reviews, or to submit a review:
      </h2>
      </div>
      <div className={styles.grid}>
      
      
      {protocols.map(ptcl => (
         <Link
         href={{ pathname: '/protocol', query: { name: ptcl.name } }}
         className={styles.card}
         rel="noopener noreferrer"
       >
         <h2>
           {ptcl.name} <span>-&gt;</span>
         </h2>
         <p>{ptcl.description}</p>
       </Link>
      ))}
       </div>

</div>
      
        
     
     

      
    </main>
   
  )
}
