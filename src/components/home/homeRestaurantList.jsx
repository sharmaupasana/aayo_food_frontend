import React from 'react'
import HomeSectionHeader from './homeSectionHeader'
import RectangleTitle from '../rectangleTitle'

function HomeRestaurantList() {

    const restaurants = [
        {
            'name': 'Master Chef',
            'image': 'https://marketplace.canva.com/EAFpeiTrl4c/2/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-a1RYzvS1EFo.jpg',
        },
        {
            'name': 'Alderanie',
            'image': 'https://marketplace.canva.com/EAGKDhXEhoY/1/0/1600w/canva-brown-and-white-simple-modern-professional-catering-logo-Dvz9NG3gqk0.jpg',
        },
        {
            'name': 'Food Planet',
            'image': 'https://cdn2.vectorstock.com/i/1000x1000/73/06/cooking-and-restaurant-logo-design-vector-29707306.jpg',
        },

    ]

  return (
    <div className='flex flex-col gap-5'>
        <HomeSectionHeader title={'Cafe & Restaurants'} />

        <div className='flex gap-10'>
            
            {
                restaurants.map((item, index) => {
                    return <RectangleTitle name={item.name} image={item.image} /> 
                })
            }

        </div>
    </div>
  )
}

export default HomeRestaurantList