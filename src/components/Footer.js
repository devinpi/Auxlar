import React from 'react';
import classes from './navigation.module.css'

const Footer = () => {

    return (
        <div className={classes.hero}>
            <div className='py-2 sm:py-2 text-center'>
                <p className="text-sm font-semibold leading-6 text-white">2023, Auxlar</p>
                <p className="text-sm leading-6 text-white">Your next EV app</p>
            </div>
        </div>
    )
};

export default Footer;