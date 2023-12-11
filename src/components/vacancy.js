import React from "react";
import  {useState, useEffect} from'react';
import axios from 'axios'
import { Link } from "react-router-dom";

const Vacancy = () =>{
    
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

        return(
          <section className="p-5 bg-[url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v880-kul-11.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=b2a0ea2be15471ece74e3ed9f9acf970')]">
            <div className="container mx-auto mt-10 mb-10">
              <h1 className="text-center text-4xl text-dark-600 dark:text-white font-bold ">Temukan Pekerjaan Terbaikmu!</h1>
            </div>
            <div className="container w-2/2 m-20 flex-wrap flex gap-10 justify-start">
              {/* Batas awal Card section */}

              {data !== null && data.map((result) => {
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
              {result.job_description === null ? "-" : result.job_description.length > 60
                ? result.job_description.substr(0, 60) + "..." : result.job_description}
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
          </section>
      )


    
    // return(
    //     <section className="p-5">
    //   <div className="container mx-auto mt-10">
    //     <h1 className="text-center text-4xl text-dark-600 dark:text-white font-bold ">Lowongan Pekerjaan Populer!</h1>
    //   </div>
    //   <div className="container mx-auto flex-wrap flex gap-10 items-center justify-start">
    //     {/* Batas awal Card section */}

    //     {data !== null && data.map((result) => {
    //         return (
    //           <div className="w-1/2 mt-10 h-72 flex mx-auto max-w-[23rem] bg-white shadow-lg rounded-lg overflow-hidden">
    //             <img src={result.company_image_url} alt="data-image" className="flex flex-col items-center my-auto pb-20 pt-20"/>
    //             <div className="w-2/3 p-4 my-auto">
    //               <h1 className="text-dark-600 font-bold text-xl">
    //                 {result.title}
    //               </h1>
    //               <small>{result.company_name}</small>
    //               {/* <p className="mt-2 text-dark-600 text-sm">
    //                 {result.description.length>50 ? `${result.description.substring(0, 50)}...` : result.description}
    //               </p> */}
    //               <div className=" item-center mt-2 text-dark-500">
    //               <span>{result.company_city}</span>
    //               <span>{result.job_type}</span>
    //               </div>
    //               <div className="flex item-center justify-between mt-3">
    //                 <Link to={`https://dev-example.sanbercloud.com/api/job-vacancy/${result.id}`} className="px-3 py-2 bg-dark-800 text-white text-xs font-bold uppercase rounded">Detail
    //                 </Link>
    //               </div>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     {/* Batas akhir Card section */}
    //   </div>
    // </section>
    // )
    

        // return(
        //     <section className="p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        //         <div>
        //       <h1 className="text-center text-xl font-bold ">Lowongan yang anda Butuhkan!</h1>
        //         </div>
        //       {data !== null && data.map((result)=>{
        //         return(
        //             <section>
        //             <div className="mt-10 h-72 flex max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
        //         <img src={result.company_image_url} alt="data-image" className="w-1/3 bg-cover bg-center bg-landscape"/>
        //         <div className="w-2/3 p-4">
        //           <h1 className="text-gray-900 font-bold text-2xl">
        //             {result.title}
        //           </h1>
        //           <small>{result.company_name}</small>
        //           {/* <p className="mt-2 text-gray-600 text-sm">
        //             {result.description.length>50 ? `${result.description.substring(0, 50)}...` : result.description}
        //           </p> */}
        //           <div className=" item-center mt-2 text-gray-500">
        //             <span>{result.company_city}</span>
        //             <span>{result.job_type}</span>
        //           </div>
        //           <div className="flex item-center justify-between mt-3">
        //             <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"> Details
        //             </button>
        //           </div>
        //         </div>
        //       </div></section>
        //         )
        //       })}
        //     </section>
        // )
}

export default Vacancy