import { useQuery } from "@apollo/client"
import { useState } from 'react';
import ShopItem from './ShopItem';
import { ALL_CLOTHS } from '../services/graphQL/queries/cloth'

const Shop = () => {
    const [info, setInfo] = useState(true)
    const { data } = useQuery(ALL_CLOTHS)

    return (
        <div>
            <div className='w-full bg-gray-50 flex flex-col gap-1 justify-center items-center shadow-inner h-40'>
                <div className='font-bold text-2xl'>Shop</div>
                <div>Home / Shop</div>
            </div>

            <div className='flex flex-col sm:gap-4 sm:mt-4 justify-center p-8 sm:p-0'>


                <div className={info ? `alert w-2/4 sm:w-full  m-auto` : "hidden"}>
                    <div className="flex flex-row justify-between items-center w-full" >
                        <div className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2196f3" className="w-6 h-6 mx-2">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <label>Click on the product below to open its respective page!</label>
                        </div>
                        <span onClick={() => { setInfo(false) }} className='text-2xl cursor-pointer'>×</span>
                    </div>
                </div>

                <div className='flex items-center sm:flex-col sm:gap-4 justify-between pr-12 pl-12'>
                    <div>Showing <strong> {data?.clothMany.length}</strong> of  <strong> {data?.clothMany.length}</strong> results</div>

                    <div className='flex gap-4 '>
                        <select defaultValue="Most Recent" className="font-normal bg-gray-100 border-none select focus:border-gray-300 max-w-xs ">
                            <option >Most Recent</option>
                            <option>Older</option>
                        </select>
                        <select defaultValue="10" className="font-normal bg-gray-100 border-none  select  max-w-xs">
                            <option>10</option>
                            <option>20</option>
                            <option>30</option>
                        </select>

                    </div>
                </div>

                <div className='flex flex-row flex-wrap justify-center p-8'>

                    {data?.clothMany.map(cloth => {
                        return (
                            <ShopItem key={cloth?._id} id={cloth?._id} image={cloth?.image} title={cloth?.title} price={cloth?.price} />
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Shop