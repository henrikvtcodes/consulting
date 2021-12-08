import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import logo from "~pub/henriklogo.png";

<<<<<<< HEAD
const Home:NextPage = (props) => {
=======
const Home:NextPage = (props:any) => {
>>>>>>> 9961a0ae2a7f085ea473ad4efa3f965995fa4517
  return (
    <main className="text-black bg-gray-100 w-screen h-screen flex flex-col justify-center align-middle">
      <div className="grid justify-center place-content-center mx-2 my-4">
        <div className='justify-self-center'>
          <Image src={"/henriklogo.png"} className='w-24 h-24 justify-self-center' width={96} height={96} alt="henrik's logo"/>
        </div>
        <b className="text-4xl mx-2 justify-self-center ">
          {" "}
          Henrik Van Tassell Consulting{" "}
        </b>
        <i className="justify-self-center">
          {" "}
          ~Technology services for residential and small business~{" "}
        </i>
        <br />
        <p className="max-w-3xl">
          {" "}
          This website is coming soon (I promise it&apos;ll be pretty cool!). In
          the meantime, I&apos;m still open to take clients, so you can email me
          at the address below.{" "}
        </p>
        <br />
        <div>
          {" "}
          <b>Email me at:</b>{" "}
          <a href="mailto:consulting@henrikvt.com">consulting@henrikvt.com</a>{" "}
        </div>
      </div>
    </main>
  );
}

export default Home;