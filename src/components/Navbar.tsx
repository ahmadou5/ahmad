export const Navbar = () => {
    const list = [
        {
            name: 'Home'
        },
        {
            name: 'Services'
        },
        {
            name: 'About'
        },
    ]
    return(
    <div className="w-[90%] flex h-20 py-4 fixed backdrop-blur-lg bg-clip-padding bg-opacity-60 z-[9999999]">
        <div className="ml-4 flex mr-auto">
          
            <p className="text-xl mt-1 font-bold">Sambaau</p>
        </div>
        {/** <div className="lg:flex sm:flex-none py-2" >
            {
              list && list.map((item,i) => (
                <div key={i} className="bg-[#97B4DE]/50 ml-2 hover:bg-black hover:text-white/70 mr-2 h-8 flex items-center justify-center rounded-xl w-[100px]">
                    {item.name}
                </div>
              ))
            }
        </div>**/}
        <div className="ml-auto mr-4">
            <button className="bg-[#263A99] text-white/75 h-10 w-[170px] hover:rounded-2xl rounded-lg">
                Contact Us
            </button>
        </div>
    </div>
    )
}