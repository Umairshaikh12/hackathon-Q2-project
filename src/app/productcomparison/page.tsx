import Image from "next/image"

export default function Productcomparison (){
    return(
        <div>

            <div>
                <Image src="/productcom.png" alt="" width={1000} height={100} className="ml-52"/>
            </div>

            <div className="flex items-center justify-center space-x-24  ml-52 w-[1000px] h-[250px]">
                <div className="pb-16">
                <p className="font-bold">Go to Product<br></br> page for more<br></br>Products</p>
                <p className="text-sm underline text-[#727272] mt-2">View More</p>
                </div>
                <div className="space-y-2">
                <Image src="/asgaaaard.png" alt="" width={180} height={100}/>
                <p className="font-bold">Asgaard Sofa</p>
                <p className="text-sm font-bold">Rs, 250,000,00</p>
                </div>
                <div className="pb-4 space-y-2">
                <Image src="/outdoorsofa.png" alt="" width={180} height={100}/>
                <p className="font-bold">Outdoor sofa set</p>
                <p className="text-sm font-bold">Rs, 224,000,00</p>
                </div>
                <div className="mb-20 space-y-4">
                <p className="font-bold">Add A Product</p>
                <select className="w-40 h-10 bg-[#B88E2F] rounded-lg text-white mb-6">
                    <option value="choose a product">Choose a Product</option>
                </select>
                </div>
            </div>



        

        <div className="w-[1000px] h-[1650px] ml-52">
         <div className="flex space-y-6 pt-6 ml-14 space-x-28">   
        <div className="space-y-4">
            <p className="text-xl font-bold">General</p>
            <p>Sales Package</p>
            <p>Model Number</p>
            <p>Secondary Material</p>
            <p>Configuration</p>
            <p>Upholstery Material</p>
            <p>Upholstery Color</p>
        </div>
        <div className="space-y-4 pt-4">
            <p>1 sectional sofa</p>
            <p>TFCBLIGRBL6SRHS</p>
            <p>Solid Wood</p>
            <p>L-shaped</p>
            <p>Fabric + Cotton</p>
            <p>Bright Grey & Lion</p>
        </div>
        <div className="space-y-4 pt-4">
            <p>1 Three Seater, 2 Single Seater</p>
            <p>DTUBLIGRBL568</p>
            <p>Solid Wood</p>
            <p>L-shaped</p>
            <p>Fabric + Cotton</p>
            <p>Bright Grey & Lion</p>
        </div>
        </div>




        <div className="flex space-y-6 pt-6 ml-14 space-x-28 mt-5">   
        <div className="space-y-4">
            <p className="text-xl font-bold">Product</p>
            <p>Filling Material</p>
            <p>Finish Type</p>
            <p>Adjustable Headrest</p>
            <p>Maximum Load Capacity</p>
            <p>Origin of Manufacture</p>
        </div>
        <div className="space-y-4 pt-4">
            <p>Foam</p>
            <p>Bright Grey & Lion</p>
            <p>No</p>
            <p>280 KG</p>
            <p>Pakistan</p>
        </div>
        <div className="space-y-4 pt-4">
            <p>Matte</p>
            <p>Bright Grey & Lion</p>
            <p>Yes</p>
            <p>300 KG</p>
            <p>Pakistan</p>
        </div>
        </div>




        <div className="flex space-y-6 pt-6 ml-14 space-x-44 mt-5">   
        <div className="space-y-4">
            <p className="text-xl font-bold">Dimensions</p>
            <p>Width</p>
            <p>Height</p>
            <p>Depth</p>
            <p>Weight</p>
            <p>Seat height</p>
            <p>Leg height</p>
        </div>
        <div className="space-y-4 pt-4">
            <p>265.32 cm</p>
            <p>76 cm</p>
            <p>167.76 cm</p>
            <p>45 KG</p>
            <p>41.52 cm</p>
            <p>5.46 cm</p>
        </div>
        <div className="space-y-4 pt-4">
            <p>265.32 cm</p>
            <p>76 cm</p>
            <p>167.76 cm</p>
            <p>65 KG</p>
            <p>41.52 cm</p>
            <p>5.46 cm</p>
        </div>
        </div>




        <div className="flex space-y-6 pt-6 ml-14 space-x-28 mt-5">   
        <div className="space-y-10">
            <p className="text-xl font-bold">Warranty</p>
            <p>Warranty Summary</p>
            <p>Warranty Service Type</p>
            <p className="pt-20">Covered in Warranty</p>
            <p className="pt-12">Not Covered in Warranty</p>
            <p className="pt-32">Domestic Warranty</p>
        </div>
        <div className="space-y-5 pt-9">
            <p>1 Year Manufacturing<br></br> Warranty</p>
            <p>For Warranty Claims or<br></br> Any Product Related<br></br> Issues Please Email at<br></br> operations@trevifurnitu<br></br>re.com</p>
            <p>Warranty Against<br></br> Manufacturing Defect</p>
            <p className="pt-12">The Warranty Does Not<br></br> Cover Damages Due To<br></br> Usage Of The Product<br></br> Beyond Its Intended Use<br></br> And Wear & Tear In The<br></br> Natural Course Of<br></br> Product Usage.</p>
            <p className="pt-4">1 Year</p>
            <button className="w-40 h-12 bg-[#B88E2F]">Add to Cart</button>
        </div>
        <div className="space-y-6 pt-8">
            <p>1.2 Year Manufacturing<br></br> Warranty</p>
            <p>For Warranty Claims or<br></br> Any Product Related<br></br> Issues Please Email at<br></br> support@xyz.com</p>
            <p className="pt-4">Warranty of the product<br></br> is limited to<br></br> manufacturing defects<br></br> only.</p>
            <p>The Warranty Does Not<br></br> Cover Damages Due To<br></br> Usage Of The Product<br></br> Beyond Its Intended Use<br></br> And Wear & Tear In The<br></br> Natural Course Of<br></br> Product Usage.</p>
            <p className="pt-2">3 Months</p>
            <button className="w-40 h-12 bg-[#B88E2F]">Add to Cart</button>
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