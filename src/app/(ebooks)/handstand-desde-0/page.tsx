"use client"
import React from 'react'
import Image from 'next/image'

const Page = () => {


    const handleDownload = () => {
      const file = '/ebooks/handstand-desde-0.pdf';
      const link = document.createElement('a');
      link.href = file;
      link.setAttribute('download', 'handstand-desde-0.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };


  return (
    <>
      <div className='bg-transparent'>
        <div className='bg-opacity-50 py-10'>
          <h2 className='text-center text-4xl sm:text-5xl font-extrabold pt-16 pb-8'>Handstand <br className='sm:hidden' /> desde 0</h2>
          <div className='max-w-[800px] mx-auto p-3 '>
            <p className='text-center font-medium text-gray-700'>
              Este Ebook está diseñado para ayudarte a alcanzar tu primer handstand, incluso si nunca lo has intentado antes. Contiene progresiones, ejercicios y consejos adicionales para que logres tú objetivo lo más rápido posible.
            </p>
          </div>
          <div className='relative w-[200px] h-[266px] sm:w-[300px] sm:h-[400px]   mx-auto mt-5'>
            <Image fill style={{objectFit:'contain'}} alt="" src={"/images/hand-stand-desde-0-3D.png"} />
          </div>

          <div className='flex justify-center w-full mt-4 mb-32'>
            <button onClick={handleDownload} className="border-none outline-none bg-blue-500 sm:text-2xl hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto">
              Click para descargar
            </button>
          </div>

        </div>
      </div>


    </>
  )
}

export default Page




//<div className="bg-gray-800 min-h-screen py-10 pb-32">
//<form onSubmit={(e) => {e.preventDefault();handleSubmit(setStatus)}} className="bg-gray-900 sm:w-3/4 lg:w-1/2 p-10 mx-auto rounded shadow text-gray-300 font-bold">
//  <label className="block mb-2">Nombre</label>
//  <input type="text" className="border border-gray-900 mb-5 shadow w-full p-3 bg-gray-700 text-gray-300 placeholder-gray-500" placeholder="" />
//  <label className="block mb-2">Email</label>
//  <input type="text" className="border border-gray-900 mb-5 shadow w-full p-3 bg-gray-700 text-gray-300 placeholder-gray-500" placeholder="" />
//
//  <label className="block mb-2 py-4 font-medium">
//    <input type="checkbox" defaultChecked name="promotions"  className="mr-2" />
//    Quiero recibir emails sobre calistenia y entrenamiento 
//  </label>
//
//  <button type="submit" className="block border bg-blue-500 hover:bg-blue-600 w-full text-blue-100 font-bold p-4 rounded-lg">¡Quiero mi Ebook!</button>
//  { status === "success" && <p>El ebook fue enviado a tu correo, ten lindo dia :)</p> }
//</form>
//</div>