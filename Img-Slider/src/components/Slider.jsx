const Slider = () => {
  let silderarr = [
    {
      img: "./public/img1.avif",
    },
    {
      img: "./public/img2.avif",
    },
    {
      img: "./public/img3.avif",
    },
    {
      img: "./public/img4.avif",
    },
    {
      img: "./public/img5.avif",
    },
    {
      img: "./public/img6.avif",
    },
  ];
  console.log(silderarr[0].img);
  
  return <div className="flex w-full h-screen justify-center gap-5 items-center">
    <button className="bg-green-500 px-4 text-white font-bold">Prev</button>
    <img className="w-50% h-[80vh]" src={silderarr[0].img} alt="" />
    <button className="bg-green-500 px-4 text-white font-bold">Next</button>
  </div>
};
export default Slider;
