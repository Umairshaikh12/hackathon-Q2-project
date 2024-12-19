import Image from "next/image"
import { IoMdContacts } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";




export default function Navbar (){
    return(
        <div>






<div className="w-[1358px] h-[100px] flex items-center">

<div className="w-[1258px] h-[41px] bg-white flex items-center justify-between ml-14">
<Image src="/furniro.png" alt="" width={130} height={30} className="ml-16"/>
<ul className="flex space-x-8">
    <li><Link href="/">Home </Link></li>
    <li><Link href="/shop">Shop</Link></li>
    <li><Link href="/blog">Blog</Link></li>
    <li><Link href="/contact">Contact</Link></li>
</ul>

<div className="flex space-x-6 mr-12 text-xl">
<IoMdContacts />
<HiMagnifyingGlass />
<CiHeart />
<Link href="/FiShoppingCart"><FiShoppingCart /></Link>
</div>


</div>
</div>




            
        </div>
    )
}


