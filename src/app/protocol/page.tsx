"use client";
import { useSearchParams } from 'next/navigation'
import styles from '../page.module.css'
import ReactStars from 'react-stars'
import {useState} from "react";
import Modal from 'react-modal';



export default function Page(){
  const searchParams = useSearchParams()
  const [showModal, setShowModal] = useState(false);
  const [showIPFSModal, setShowIPFSModal] = useState(false);

  const [reviewInput, setReviewInput] = useState("");
  const name = searchParams.get('name')
  let reviews = [{review: "Uniswap is gas Uniswap is gas Uniswap is gas Uniswap is gas Uniswap is gas Uniswap is gas  Uniswap is gas"},
                {review: "Uniswap is aweful"},
                { review: "Uniswap is a mediumly annoying protocol"}]
  let stars = 4.2;
  let input_stars = 4.2;
   
function switchModals(){
  setShowModal(false)
  setShowIPFSModal(true)
}
function funcEventInput(e){
  setReviewInput(e.value)
}


 

  return (
    
    <main className={styles.main}>


<div className={styles.center}>
        <div>
        <h1 className={styles.title}>
          {name}
        </h1>

        <ReactStars 
        count={5} 
        size={30} 
        color2={'#ff0077'}
        value={stars}
        edit={false}
         /> 
         <p>{stars}</p>
          </div>
     
      </div>

    

          <button className={styles.button} onClick={() => setShowModal(true)}> Submit a Review</button>

          <Modal
            isOpen={showModal}
            // onRequestClose={setShowModal}
            style={styles.card1}
            contentLabel="Example Modal"
          >
            <main className={styles.main}>
              <h2>First, please connect your wallet!</h2>
              <button className={styles.button} onClick={switchModals}>Connect</button>
              
               
   
             
            </main>
            
          </Modal>

          <Modal
            isOpen={showIPFSModal}
            // onRequestClose={setShowModal}
            style={styles.card1}
            contentLabel="Example Modal"
          >
            <main className={styles.main}>
              <h2>Next, Send your Review to IPFS and Transact!</h2>
              <br></br>
              
              <input
            name="isGoing"
            type="text"
            defaultValue=""
            onChange={e => funcEventInput(e)} />
         <br></br>
              <ReactStars 
        count={5} 
        size={30} 
        color2={'#ff0077'}
        value={input_stars}
        edit={true}
         /> 
         <br></br> 
              <button  className={styles.button} onClick={() => setShowIPFSModal(false)}>Upload</button>
              
               
        
             
            </main>
            
          </Modal>

         

      <div className={styles.card1}>
      <div className={styles.center}>
        <h2>
            Read the reviews of the {name} protocol users:
        </h2>
      </div>

        <div className={styles.grid}>
              
              
              {reviews.map(rvw => (
                <div
                className={styles.card1}
                rel="noopener noreferrer"
              >
                
                <p>{rvw.review}</p>
              </div>
              ))}
                
              </div>
      </div>



      




    </main>
  );
};

