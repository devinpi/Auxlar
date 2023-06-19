import chargerImage from '../media/locationCharger.jpg';
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import classes from './navigation.module.css'

// const links = [
//     { name: 'Open roles', href: '#' },
//     { name: 'Internship program', href: '#' },
//     { name: 'Our values', href: '#' },
//     { name: 'Meet our leadership', href: '#' },
//   ]
//   const stats = [
//     { name: 'Offices worldwide', value: '12' },
//     { name: 'Full-time colleagues', value: '300+' },
//     { name: 'Hours per week', value: '40' },
//     { name: 'Paid time off', value: 'Unlimited' },
//   ]
  


  export default function Mission() {
    return (
    <div id="mission" className={classes.hero}>
      <div className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Our Mission</h2>
                {/* <p className="mt-6 text-lg leading-8 text-[#202020]">
                With Auxlar, you can say goodbye to the hassle of juggling between multiple apps or services. We consolidate all EV chargers in one app to provide you with a seamless experience. At Auxlar, we're changing what it means to charge your EV. We're confident you'll love our app and the results it delivers. With our innovative features and personalized recommendations, you can make the most of your time while your car charges.
                </p> */}
                <p className="mt-6 text-lg leading-8 text-white">
                  Auxlar goes above and beyond with personalized recommendations. Our app recommends popular restaurants and attractions near your charging station, so you can make the most of your time while your EV charges. Plus, our food delivery app integration means you can order food on the go and have it delivered to your charging station, all without having to enter your location.
                </p>
            </div>
        </div>
        <img
          src={chargerImage}
          alt="EV charger and a car"
          className="absolute inset-0 -z-10 h-full w-full object-contain object-center md:object-right opacity-50"
        />
      </div>      
    </div>

    )
  }