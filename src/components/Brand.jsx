import React from "react";

async function getData(){
  const baseUrl = process.env.BASE_URL
  const data = await fetch(`${baseUrl}/api/BrandList`)
  if(!data.ok){
    throw new Error('Something went wrong')
  }
  return data.json()
}


const Brand = async () => {

  const data = await getData()
  
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-2">
            
            {
              data.map((value)=>{
                return(
                  <div className="mb-4 w-full md:w-1/2 lg:w-1/4 px-2">
                   <div className="py-16 bg-gray-50 rounded">
                     <a href="#">
                       <img
                        className="mx-auto h-8"
                          src={value.image}
                          alt=""
                           />
                </a>
              </div>
            </div>
                )
              })
            }
 
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
