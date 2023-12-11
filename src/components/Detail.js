import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Detail = () =>{
    const {Id} = useParams()
    const [data, setData] = useState(null)

    useEffect(() => {
        if(Id !== undefined) {
         axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${Id}`)
            .then((result) => {
              setData(result.data)
            })
          }
  
      }, [])

		const handleRupiah = (angka, prefix)=>{
			var number_string = angka.replace(/[^,\d]/g, '').toString(),
			split   		= number_string.split(','),
			sisa     		= split[0].length % 3,
			rupiah     		= split[0].substr(0, sisa),
			ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);
			if(ribuan){
				let separator = sisa ? '.' : '';
				rupiah += separator + ribuan.join('.');
			}
 
			rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
			return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
		}

        const handleStatus = (value) =>{
            if(value===1){
                return "Open Hiring"
            }
        }

       return (
        <>
            <div className="flex justify-center items-center bg-[url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v880-kul-11.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=b2a0ea2be15471ece74e3ed9f9acf970')] ">
          </div>

          
          <div className="flex flex-col items-center px-4 sm:px-8 md:px-16 bg-[url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v880-kul-11.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=b2a0ea2be15471ece74e3ed9f9acf970')]">
            <div className="shadow-md rounded-lg max-w-4xl w-full">
              <div className="px-6 py-4 flex justify-start">
                  <div className="flex items-center mb-4 mr-9">
                    <img alt="cmpy-img" src={data?.company_image_url} className="max-w-[200px] mb-3" />
                    </div>

                <div className="border-t border-gray-200 my-4"></div>

                <div className="py-4">
                  <div className="mb-4">
                      <h1 className='text-3xl font-bold'>{data?.title}</h1>
                      <p className='mt-2'>({data?.job_type})</p>
                      <p className='mt-2'><strong>{data?.company_name}-{data?.company_city}</strong></p>
                      <p className='mt-2'><strong>Status : </strong>({handleStatus(data?.job_status)})</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                      <strong>Deskripsi : </strong>{data?.job_description}
                    </h4>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                      <strong>Kualifikasi : </strong> {data?.job_qualification}
                    </h4>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                      <strong>Status Pekerja : </strong> {data?.job_tenure}
                    </h4>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                      <strong>Gaji : </strong> {handleRupiah(data?.salary_min + "")} - {handleRupiah(data?.salary_max + "")} / Bulan
                    </h4>
                  </div>
                  
                  <Link to='/' className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg float-right mb-4">
                    Lamar sekarang
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </>
       )
}

export default Detail