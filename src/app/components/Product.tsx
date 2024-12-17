import Image from "next/image"

export default function Product(){
    return(


        <div>

            <div className="text-center font-bold text-3xl">
            <p>Our Products</p>
            </div>

            <div className="flex justify-center mt-5">
            <Image src="/sylterine.png" alt="dining" width={800} height={400}/>
            </div>


            <div className="flex justify-center mt-3">
            <Image src="/grifu.png" alt="dining" width={800} height={400}/>
            </div>


           
            <div className="w-[1358px] h-[500px] flex items-start">
            <div className="p-32 ml-36">
             <p className="text-2xl font-bold">
             50+ Beautiful rooms<br />inspiration
            </p>
            <p className="mt-2">
            Our designer already made a lot of beautiful<br />
            prototypes of rooms that inspire you
           </p>
          <div className="mt-4 w-36 h-8 bg-yellow-600 text-center pt-1">
          <button>Explore More</button>
          </div>
          </div>



          <div className="mt-24 ">
            <Image src="/inner.png" alt="" width={370} height={400}/>
          </div>

          </div>



         <div className="w-[1358px] h-[500px]">
          <div className="flex flex-col items-center text-black">
          <p>Share your setup with</p>
          <p className="text-2xl font-bold">#FuniroFurniture</p>
          </div>

          <Image src="/furniture.png" alt="" width={800} height={100} className="ml-72"/>
         </div>

         <hr className="w-[1358px] border-t-1 border-gray-400 my-6" />











          </div>
    )
}





