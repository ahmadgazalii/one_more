import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <body>
    <div className="flex mt-5 w-full justify-between">
        <div className="flex space-x-5">
          <img src="Group 5.png" className="w20 h-10 pb-2 relative bottom-1 ml-4" />
          <h1 className="font-bold">COOKERA</h1>
        </div>
        <nav className="mr-96">
          <ul className="flex mr-80 space-x-5 ">
            <li>Why us</li>
            <li>Reviews us</li>
            <li>pricing</li>
          </ul>
        </nav>
        <div className="text-center">
          <button
            className="bg-orange-400 flex justify-center items-center mr-10 text-white w-16 rounded-md hover:underline cursor-pointer h-8"
          >
            <span className="text-center">Log in</span>
          </button>
        </div>
      </div>
      <hr className="border-gray-800 opacity-100" />
  
      <main>
        <div className="flex">
         
          <div className="flex flex-col justify-center pl-32 ">
            <div className=""><h1>TRY TODAY</h1></div>
            <div className="text-2xl font-bold">
              Fun and Easy Recipes Made for
              <span className="text-orange-600">You</span>
            </div>
            <div className="pt-4">
              most famous dishes you imagine and most tasty dishes
            </div>
  
            
            <div className="flex space-x-5 pt-4">
              <div>
                <button
                  className="bg-orange-400 text-white rounded-md w-20 h-8 hover:underline cursor-pointer"
                >
                  Explore
                </button>
              </div>
              <div>
                <button className="font-bold hover:underline cursor-pointer">
                  Login
                </button>
              </div>
            </div>
          </div>
          
          <div className="w-full pl-56">
            <img src="umi-kitchen-061216 2.png" className="h-96 float-right w-[1000px]" />
          </div>
        </div>
  
        <hr className="border-gray-800 text-opacity-100" />
  
        <div className="flex space-x-44 pl-20 py-8">
          <div >&#x2713;1000+<span className="text-orange-600">Recipes</span></div>
          <div>&#x2713;Easy-to-<span className="text-orange-600">Learn</span></div>
          <div>&#x2713;Delivered+<span className="text-orange-600">Quickly</span></div>
          <div>&#x2713;Orgainc<span className="text-orange-600">Ingrediants</span></div>
        </div>
        <hr className="border-gray-800 opacity-100" />
  
        <div className="flex">
          
          <div className="relative flex pt-16 pl-16 pb-9">
            <img src="Dame_credit_Evan Sung 1.png" alt="" className="h-80 w-96" />
            <img
              src="TOP 50 2017_Guero_table_overhead 1.png"
              alt=""
              className="right-36 relative h-60 w-72 top-20"
            />
          </div>
        
          <div className="pt-28">
            <h1 className="">THE FOOD</h1>
            <h1 className="font-extrabold text-2xl pb-5">WHY US?</h1>
            <p className="pb-3">The best food in Town get it fresh</p>
            <ul className="list-disc my-list pb-4">
              <li className="pb-3 font-semibold">
                Fresh Ingrediants from
                <span className="text-orange-400">Local</span> Farms
              </li>
              <li className="font-semibold">
                Simpel To make Recipes
                <span className="text-orange-400">Delivered</span> to you
              </li>
            </ul>
  
            <button
              className="bg-orange-400 text-white rounded-md w-20 h-8 hover:underline cursor-pointer font-serif"
            >
              Try Now
            </button>
          </div>
        </div>
  
        <div className="relative pt-8">
          <div className="border-t-2 border-black"></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-3"
          >
            <p>Pricing</p>
          </div>
          <div className="border-t-2 border-black"></div>
        </div>
  
        <div className="pt-52 mb-48 flex justify-center space-x-36">
       
          <div>
            <div
              className="bg-orange-400 text-sm border-2 border-orange-100 w-64 h-64 flex flex-col justify-center text-white rounded-t-[50%] pl-12 rounded-md"
            >
              <h1 className="font-semibold pl-[20%] pb-5">Starter Pack</h1>
              <h1 className="pb-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </h1>
              <ul className="list-disc my-list font-semibold">
                <li>10 Recipes Monthly</li>
                <li>5 Starter Guides</li>
              </ul>
            </div>
  <div className="flex justify-center pt-5">
            <button
              className="bg-orange-400 text-white rounded-md w-20 h-8 hover:underline cursor-pointer">
              Try Now
            </button>
            </div>
          </div>
  
        
          <div>
            <div
              className="bg-orange-400 text-sm border-2 border-orange-100 w-64 h-64 flex flex-col justify-center text-white rounded-t-[50%] pl-12 rounded-md"
            >
              <h1 className="font-semibold pl-[20%] pb-5">Loded Pack</h1>
              <h1 className="pb-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </h1>
              <ul className="list-disc my-list font-semibold">
                <li>20 Recipes Monthly</li>
                <li>10 Starter Guides</li>
              </ul>
            </div>
            <div className="flex justify-center pt-5">
            <button
              className="bg-orange-400 text-white rounded-md w-20 h-8 hover:underline cursor-pointer "
            >
              Try Now
            </button>
            </div>
          </div>
  
        
          <div>
            <div
              className="bg-orange-400 text-sm border-2 border-orange-100 w-64 h-64 flex flex-col justify-center text-white rounded-t-[50%] pl-12 rounded-md"
            >
              <h1 className="font-semibold pl-[20%] pb-5">Ultra Pack</h1>
              <h1 className="pb-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </h1>
              <ul className="list-disc my-list font-semibold">
                <li>50 Recipes Monthly</li>
                <li>15 Starter Guides</li>
              </ul>
            </div>
            <div className="flex justify-center pt-5">
            <button
              className="bg-orange-400 text-white rounded-md w-20 h-8 hover:underline cursor-pointer"
            >
              Try Now
            </button>
            </div>
          </div>
        </div>
        <hr className="border-gray-800 opacity-100" />
  
  
  <div className="pt-10 flex justify-between pb-10">
    <div >
      <div className="flex pl-7 ">
        <img src="Group 5.png" alt="" className="w-10 "/>
        <h1 className="relative top-3">COOKERA</h1>
      </div>
      <div className="pr-6">
      <h1 className="text-xs pt-5 pl-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>Sequi fugit architecto ducimus dolorem </h1>
    </div>
    </div>
    <div>
      <h1 className="pr-64">@2023 COOKERA.All Rights Reserved</h1>
    </div>
    <div className="flex pr-9 space-x-5">
      <img src="pngtree-instagram-social-platform-icon-png-image_6315976.png" alt="" className="h-8"/>
      <img src="download (2).png" alt="" className="h-8"/>
  
    </div>
  </div>
  
      </main>
    
    
</body>
  )
}
