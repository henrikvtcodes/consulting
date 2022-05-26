import React from 'react';
import Image from 'next/image';


type Props = {
  children?: React.ReactNode;
}

const Title = ({children}:Props) => {
  return (
    <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">{children}</h1>
  );

}

type CoverImageProps = {
  image: string;
  children?: React.ReactNode;
}

const CoverImage = ({image}:CoverImageProps) => { 
  return (
    <div className="relative py-4">
      <div className="absolute inset-x-0 bottom-0 h-1/2 " />
      <div className="max-w-7xl mx-auto">
        <div className="relative sm:rounded-lg sm:overflow-hidden ">
          <div className="absolute inset-0">
            <Image
              className="h-full w-full object-cover"
              src={image ? `/${image}` :"/milfordsunrise.JPG"}
              alt="Foggy sunrise"
              layout="fill"
            />
            <div className="absolute inset-0 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          </div>
        </div>
      </div>
    </div>
  );
}




const Post = {
  Title,
  CoverImage,

}
export default Post;