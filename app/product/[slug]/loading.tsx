import Image from "next/image";

const Loading = () => {
  return (
    <div className='w-full flex justify-center items-center'>
      <Image
        src='/image/loading-2.gif'
        width={350}
        height={350}
        alt='loader'
        className='object-contain'
      />
    </div>
  );
};

export default Loading;