import Image from "next/image"




export default function Blog(){
    return(
        <div>

             <div className="flex">
                        <div className="relative">
                            <Image src="/blog.png" alt="" width={1000} height={100} className="ml-52"/>
            
                            <div className="absolute inset-0 flex flex-col items-center justify-center"><Image src="/bloglogo.png" alt="" width={100} height={100} className="ml-52"/>
                            </div>
                            
                            <div className="absolute inset-0 flex items-center justify-center"><Image src="/hmbg.png" alt="" width={100} height={100} className="ml-52 mt-32"/>
                            </div>
                        </div>
                    </div>



    
            

            <div className="w-[1000px] h-[1800px]  ml-52">

                <div className="grid grid-cols-2">



                <div className="ml-24 mt-20"> 
                <Image src="/laptop.png" alt="" width={500} height={100}/>  
                <p className="text-2xl font-bold mt-5">Going all-in with millennial design</p>   
                <p className="text-[#9F9F9F] mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, deleniti et, facere odit velit doloribus exercitationem, cumque voluptas quia perspiciatis pariatur nostrum voluptatum dicta asperiores nemo totam sequi. Quibusdam excepturi veritatis veniam. Nostrum cumque explicabo iure, aliquam velit illum pariatur!</p>
                <p className="underline mt-6">Read more</p>

                <Image src="/writting.png" alt="" width={500} height={100} className="mt-8"/>  
                <p className="text-2xl font-bold mt-5">Exploring new ways of decorating</p>   
                <p className="text-[#9F9F9F] mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, deleniti et, facere odit velit doloribus exercitationem, cumque voluptas quia perspiciatis pariatur nostrum voluptatum dicta asperiores nemo totam sequi. Quibusdam excepturi veritatis veniam. Nostrum cumque explicabo iure, aliquam velit illum pariatur!</p>
                <p className="underline mt-6">Read more</p>

                <Image src="/writting2.png" alt="" width={500} height={100} className="mt-8"/>  
                <p className="text-2xl font-bold mt-5">Handmade pieces that took time to make</p>   
                <p className="text-[#9F9F9F] mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, deleniti et, facere odit velit doloribus exercitationem, cumque voluptas quia perspiciatis pariatur nostrum voluptatum dicta asperiores nemo totam sequi. Quibusdam excepturi veritatis veniam. Nostrum cumque explicabo iure, aliquam velit illum pariatur!</p>
                <p className="underline mt-6">Read more</p>
                </div>


                <div className="ml-48 mt-20">
                <Image src="/categories.png" alt="" width={250} height={100}/>  
                <Image src="/recentpost.png" alt="" width={250} height={100} className="mt-10"/>  

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






