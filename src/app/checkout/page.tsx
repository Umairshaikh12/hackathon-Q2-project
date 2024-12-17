import Image from "next/image"

export default function Checkout (){
    return(
        <div>


            <div>
            <Image src="/checkout.png" alt="" width={1000} height={100} className="ml-52"/>
            </div>



            <div className="w-[1000px] h-[1400px]  ml-52">
            <div className="grid grid-cols-2">
             {/* col one    */}
            <div className="w-[400px] h-[1300px] ml-28 mt-8">
            <p className="text-2xl font-bold mt-6 ml-10">Billing details</p>
            <div className="flex ml-10 space-x-28 mt-8">
            <p>First Name</p>
            <p>Last Name</p>
            </div>
            
            <div className="flex space-x-10 ml-9 mt-5">
            <div className="w-[150px] h-[60px] rounded-xl border-2 border-[#9F9F9F]"></div>
            <div className="w-[150px] h-[60px] rounded-xl border-2 border-[#9F9F9F]"></div>
            </div>
            <div className="ml-8 mt-5 space-y-5">
            <p>Company Name (Optional)</p>
            <div className="w-[150px] h-[60px] rounded-xl border-2 border-[#9F9F9F]"></div>
            <p>Country / Region</p>
            <div className="w-[150px] h-[60px] rounded-xl border-2 border-[#9F9F9F]"></div>
            <p>Street address</p>
            <div className="w-[150px] h-[60px] rounded-xl border-2 border-[#9F9F9F]"></div>
            <p>Town city</p>
            <div className="w-[150px] h-[60px] rounded-xl border-2 border-[#9F9F9F]"></div>
            <p>Province</p>
            <div className="w-[150px] h-[60px] rounded-xl border-2 border-[#9F9F9F]"></div>
            <p>ZIP code</p>
            <div className="w-[150px] h-[60px] rounded-xl border-2 border-[#9F9F9F]"></div>
            <p>Phone</p>
            <div className="w-[150px] h-[60px] rounded-xl border-2 border-[#9F9F9F]"></div>
            <p>Email address</p>
            <div className="w-[150px] h-[60px] rounded-xl border-2 border-[#9F9F9F]"></div>
            </div>
            </div>

            {/* col two */}
            <div className="w-[400px] h-[650px] ml-8 mt-8">
            <div className="flex justify-between ml-5 mt-6">    
            <div className="space-y-5">
                <p className="text-xl font-bold">Product</p>
                <p className="text-[#9F9F9F]">Asgaard sofa x l</p>
                <p>Subtotal</p>
                <p>Total</p>
            </div> 
            <div className="space-y-5">
                <p className="text-xl font-bold">Subtotal</p>
                <p>Rs, 250,000,00</p>
                <p>Rs, 250,000,00</p>
                <p className="text-xl text-[#B88E2F] font-bold">Rs, 250,000,00</p>
            </div>   
            </div>
            <hr className="w-50 h-1 bg-[#D9D9D9] mt-8"/>
            <div className="flex mt-4 ml-6 space-x-3">
            <div className="w-3 h-3 bg-black rounded-full mt-1"></div>
            <p>Direct Bank Transfer</p>
            </div>
            <p className="ml-6 mt-3 text-sm text-[#9F9F9F]">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
            <div className="flex mt-4 ml-10 space-x-3">
            <div className="w-3 h-3 bg-white rounded-3xl border mt-1"></div>
            <p className="text-sm text-[#9F9F9F]">Direct Bank Transfer</p>
            </div>
            <div className="flex mt-4 ml-10 space-x-3">
            <div className="w-3 h-3 bg-white rounded-3xl border mt-1"></div>
            <p className="text-sm text-[#9F9F9F]">Cash on delivary</p>
            </div>
            <p className="text-sm ml-10 mt-4">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy</p>
            <button className="w-[200px] h-[50px] ml-24 mt-10 rounded-xl border">Place order</button>
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