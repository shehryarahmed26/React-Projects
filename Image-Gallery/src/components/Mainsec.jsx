import { useState } from "react"
import Hero from "./Hero"

 const  MainSection = () => {
    let imgsarr = [
        {
            img: './public/burger.avif',
            title: 'Burger',

        },
        {
            img: './public/chanachat.avif',
            title: 'Chanachat',

        },
        {
            img: './public/chinese.avif',
            title: 'Chinese',

        },
        {
            img: './public/cookies.avif',
            title: 'Cookies',

        },
        {
            img: './public/fish.avif',
            title: 'Fish',

        },
        {
            img: './public/icecream.avif',
            title: 'Ice Cream',

        },
        {
            img: './public/juice.avif',
            title: 'Red Juice',

        },
    ] 
    const [renderimg, setrenderimg] = useState(null)
        let imghandler = (img) => {
            setrenderimg(img)
            console.log(renderimg);
            
        }
        let closemodal = () => {
            setrenderimg(null)
        }
    let renderarr = imgsarr.map((data, i) => {
        return <div className="w-[30%] my-2 ">
            <img onClick={() => imghandler(data.img)} className="h-[370px] rounded cursor-pointer  w-full" src={data.img} alt="food-img" />
            <h3 className="text-center font-bold text-gray-900 text-2xl mt-2">{data.title}</h3>
        </div>
    })

    return <div className="flex flex-wrap gap-5 mx-auto justify-center px-20 ">
        {renderarr}
        {renderimg ? <Hero renderimg={renderimg} closemodal={closemodal}/> : ''}
    </div>
 }
 export default MainSection;