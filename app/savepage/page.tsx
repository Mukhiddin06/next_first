"use client";
import React from 'react'
import Image from 'next/image'
import Shop from "../../public/shop.png"
import Link from 'next/link';

const SavePage = () => {

  return (
    <div className="pl-[45px] pr-[55px] pb-[63px] bg-[#FFDF8C]">
      <div className="pl-[290px] pr-[210px] pt-[94px] bg-white">
        <div className="text-center pb-[163px] w-[547px] mx-auto">
          <p className="font-bold text-[32px] leading-[38.98px] mb-[10px]">Корзина пустая </p>
          <p className="text-[18px] leading-[26px] text-[#777777] mb-[47px]">Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
          <Image className="h-[255] mb-[74px] mx-auto" src={Shop} alt="Shopping" width={300} height={255} />
          <Link href={"/"} className="rounded-[30px] bg-[#282828] block text-white w-[210px] mx-auto py-[15px] font-bold">Вернуться назад</Link>
        </div>
      </div>
    </div>
  )
}

export default SavePage