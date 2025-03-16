import React from 'react'
import HomeSectionHeader from './homeSectionHeader'
import FoodCard from '../foodCard'

function HomeFoodList() {

    const foods = [
        {
            name: 'Pizza',
            foods: [
                {
                    name: 'Chicken Pizza',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRknofa_9Vpomis8CZcooxiIe6afdQnVB6HXw&s',
                    price: 350
                },
                {
                    name: 'Veg Pizza',
                    image: 'https://sugarspunrun.com/wp-content/uploads/2024/04/buffalo-chicken-pizza-1-of-1.jpg',
                    price: 250
                },
            ]
        },

        {
            name: 'Burger',
            foods: [
                {
                    name: 'Chicken Burger',
                    image: 'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg',
                    price: 150
                },
                {
                    name: 'Veg Burger',
                    image: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/102cf51c-9220-4278-8b63-2b9611ad275e/Derivates/3831dbe2-352e-4409-a2e2-fc87d11cab0a.jpg',
                    price: 100
                },
            ]
        },

        {
            name: 'Momo',
            foods: [
                {
                    name: 'Fired Momo',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR03DiTbp4DJxKJ6HAZmgISvn-D8IFQKjyUuA&s',
                    price: 170
                },
                {
                    name: 'Jhol Momo',
                    image: 'https://eatyourworld.com/wp-content/uploads/2011/09/momo-jhol-kathmandu.jpg',
                    price: 170
                },
                {
                    name: 'C Momo',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa2EE-5HUhOCBng0lgc3GGzlTTZ3QB7OuFjw&s',
                    price: 170
                },
            ]
        }
    ]

    return (
        <div className='flex flex-col gap-10'>

            {
                foods.map((item, index) => {
                    return (
                        <div className='flex flex-col gap-5'>
                            <HomeSectionHeader title={item.name} />
                            <div className="flex gap-10">
                                {
                                    item.foods.map((food, foodIndex) => {
                                        return <FoodCard name={food.name} image={food.image} price={food.price} />
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default HomeFoodList