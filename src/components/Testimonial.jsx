import React from "react";

async function getData(){
  const baseUrl = process.env.BASE_URL
  const data = await fetch(`${baseUrl}/api/TestimonialList`)
  if(!data.ok){
    throw new Error('Something went wrong')
  }
  return data.json()
}


const Testimonial =async () => {
  const data = await getData()
  
  return (
    <>
      <section className="  pt-20 pb-12">
        <div className="container mx-auto">
          <div className="max-w-lg mx-auto mb-12 text-center">
            <h2 className="my-2 text-3xl md:text-4xl font-bold font-heading">
              Our Customers Very Happy With Our Services
            </h2>
            <p className="text-blueGray-400 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo et iaculis.
            </p>
          </div>
          <div className="flex flex-wrap">
            

            {data.map((value)=>{
              return(
                <div className="w-full md:w-1/2 py-5 md:px-5">
              <div
                className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                data-wow-delay=".1s"
              >
                <div className="flex items-center mb-4">
                  <img
                    className="h-16 w-16 rounded-full object-cover"
                    src={value.image}
                    alt="Monst"
                  />
                  <div className="pl-4">
                    <strong className="mt-6 mb-2 text-md">
                      {value.name}
                    </strong>
                    <p className="text-gray-500 text-xs mt-3">
                      {value.desigbation}
                    </p>
                  </div>
                </div>
                <p className="leading-loose text-blueGray-400 mb-5">
                 {value.msg}
                </p>
              </div>
            </div>
              )
            })}

            
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
