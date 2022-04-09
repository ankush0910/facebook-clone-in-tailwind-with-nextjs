import Image from "next/image";
const Body=()=>{
    return(
        <section className="bg-gray-100">
            <div className="flex justify-center flex-wrap pb-24">
                <div className="basis-full md:basis-1/2">
                    <div className=" justify-center mt-5 md:mt-44 ml-[110px]">
                    <Image src="/facebook.svg" alt="facebook" height={109} width={321} />
                    <p className=" -mt-5 -ml-7 md:ml-8 w-5/6 md:w-full text-center text-[24px] md:text-left md:text-[28px] font-sans">Facebook helps you connect and share with the people in your life.</p>
                    </div>
                </div>

                <div className="basis-full md:basis-1/2 text-center md:text-left ">
                    <div className="justify-center bg-white drop-shadow-lg mt-32   rounded-lg mx-20 mr-40 ">
                        <form>
                            <div className=" pt-3 px-4 pb-6">
                                <input type="email" className="border rounded-md focus:border-blue-600 
                                focus:outline-blue-300 focus:outline-offset-2 w-full p-3 text-lg mt-1" placeholder="Email address or Phone Number" required />

                                <input type="password" className="border rounded-md focus:border-blue-600 
                                focus:outline-blue-300 focus:outline-offset-2 text-lg w-full p-3 mt-3" placeholder="Password" required />

                                <button type="submit" className=" w-full mt-3 px-5 py-2.5 text-center font-bold text-xl rounded-md  bg-blue-600 text-white">Log In</button>
                                <div className="text-center mt-3">
                                <a href="#" className=" text-blue-600 text-sm">Forgotten Password?</a>
                                </div>
                                <hr className="mt-6"/>

                                     <div className=" md:px-16  ">
                                        <button type="submit" className=" px-4 mt-6 bg-[#42b72a] rounded-md md:px-4 py-2.5 text-center text-base w-full  font-bold text-white">Create New Account</button>
                                    </div>
                                


                                
                            </div>
                        </form>
                        

                    </div>
                         <div>
                         <div className="md:pl-32 text-centre text-sm mt-6"><a href="#" className="font-bold">Create a Page</a> for a celebrity, brand or business.</div>
                        </div>

                </div>



            </div>
        </section>
    );
};
export default Body;