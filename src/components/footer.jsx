import React from 'react'

function Footer() {
    return (
        <>
            <div className='bg-white'>
                <div className="w-[80%] mx-auto py-10 flex">

                    <div className='flex-1'>
                        <img className='w-[20%]' src={require('../assets/logo.png')} alt="" />
                        <p className='py-5 text-sm text-text'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum cumque velit doloremque porro quas. Commodi perspiciatis nulla explicabo officia facilis quos magnam neque maxime blanditiis, ratione soluta quas pariatur, voluptatum dolor? Facere omnis dolore earum, culpa cum quae et rerum.
                        </p>
                    </div>


                    <div className='flex-1'>
                        <h1 className='text-xl font-semibold text-text'>Quick Links</h1>
                        <ul className='py-5 text-sm text-text'>
                            <li>Home</li>
                            <li>Menu</li>
                            <li>Restaurant</li>
                            <li>Order</li>
                            <li>Contact</li>
                        </ul>
                    </div>


                    <div className='flex-1'>
                        <h1 className='text-xl font-semibold text-text'>Contact Us</h1>
                        <ul className='py-5 text-sm text-text'>
                            <li>Address: Kathmandu, Nepal</li>
                            <li>Phone: 9841234567</li>
                            <li>Email:
                                <a href="mailto:aayofood@gmaill.com" className='text-primary'>@aayofood</a>
                            </li>
                        </ul>

                        <div className='flex gap-5'>
                            <a href=""><i class="fa-brands fa-facebook"></i></a>

                            <a href="">
                                <i class="fa-brands fa-square-instagram"></i>
                            </a>

                            <a href="">
                                <i class="fa-brands fa-square-x-twitter"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <div className='bg-primary py-5 text-center text-white'>
                <p>&copy; 2021 Aayo Food. All Rights Reserved.</p>
            </div>
        </>
    )
}

export default Footer