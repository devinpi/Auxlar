import chargerImage from '../media/evcharge2.jpg';
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import classes from './navigation.module.css'


  export default function About() {
    return (
    // <div className={classes.hero}>
      <div id="about" className="relative isolate overflow-hidden py-24 sm:py-32">
        {/* <img
          src={chargerImage}
          alt="EV charger and a car"
          className="absolute inset-0 -z-10 h-full w-full object-contain object-center md:object-left opacity-70
          />"
        /> */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-[#202020] sm:text-6xl text-center">About Us</h2>
            <p className="mt-6 text-lg leading-8 text-[#202020]">
              With Auxlar, you can say goodbye to the hassle of juggling between multiple apps or services. We consolidate all EV chargers in one app to provide you with a seamless experience. At Auxlar, we're changing what it means to charge your EV. We're confident you'll love our app and the results it delivers. With our innovative features and personalized recommendations, you can make the most of your time while your car charges.
            </p>
          </div>
        </div>
      </div>      
    // </div>

    )
  }