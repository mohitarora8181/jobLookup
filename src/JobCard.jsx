import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'


const JobCard = ({ data }) => {
    return (
        <div key={data.jdUid} className='bg-gray-100 h-[500px] overflow-hidden flex flex-col justify-between w-1/5 max-sm:w-full m-5 border border-gray-400 shadow-md shadow-gray-300 rounded-lg select-none'>
            <div className='w-full h-1/6 gap-4 flex flex-col justify-between align-middle m-2 p-3'>
                <div className='flex gap-5 h-full'>
                    <img src={data.logoUrl} className='rounded-full h-full pointer-events-none'></img>
                    <span className='flex flex-col gap-1 w-full justify-start self-center'>
                        <h3 className='text-left font-semibold whitespace-nowrap'>{data.companyName}</h3>
                        <h2 className='text-left font-medium ml-2 text-gray-400'>{data.jobRole}</h2>
                    </span>
                </div>
                <span className='flex w-full justify-between'>
                    <span className='flex flex-col'>
                        <p className='font-sans text-sm'>Estimated Salary</p>
                        <p className=' text-gray-600 text-sm'>{(data.minJdSalary != null ? data.minJdSalary + " " + data.salaryCurrencyCode + " - " : "") + data.maxJdSalary + " " + data.salaryCurrencyCode}</p>
                    </span>
                    <span className='flex gap-1 mr-2 justify-center align-middle'>
                        <FaLocationDot color='gray' className='self-center' opacity={80} size={20} />
                        <h6 className=' whitespace-nowrap self-center'>{data.location}</h6>
                    </span>
                </span>
            </div>
            <div className="overflow-hidden bg-gray-100 w-full h-auto p-5 mt-10 text-wrap flex flex-col gap-2 bg-gradient-to-b from-transparent to-gray-100">
                <h3 className='font-semibold'>Job Details</h3>
                <p className='h-full line-clamp-6'>{data.jobDetailsFromCompany}</p>
            </div>
            <div className='w-full bg-gray-100 p-4 pt-0 flex flex-col justify-end gap-4'>
                <p className=' text-gray-600 ml-2'>Minimum experience :<br />
                    <span className='ml-5'>{data.minExp ? data.minExp + " - " + data.maxExp + " years" : "0 year"} </span>
                </p>
                <a href={data.jdLink} target='_blank' className='text-white text-center w-full font-semibold p-3 rounded-full bg-indigo-500 hover:shadow-xl shadow-indigo-300 transition-all duration-300 hover:-translate-y-1'>Easy Apply</a>
            </div>
        </div>
    )
}

export default JobCard
