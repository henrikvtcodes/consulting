import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import logo from "~pub/henriklogo.png";

const Home:NextPage = () => {
  return (
    <main className="text-black bg-gray-100 grid justify-center place-content-center  w-screen h-screen">
      {/* <Image src={"/henriklogo.png"} className='w-24 h-24' width={96} height={96} alt="henrik's logo"/> */}
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
        the meantime, I&apos;m still open to take clients, so you can contact me
        at the information below.{" "}
      </p>
      <br />
      <div>
        {" "}
        <b>Email me at:</b>{" "}
        <a href="mailto:consulting@henrikvt.com">consulting@henrikvt.com</a>{" "}
      </div>
    </main>
  );
}

export default Home
