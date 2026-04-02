
import React from 'react'
import heroImg from "../../assets/robo.jpg"
import { BsStars } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { FaCheckCircle } from 'react-icons/fa';

function HeroBanner() {
  return (
    <div className="">
      <div className="hero bg-base-200 min-h-screen md:px-16">
        <div className="hero-content flex-col gap-5 lg:flex-row-reverse">
         <img  className=" w-full my-8 md:my-0 md:max-w-sm rounded-lg shadow-2xl" src={heroImg} alt="" />
          <div>
            <p className=' font-bold rounded-full flex justify-center  items-center gap-2 w-fit py-1 px-5 bg-green-200 border border-b-green-500 text-green-500'><BsStars  className="text-xl text-yellow-400 "/> Frontier AI Models</p>

            <h1 className="text-4xl mt-6 text-green-700 md:text-5xl font-bold">One Subscription. <br /> <span className="bg-linear-to-r from-green-500 to-teal-400 bg-clip-text text-transparent" >All the AIs You Need</span></h1>
            <p className="py-6 w-90 md:w-auto">
             Experience the full spectrum of frontier intelligent all the most advanced AI models, unified under a single powerful subscription.
            </p>
            <button className=" py-1 px-5 rounded-full bg-linear-to-r from-green-600 text-base text-white to-teal-500 btn font-bold hover:-translate-y-1 duration-300 transition-all">Get Unlimited Access </button>

            <div className='mt-8'>
              <ul className="flex flex-wrap items-center gap-4">
                <li className="text-sm flex items-center gap-1"><FaCheckCircle  className="text-green-500" />50+ Frontier Models</li>
                <li className="text-sm flex items-center gap-1"><FaCheckCircle  className="text-green-500" />No Usage Limits</li>
                <li className="text-sm flex items-center gap-1"><FaCheckCircle className="text-green-500" />Cancel Anytime</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner