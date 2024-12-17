import Image from "next/image"
import { IoMdContacts } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";



export default function Shop(){
    return(
        <div>


       <div>
        <Image src="/homeshop.png" alt="" width={1000} height={100} className="ml-52"/>
       </div>

       <div className="w-[1000px] h-[100px] bg-[#F9F1E7] ml-52 flex items-center">
        <div>
        <Image src="/filter.png" alt="" width={80} height={50}/>
        </div>
        <p className="ml-16">Showing 1-16 of 32 results</p>
       </div>

       <div className="flex gap-8 ml-48 mt-6">
        <Link href="/slterine"><Image src="/slterine.png" alt="" width={230} height={100}/></Link>
        <Link href="/Leviosa"><Image src="/Leviosa.png" alt="" width={230} height={100}/></Link>
        <Link href="/lolitu"><Image src="/lolitu.png" alt="" width={230} height={100}/></Link>
        <Link href="/respira"><Image src="/respira.png" alt="" width={230} height={100}/></Link>
       </div>

       <div className="flex gap-8 ml-48 mt-6">
        <Image src="/slterine.png" alt="" width={230} height={100}/>
        <Image src="/Leviosa.png" alt="" width={230} height={100}/>
        <Image src="/lolitu.png" alt="" width={230} height={100}/>
        <Image src="/respira.png" alt="" width={230} height={100}/>
       </div>

       <div className="flex gap-8 ml-48 mt-6">
        <Image src="/slterine.png" alt="" width={230} height={100}/>
        <Image src="/Leviosa.png" alt="" width={230} height={100}/>
        <Image src="/lolitu.png" alt="" width={230} height={100}/>
        <Image src="/respira.png" alt="" width={230} height={100}/>
       </div>

       <div className="flex gap-8 ml-48 mt-6">
        <Image src="/slterine.png" alt="" width={230} height={100}/>
        <Image src="/Leviosa.png" alt="" width={230} height={100}/>
        <Image src="/lolitu.png" alt="" width={230} height={100}/>
        <Image src="/respira.png" alt="" width={230} height={100}/>
       </div>

       {/* <Image src="/Frame.png" alt="" width={1000} height={1} className="ml-52"/> */}






       <div className="w-[900px] h-[100px] bg-[#FAF3EA] ml-64 mt-8 flex items-center justify-center gap-8" >

        <div><Image src="/trophy.png" alt="" width={30} height={5}/></div>
        <div>
            <p>High Quality</p>
            <p className="text-xs">Crafted from top materials</p>
        </div>


        <div><Image src="/guarantee.png" alt="" width={30} height={10}/></div>
        <div>
            <p>Warranty Protection</p>
            <p className="text-xs">Over 2 Years</p>
        </div>


        <div><Image src="/shipping.png" alt="" width={30} height={10}/></div>
        <div>
            <p>Free shipping</p>
            <p className="text-xs">Order over 150 $</p>
        </div>


        <div><Image src="/customersupport.png" alt="" width={30} height={10}/></div>
        <div>
            <p>24/7 Support</p>
            <p className="text-xs">Dedicated Support</p>
        </div>



       </div>



        </div>
    )
}