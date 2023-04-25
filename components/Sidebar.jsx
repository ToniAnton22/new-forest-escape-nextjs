import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {RxSketchLogo, RxDashboard, RxPerson} from 'react-icons/rx'
import {FiSettings} from 'react-icons/fi'
import {SlSpeedometer} from 'react-icons/sl'
import {SlEnergy} from 'react-icons/sl'
import {MdOutlineEnergySavingsLeaf} from 'react-icons/md'

const Sidebar = ({children}) => {
  return (
    <div className='flex'>
        <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
            <div className='flex flex-col items-center'>
                <Link href='/'>
                    <div className='bg-green-800 text-white p-3 rounded-lg inline-block'>
                        <SlEnergy size={20}/>
                    </div>
                </Link>
                <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
                <Link href='/createmeter'>
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer  my-4 p-3 rounded-lg inline-block'>
                        <MdOutlineEnergySavingsLeaf size={20}/>
                    </div>
                </Link>
                <Link href='/customers'>
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer  my-4 p-3 rounded-lg inline-block'>
                        <RxPerson size={20}/>
                    </div>
                </Link>
                <Link href='/orders'>
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer  my-4 p-3 rounded-lg inline-block'>
                        <SlSpeedometer size={20}/>
                    </div>
                </Link>
                <Link href='/energyusage'>
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer  my-4 p-3 rounded-lg inline-block'>
                        <FiSettings size={20}/>
                    </div>
                </Link>
                <Link href='/generatemeter'>
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer  my-4 p-3 rounded-lg inline-block'>
                        <SlEnergy size={20}/>
                    </div>
                </Link>
                <Link href='/setenergy'>
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer  my-4 p-3 rounded-lg inline-block'>
                        <SlEnergy size={20}/>
                    </div>
                </Link>
                <Link href='/instructions'>
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer  my-4 p-3 rounded-lg inline-block'>
                        <SlEnergy size={20}/>
                    </div>
                </Link>
            </div>
        </div>
        <main className='ml-20 w-full'>{children}</main>
    </div>
  )
}

export default Sidebar