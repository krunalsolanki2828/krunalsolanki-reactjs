import Header from 'components/Header';
import { Product } from 'interfaces';
import React from 'react'
import { getProduct } from 'utils/api';

const ProductDetail = ({ PRODUCT }) => {

  return (
    <div className="min-h-screen container mt-6 mx-auto relative">
      <Header />
      <div className='lg:px-[15%] px-4'>
        <div className='flex flex-col md:flex-row mt-10'>
          <img
            src={PRODUCT.avatar}
            alt=""
            className='max-h-[35vh] md:h-[350px] md:w-[300px] object-contain bg-white rounded-xl'
          />
          <div className='flex flex-col mt-4 justify-between md:pl-5 md:mt-0'>
            <span className='text-[40px] font-bold'>{PRODUCT.name}</span>
            <span className='text-[35px] font-extrabol'>
              ${PRODUCT.price}
            </span>
          </div>
        </div>
        <hr className='mt-7 mb-5 border-gray-400' />
        <div className='flex flex-col'>
        <span className='text-[30px] font-semibold'>Description</span>
        <span className='text-gray-500'>
          {PRODUCT.description}
        </span>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail;

export async function getServerSideProps({ req, res, params }) {
  const id = params.id;
  const product: Product = await getProduct(id);
  
  return {
    props: {
      PRODUCT: product
    },
  }
}