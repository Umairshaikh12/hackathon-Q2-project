

export default function Footer(){
    return(

        

        <div className="flex justify-center space-x-16 w-[1358px] h-[300px]">


        <div className="mt-8">
            <p className="text-2xl font-bold">Funiro</p>
            <p className="mt-6 text-[#9F9F9F]">400 University Drive Suite 200 Coral<br></br>Gables,<br></br>FL 33134 USA</p>
        </div>

        <ul className="space-y-7 mt-8">
            <li className="text-[#9F9F9F]">Links</li>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>  
        </ul>


        <ul className="space-y-7 mt-8">
            <li className="text-[#9F9F9F]">Help</li>
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>  
        </ul>

        <div className="space-y-7 mt-8">
            <p className="text-[#9F9F9F]">Newsletter</p>
            <p className="text-[#9F9F9F] underline">Enter Your email address</p>
        </div>



        </div>
    )
}