import Image from "next/image"
import Link from "next/link"

export default function Cart (){
    return(
        <div>

            
        <div className="flex">
        <div className="relative">
        <Image src="/homecart.png" alt="" width={1000} height={100} className="ml-52"/>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Image src="/cartlogo.png" alt="" width={80} height={100} className="ml-52"/>
        </div>
                                  
        <div className="absolute inset-0 flex items-center justify-center"><Image src="/homecartt.png" alt="" width={80} height={100} className="ml-52 mt-24"/>
        </div>
        </div>
        </div>
            
                  

                  

                  <div className="w-[1000px] h-[400px] ml-52">
                   <div className="grid grid-cols-2">

                   <div className="bg-[#F9F1E7] w-[550px] h-[70px] flex items-center justify-center gap-10 mt-10 ml-8">
                        <p className="ml-24">Product</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>   
                    </div>

                    

                    <div className="w-[250px] h-[220px] bg-[#F9F1E7] ml-32 mt-10 space-y-5 pt-5">
                        <p className="flex items-center justify-center text-2xl font-bold">Cart Totals</p>
                        <div className="flex ml-8 space-x-6">
                        <p>Subtotal </p>
                        <p className="text-[#9F9F9F]">Rs 250,000,00</p>
                        </div>
                        <div className="flex ml-8 space-x-12">
                        <p>Total</p>
                        <p className="text-[#B88E2F]">Rs 250,000,00</p>
                        </div>
                        <Link href="/checkout"><button className="w-32 h-10 ml-14 mt-4 rounded-2xl border-2 border-black">Check out</button>
                        </Link>
                    </div>

                    <div className="flex space-x-12 mt-[-100px]">
                     <Image src="/cartsofa.png" alt="" width={100} height={100} className="ml-9"/>
                     <p>Asgaard Sofa</p>
                     <p>Rs 25,000,00</p>
                     <p>1</p>
                     <p>Rs 25,000,00</p>
                    </div> 
                    
                   </div> 
                  </div>





                  <div className="w-[1000px] h-[100px] bg-[#FAF3EA] ml-52 mt-8 flex items-center justify-center gap-8" >
                                    
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