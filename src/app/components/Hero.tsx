import Image from "next/image"
import Link from "next/link"

export default function Hero(){
    return(
        <div>




            <div>
            <Image src="/hero.png" alt="interior" width={1358} height={10}/>
            </div>


            <div className="absolute top-1/2 right-[10%] w-[500px] h-[300px] bg-[#FFF3E3] mr-6 mt-4">

            <div className="mt-16 ml-4">
            <p>New Arrival</p>
            <p className="text-2xl font-bold text-yellow-600">Discover Our<br></br> New Collection</p>
            <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Doloremque odit libero nemo eum in officia.</p>
            </div>
            <Link href="/productcomparison">
            <div className="mt-14 ml-4 w-40 h-10 bg-yellow-600 text-center pt-2 "><button>BUY NOW</button></div></Link>
            </div>







          {/* second part */}


          <div className="w-[1358px] h-[500px] mt-5">
            <div className="flex flex-col items-center text-black">
                <p className="text-2xl font-bold">Browse The Range</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>


         <div className="flex justify-center gap-10 mt-8">
            <Image src="/dining.png" alt="dining" width={250} height={400}/>
            <Image src="/living.png" alt="living" width={250} height={400}/>
            <Image src="/bedroom.png" alt="bedroom" width={250} height={400}/>
        </div>   


            

            
          </div>



















        </div>
    )
}