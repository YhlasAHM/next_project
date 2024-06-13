/* 'use client'
import React from 'react'
import Card_ from '../components/card/Card'


const Products = () => {

    let arr = ['lorem', 'asjdksadk', 'asjdkashdjksahdjdjkfkdljfldkjfkldjflkdfjkldjfksha', 'asdhjhd', 'asdhsajhdhdsjdsdsd', 'asdjhsdhsjhdsdhhjsdhjsdhjsdhjsd', 'asdhjshdjshd', 'asdjshdhjdhhhjsdhshjdsjhdhjddsds']

    return (
        <>
            <div className='Products pb-[50px]'>
                <div className="container mx-auto">
                    <h1>Products</h1>
                    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px]'>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                                <div key={item} className='col-span-1 h-full'>
                                    <Card_ content={arr[item - 1]} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products */