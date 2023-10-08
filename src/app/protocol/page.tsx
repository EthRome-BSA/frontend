"use client";
import { useSearchParams } from 'next/navigation'
import styles from '../page.module.css'
import ReactStars from 'react-stars'
import {useState} from "react";
import Modal from 'react-modal';

export default function Page(){
  const searchParams = useSearchParams()
  const [showModal, setShowModal] = useState(false);
 
  const name = searchParams.get('name')
  let reviews = [{review: "Uniswap is gas Uniswap is gas Uniswap is gas Uniswap is gas Uniswap is gas Uniswap is gas  Uniswap is gas"},
                {review: "Uniswap is aweful"},
                { review: "Uniswap is a mediumly annoying protocol"}]
  let stars = 4.2;


  

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

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
            style={styles.main}
            contentLabel="Example Modal"
          >
            <main className={styles.main}>
              <h2>Hello</h2>
              <button onClick={() => setShowModal(false)}>close</button>
              <div>I am a modal</div>
              <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
              </form>
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

