"use client";
import { useSearchParams } from 'next/navigation'
import styles from '../page.module.css'
import ReactStars from 'react-stars'
import { useState } from "react";
import Modal from 'react-modal';
import {
  SismoConnectButton, // the Sismo Connect React button displayed
  SismoConnectConfig, // the client config with your appId
  AuthType, // the authType enum, we will choose 'VAULT' in this tutorial
  ClaimType, // the claimType enum, we will choose 'GTE' in this tutorial, to check that the user has a value greater than a given threshold
} from "@sismo-core/sismo-connect-react";
import { useAccount, useConnect, useDisconnect } from "wagmi";



export const sismoConnectConfig: SismoConnectConfig = {
  appId: "0x233d8ed9e8c2c89ccc3bccdece915115",
  devMode: {
    enabled: true,
    // devGroups: [devGroups[0]],
  },
};

export default function Page() {
  const searchParams = useSearchParams()
  const [showModal, setShowModal] = useState(false);
  const [showIPFSModal, setShowIPFSModal] = useState(false);
  const [status, setStatus] = useState("");

  const [reviewInput, setReviewInput] = useState("");
  const name = searchParams.get('name')
  let reviews = [{ review: "Uniswap is gas Uniswap is gas Uniswap is gas Uniswap is gas Uniswap is gas Uniswap is gas  Uniswap is gas" },
  { review: "Uniswap is aweful" },
  { review: "Uniswap is a mediumly annoying protocol" }]
  let stars = 4.2;
  let input_stars = 4.2;

  function switchModals() {
    setShowModal(false)
    setShowIPFSModal(true)
  }
  function funcEventInput(e) {
    setReviewInput(e.value)
  }

  function uploadToIpfs() {
    // Set status to "uploading to IPFS"
    setStatus("uploading to IPFS...");

    // Simulate the uploading process. You can replace this with your actual IPFS uploading code.
    setTimeout(() => {
      // Set status to the IPFS hash after the upload is complete
      setStatus("Uploaded at QmSsorEaA1pLWS4s1JRefD6YjzSvDJQTj4m95b78Z1RoQH");
    }, 2000); // This is a 2-second delay for simulation purposes.
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
          <SismoConnectButton
            // the client config created
            config={sismoConnectConfig}
            // the auth request we want to make
            // here we want the proof of a Sismo Vault ownership from our users
            auths={[{ authType: AuthType.VAULT }]}
            claim={{ groupId: "0x3497b46c5dcd30bf8ee001fe3fdd0acd" }}
            // we ask the user to sign a message
            // it will be used onchain to prevent front running
            //   signature={{ message: signMessage(address) }}
            // onResponseBytes calls a 'setResponse' function with the responseBytes returned by the Sismo Vault
            onResponseBytes={(responseBytes: string) =>
              setResponse(responseBytes)
            }
            // Some text to display on the button
            text={"Connect with Sismo"}
          />
          <button className={styles.button} onClick={uploadToIpfs}>Upload</button>
          <p>{status}</p>





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

