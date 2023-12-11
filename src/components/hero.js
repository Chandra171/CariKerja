import React from 'react'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Hero = () =>{

    const [data, setData] = useState(null)

  useEffect(()=>{
      axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
      .then((result)=>{
          setData([...result.data.data])
      })
      .catch((error)=>{

      })
  }, [])

  console.log(data)

    return (
        <section className="bg-[url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v880-kul-11.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=b2a0ea2be15471ece74e3ed9f9acf970')] bg-opacity-10">
            <div className="bg-center bg-no-repeat bg-[url('https://www.dsi.web.id/wp-content/uploads/2022/06/cover-lowongan-kerja.png')] bg-gray-700 bg-blend-multiply bg-[length:1280px_720px]">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Cari Pekerjaan Impianmu Disini!</h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">lamar pekerjaan yang kamu inginkan, dan perusahaan akan menghubungimu segera.</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <Link to='/job-vacancy' className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Get started
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>
                </div>
            </div>
            </div>
            
            <div className="container mx-auto mt-10 mb-10">
              <h1 className="text-center text-4xl text-dark-600 dark:text-white font-bold ">Lowongan Pekerjaan Populer!</h1>
            </div>
            <div className="container w-2/2 flex-wrap flex gap-10 justify-center">
              {/* Batas awal Card section */}

              {data !== null && data.slice(0,3).map((result) => {
                  return (
                    <>   
              <div className="flex flex-col  h-fu;; w-full lg:max-w-xs p-6 bg-white overflow-hidden border-solid border-l-2 border-r-2 border-t-2 border-b-2 border-gray-400">
            <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img alt="profil" src={result.company_image_url} className="mx-auto object-cover max-w-[100px] " />
              <div className="flex flex-col items-start ml-4 ">
                <span className="text-gray-900 font-bold">
                  {result.company_name}
                </span>
                <span className="text-gray-500 font-light text-sm">
                  {result.company_city}
                </span>
                <span className="text-gray-500 font-light text-sm">
                  {result.created_at}
                </span>
              </div>
            </div>
              <div className="border-2 border-blue-900 mt-5"></div>
              <br/><p className="text-gray-900 font-bold text-sm">
                {result.title}
              </p>
              <p className="text-gray-500 font-normal text-sm grow">
              {result.job_description === null ? "-" : result.job_description.length > 50
                ? result.job_description.substr(0, 50) + "..." : result.job_description}
              </p>
              <div class="flex mt-4 space-x-3 md:mt-6 justify-end">
              <Link to={`/job-vacancy/${result.id}`} key={result.id} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Detail 
              </Link>
              </div>
            </div>
                      </>
                  );
                })}
              {/* Batas akhir Card section */}
            </div>

            <div className='mt-10 flex justify-center'>
            <Link to='/job-vacancy' className='underline md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Lihat Lowongan Pekerjaan Lainnya</Link>
            </div>

        </section>

    )
}

export default Hero