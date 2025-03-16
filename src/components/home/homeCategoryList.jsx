import React from 'react'
import HomeSectionHeader from './homeSectionHeader'
import CircleTitle from '../circleTitle'

function HomeCategoryList() {

    const categories = [
        {
            name: 'Pizza',
            image: 'https://www.allrecipes.com/thmb/aefJMDXKqs42oAP71dQuYf_-Qdc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6776_Pizza-Dough_ddmfs_4x3_1724-fd91f26e0bd6400a9e89c6866336532b.jpg'
        },
        {
            name: 'Burgers',
            image: 'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg'
        },
        {
            name: 'Momo',
            image: 'https://tb-static.uber.com/prod/image-proc/processed_images/6f0d44816690095cf681dd8710b8f1f6/c9252e6c6cd289c588c3381bc77b1dfc.jpeg'
        },
    ]

    return (
        <div className='flex flex-col gap-5'>
            <HomeSectionHeader title={'Food Categories'} />

            <div className='flex gap-10'>

                {
                    categories.map((item, index) => {
                        return (
                            <CircleTitle name={item.name} image={item.image} />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default HomeCategoryList