import React from 'react'
import { Product } from 'interfaces'
import { useRouter } from 'next/router';

interface ProductCardProps {
  item: Product,
  index: number,
}

const ProductCard: React.FC<ProductCardProps> = ({item, index}) => {
  const router = useRouter();

  const onProduct = (item: Product) => {    
    router.push(`/${item.name}/${item._id}`)
  }

  return (
    <div  key={index} className='bg-white shadow-sm relative flex flex-col align-center p-3 rounded-xl cursor-pointer' >
      <img
      onClick={() => onProduct(item)}
        src={item.avatar}
        alt=''
        className='h-[250px] w-auto object-contain mb-3'
      />
      <span className='text-center font-semibold mt-auto max-h-[48px] overflow-hidden'>{item.name}</span>
      <span className='text-center text-lg font-extrabold text-green-500 mt-auto'>${item.price}</span>
    </div>
  )
}

export default ProductCard