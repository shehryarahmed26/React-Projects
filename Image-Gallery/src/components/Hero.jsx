const Hero = ({closemodal, renderimg}) => {
    return <div className="popup fixed top-[3%] h-[550px] bg-black bg-opacity-85  p-4 rounded w-[50%]">
    <h3 onClick={closemodal} className="text-white bg-red-500 px-2 w-fit rounded float-end">Close</h3>
    <img className="w-[400px] h-[500px] mx-auto rounded" src={renderimg} alt="" />
</div> 

}
export default Hero;