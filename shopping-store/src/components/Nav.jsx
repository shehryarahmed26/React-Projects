const Nav = () => {
  return (
    <div className="w-full flex px-16 justify-between mt-5">
        <div className="logo font-bold text-2xl">Shopping-store</div>
        <div className="details flex gap-12">
        <a href="#" className="cursor-pointer hover:text-blue-600">Home</a>
        <a href="#" className="cursor-pointer hover:text-blue-600">Watches</a>
        <a href="#" className="cursor-pointer hover:text-blue-600">Shoes</a>
        <a href="#" className="cursor-pointer hover:text-blue-600">Shirts</a>
        </div>
    </div>
  )
}

export default Nav