'use client';
import { useState, useEffect } from 'react';
import LogoAnimation from '@/components/LogoAnimation';
import Marquee from "@/components/ui/marquee";
import { AiOutlineTaobao } from "react-icons/ai";
import { FaXing } from 'react-icons/fa6';
import { FaTiktok } from 'react-icons/fa6';
import { SiXiaohongshu } from 'react-icons/si';


export default function Shop() {
  // This is a placeholder. In a real application, you'd fetch products from a database or e-commerce platform.
  const products = [
    { id: 1, name: "", price: 9.99, description: "" },
    { id: 2, name: "", price: 9.99, description: "" },
    { id: 3, name: "", price: 9.99, description: "" },
    { id: 4, name: "", price: 9.99, description: "" },
    { id: 5, name: "", price: 9.99, description: "" },
    { id: 6, name: "", price: 9.99, description: "" },
  ]

  // 添加状态控制当前显示的图片
  const [currentImage, setCurrentImage] = useState(0);

  // 自动轮播效果
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 12);
    }, 500); // 每0.1秒切换一次

    return () => clearInterval(timer);
  }, []);

  return (
      <div className="fixed w-screen h-screen overflow-hidden">
        <div className="custom-grid fixed h-screen overflow-hidden --loaded md:pt-40 pb-12 pt-32">
          <div className="col-start-1 col-end-5 md:col-end-9 lg:col-end-5 xl:col-end-6 h-full overflow-hidden hidden lg:block">
            <div className="relative w-full h-full flex items-end">
              {[0,1,2,3,4,5,6,7,8,9,10,11].map((num, index) => (
                <div
                  key={`LazyImage:${num}`}
                  className={`lazy-image overflow-hidden w-full absolute inset-0  items-end ${
                    currentImage === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="relative w-full h-full flex items-end">
                    <img
                      src={`/images/product (${num}).jpg`}
                      className="max-w-full w-auto h-auto"
                    />
                    <svg viewBox="0 0 1620 2160" className="block-w-full"></svg>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* 右边 */}
          <div className="col-start-1 col-end-5 lg:col-start-5 xl:col-start-6 md:col-end-9 lg:col-end-13 flex flex-col justify-end gap-16 md:gap-32 lg:gap-0">
            {/* 产品列表 */}
            <div className="h-full w-full flex flex-nowrap">
              <div className="w-4/5 h-full overflow-hidden">
                <Marquee className="" pauseOnHover>
                {/* 产品卡片 */}
                {products.map((product) => (
                  <div 
                    key={product.id}
                    className="w-shop mx-4 overflow-hidden backdrop-blur-sm"
                  >
                    <div className="w-full h-auto">
                      <img 
                        src={`/images/shop (${product.id}).jpg`} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="">
                      <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                      <p className="text-gray-400">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-light text-gray-400">${product.price}</span>
                      </div>
                    </div>
                  </div>
                  ))}
                </Marquee>
              </div>
              {/* 更多 */}
              <div className="w-1/5 h-full">
                <div className="flex flex-col">
                  <span className="josefin-sans-regular leading-none text-minhero">More</span>
                  <span className="josefin-sans-regular text-minhero">Info</span>
                  <span className="flex items-center">
                    <span className="josefin-sans-regular text-5xl">In my</span>
                    <a href="https://www.xiaohongshu.com/user/profile/58f25ae482ec3902b9129722" target="_blank" rel="noopener noreferrer" className="group relative text-center">
                      <SiXiaohongshu className="text-5xl text-red-500 mx-4" />
                      {/* 二维码弹出层 */}
                      <div className="absolute top-14 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 ease-in-out pointer-events-none
                              group-hover:translate-y-0 group-hover:opacity-100 
                              h-64 w-56 rounded-2xl bg-slate-400 backdrop-blur-md flex flex-col">                  
                        <span className="text-white pt-sans-regular text-3xl leading-normal">Click or scan</span>
                        <img 
                          src="/images/QR/xhsewm.png" 
                          alt="小红书二维码" 
                          className="w-48 h-48 object-cover mx-auto"
                        />
                      </div>
                    </a>
                    <span className="josefin-sans-regular text-5xl">shop</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col text-accent text-48 sm:text-56 md:text-80 lg:text-hero leading-none">
              <span className="flex items-end">
                <LogoAnimation />
              </span> 
              <div className="flex items-end md:gap-12 justify-between h-24">
                <span className="pt-sans-regular text-5xl font-normal tracking-serif text-28 sm:text-32 md:text-48 lg:text-8xl flex">
                  Handmade
                </span>
                <span className="josefin-sans-regular tracking-serif text-5xl text-28 sm:text-32 md:text-48 lg:text-8xl">
                  Design
                </span> 
                <span className="font-serif tracking-serif text-28 sm:text-32 md:text-48 lg:text-8xl md:mt-12">
                  + Craft
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

