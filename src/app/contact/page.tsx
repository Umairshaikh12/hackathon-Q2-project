import Image from "next/image"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";




export default function Contact(){
    return(
        <div>






        <div className="flex">
            <div className="relative">
                <Image src="/contact.png" alt="" width={1000} height={100} className="ml-52"/>

                <div className="absolute inset-0 flex flex-col items-center justify-center"><Image src="/contactlogo.png" alt="" width={100} height={100} className="ml-52"/>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center"><Image src="/hmct.png" alt="" width={100} height={100} className="ml-52 mt-24"/>
                </div>
            </div>
        </div>




         {/* body part */}
         <div className="w-[1000px] h-[800px] ml-52">

          
          <div className="flex flex-col items-center justify-center pt-16">
            <p className="text-3xl font-bold">Get In Touch With Us</p>
            <p className="mt-6">For More Information About Our Product & Services. Please Feel Free To Drop   Us</p>
            <p> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
          </div>

          <div className="grid grid-cols-2">
            <div className="ml-48 mt-14">
            <FaLocationDot />
            <p>Address</p>
            <p>236 5th SE Avenue, New<br></br> York NY10000, United<br></br> States</p>
            
            <FaPhoneAlt className="mt-11"/>
            <p>Phone</p>
            <p>Mobile: +(84) 546-6789<br></br>Hotline:+(84) 456-6789</p>
            
            <GoClockFill className="mt-11"/>
            <p>Working Time</p>
            <p>Monday-Friday:9:00-22:00<br></br>Saturday-Sunday:9:00-21:00</p>
            </div>


            <div className="flex flex-col mt-12 space-y-5">
             <p>Your name</p>
             <input type="text" placeholder="Abc" className="h-16 w-52 rounded-2xl border"></input>
             <p>Email address</p>
             <input type="text" placeholder="Abc@gmail.com" className="h-16 w-52 rounded-2xl border"></input>
             <p>Subject</p>
             <input type="text" placeholder="This is optional" className="h-16 w-52 rounded-2xl border"></input>
             <p>Message</p>
             <input type="text" placeholder="Hi , i'd like to ask about" className="h-16 w-52 rounded-2xl border"></input>
             <button className="bg-yellow-600 h-11 w-52 text-white">Submit</button>

            </div>

          </div>

         














         </div>


      


         



         
                  {/* body part end */}


                  
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




