import React from 'react'
import Banner from '../components/banner'
import HomeCategoryList from '../components/home/homeCategoryList'
import HomeRestaurantList from '../components/home/homeRestaurantList'
import HomeFoodList from '../components/home/homeFoodList'

function Home() {
  return (
    <div className='bg-gray-100'>
        <div className='w-[80%] flex flex-col gap-10 mx-auto pt-5'>

            <Banner />

            <HomeCategoryList />

            <HomeRestaurantList />

            <HomeFoodList />
            
            <div></div>

        </div>
    </div>
  )
}

export default Home