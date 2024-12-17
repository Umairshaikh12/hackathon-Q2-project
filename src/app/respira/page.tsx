import Image from "next/image"

export default function Respira (){
    return(
        <div>
            




            <div className="w-[1000px] h-[80px] bg-[#F9F1E7] ml-52 flex items-center">
                <div className="flex items-center ml-24">
                <Image src="/homee.png" alt="" width={80} height={20}/>
                <Image src="/shopp.png" alt="" width={80} height={20}/>
                <p>Asgaard sofa</p>
                </div>
            </div>


            <div className="w-[1000px] h-[500px] ml-52">

                <div className="grid grid-cols-2">
                <div className="ml-10 mt-10">
                    <Image src="/asgaardsofa.png" alt="" width={450} height={200}/>
                </div>   


                <div className="space-y-2 mt-10 ml-5">
                    <p className="text-2xl">Asgaard Sofa</p>
                    <p className="text-[#9F9F9F]">Rs. 250,000.00</p>
                    <div className="flex">
                    <Image src="/stars.png" alt="" width={80} height={50}/>
                    <p> | 5 Customer review</p>
                    </div>
                    <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Alias molestiae repellendus ullam, voluptates neque consectetur<br></br> quae porro? Praesentium consequuntur voluptatem amet odio.<br></br> Ut aut, nulla esse incidunt eius quidem culpa.</p>
                    <p>Size</p>
                    <div className="flex gap-4">
                        <div className="w-8 h-8 bg-yellow-600 text-white text-balance rounded flex items-center justify-center">L</div>
                        <div className="w-8 h-8 bg-[#F9F1E7] rounded flex items-center justify-center">XL</div>
                        <div className="w-8 h-8 bg-[#F9F1E7] rounded flex items-center justify-center">XS</div>
                    </div>
                    <p>Color</p>
                    <div className="flex gap-4">
                        <div className="w-8 h-8 bg-[#816DFA] rounded-full"></div>
                        <div className="w-8 h-8 bg-black rounded-full"></div>
                        <div className="w-8 h-8 bg-yellow-600 rounded-full"></div>
                    </div>

                    <div className="flex space-x-3 pt-5">
                    <div className="w-[123px] h-[64px] rounded-xl flex items-center justify-center tracking-[9px] border-2 border-[#9F9F9F]"> - 1 + </div>
                    <div className="w-[215px] h-[64px] rounded-xl flex items-center justify-center border-2 border-black">Add to cart</div>
                    <div className="w-[215px] h-[64px] rounded-xl flex items-center justify-center border-2 border-black">+ Compare</div>
                    </div>
                </div>
                </div>
            </div>




             
                <div className="w-[1000px] h-[650px] bg-[#FFFFFF] ml-52 ">
                    <div className="flex items-center justify-center text-2xl space-x-7 pt-8">
                        <p>Description</p>
                        <p className="text-[#9F9F9F]">Additional Information</p>
                        <p className="text-[#9F9F9F]">Reviews [5]</p>
                    </div>

                    <div className="flex flex-col space-y-10 ml-48 ">
                        <p className="mt-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quasi praesentium voluptate,<br></br> autem mollitia illo distinctio laborum rem unde non!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repudiandae illum ut consectetur, qui deserunt voluptatum nam excepturi unde alias in nesciunt dolorem voluptas quo quos possimus culpa incidunt corporis praesentium libero distinctio facilis! Iste, voluptatem. Voluptate laboriosam perferendis quas animi mollitia similique fuga, pariatur consectetur rerum alias, quasi dicta.</p>
                    </div>

                    <div>
                        <Image src="/pinksofa.png" alt="" width={900} height={100} className="ml-24 mt-16"/>
                    </div>
                </div>
                

                <div className="w-[1000px] h-[500px] ml-52">
                    <p className="text-2xl font-bold flex items-center justify-center pt-8">Related Products</p>

                    <div className="flex items-center justify-center flex-col">
                        <Image src="/relatedproducts.png" alt="" width={700} height={100} className="mt-12"/>
                        <button className="w-36 h-12 bg-white flex items-center justify-center mt-8 border-2 border-[#B88E2F] text-[#B88E2F]">Show more</button>
                    </div>
                </div>














        </div>
    )
}