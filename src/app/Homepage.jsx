"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
import Specials from "/src/app/Specials";
import TestsArray from "/src/app/TestimonialsArray.jsx";
import Testimonial from "/src/app/Testimonial.jsx";
import MenuArray from "/src/app/MenuArray.jsx";
import { BiBowlRice } from "react-icons/bi";
import { PiFan } from "react-icons/pi";
import { LuLaugh } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import Link from "next/link.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRouter } from "next/navigation";

 const settings = {
   dots: true,
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   autoplay: true,
   speed: 3000,
   autoplaySpeed: 3000,
   cssEase: "linear",
   responsive: [
     {
       breakpoint: 768, // for tablets and small screens
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1,
       },
     },
     {
       breakpoint: 500, // for mobile
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
       },
     },
   ],
 };


const TestimonialsSlider = ({ testimonials }) => { 

  return (
    <section className="py-10" style={{ overflow: "hidden" }}>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <Testimonial
              id={testimonial.id}
              img={testimonial.img}
              name={testimonial.name}
              testimonial={testimonial.testimonial}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

function Homepage({ setClose, pproducts }) {
  const [products, setProducts] = useState(pproducts);
  const router = useRouter()

  const handleClick = () => {
    router.push('/products');
  }

  const Cadd = products.map((item) => (
    <Link key={item._id} href={`/products/${item._id}`} passHref>
      <Specials
        id={item._id}
        img={item.img}
        menu={item.title}
        price={item.prices[0]}
        description={item.desc}
      />
    </Link>
  ));

  return (
    <>
      <section className="overflow-x-hidden">
        <main className="grid grid-rows-2 lg:grid-cols-5 mt-16 lg:mt-0 justify-items-center h-[30rem] lg:h-mainHeight w-screen lg:w-full  lg:pt-36">
          <div className="lg:col-span-3 px-4 lg:pl-10  flex items-start">
            <div className=" h-3/4 flex flex-col items-center lg:items-start  gap-2 lg:gap-5 mt-20 lg:mt-52">
              <h1 className="font-extrabold text-slate-900 text-center lg:text-start weight text-5xl lg:text-7xl">
                Handmade,
              </h1>
              <h1 className="w-full lg:w-3/4 font-extrabold text-center lg:text-start text-slate-900 weight text-5xl lg:text-7xl">
                With an Extra
              </h1>
              <h1 className="w-full lg:w-3/4 font-extrabold text-center lg:text-start text-slate-900 weight text-5xl lg:text-7xl">
                Pinch of <span className="love">Love</span>
              </h1>
              <h4 className="text-2xl lg:text-3xl mt-2 lg:mt-0  w-full lg:w-3/4 text-center lg:text-start lg:leading-10 space-x-4 [word-spacing:5px] font-medium text-gray-800">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h4>
              <button className="bg-yellow-500 lg:text-lg text-white flex flex-row text-center  px-2 lg:px-8  gap-1  py-2 lg:py-4 mt-4  rounded-full w-36 lg:w-56">
                <FaCartShopping className=" mt-1 mx-auto" />
                <span className="mx-auto" onClick={handleClick}>ORDER NOW</span>
              </button>
            </div>
          </div>

          <div className="  hidden  lg:block lg:col-span-2 lg:ml-60 bg-yellow-500 mt-2 rounded-l-full pizza-background ">
            <Image
              src="/images/pizza.png"
              alt="next.js Image"
              width={450}
              height={300}
              className=" absolute   topImage  right-72 "
            />

            <Image
              src="/images/pizza2.png"
              alt="next.js Image"
              width={200}
              height={100}
              className=" absolute pizza2-position right-36"
            />

            <Image
              src="/images/pizza-onion.png"
              alt="next.js Image"
              width={110}
              height={70}
              className=" absolute onionTop onionPosition "
            />
          </div>
        </main>
        <section className="px-4 lg:px-10 grid lg:grid-cols-3 lg:items-center h-[40rem] lg:h-96  lg:-mt-20">
          <div>
            <Image
              src="/images/pizza-pieces.png"
              alt=""
              width={400}
              height={200}
              className="hidden lg:block"
            />
          </div>

          <Image
            src="/images/pizza-pieces.png"
            alt=""
            width={300}
            height={200}
            className="block lg:hidden mx-auto"
          />

          <div className="flex flex-col lg:gap-5 lg:w-4/5 lg:ml-8 lg:-mt-10">
            <h2 className=" font-bold lg:w-3/4 text-4xl">
              Daily fresh and always tasty
            </h2>
            <p className="leading-loose text-black mt-2 text-lg lg:text-xl">
              There are many variations of passages of Lorem Ipsum available,
              but the majority haved
            </p>
          </div>

          <div className="hidden lg:block lg:pizzaFresh lg:mt-20 mr-2">
            <Image
              src="/images/pizza-daily-fresh.png"
              alt=""
              width={100}
              height={50}
              className="relative -mt-72 lg:mt-0 mr-10 "
            />
          </div>
        </section>
        <section className=" px-4 lg:px-10 -mt-5 lg:mt-20 ">
          <h4 className="love font-bold text-xl lg:text-2xl pb-1 lg:pb-4">
            Popular Dishes
          </h4>
          <h2 className=" text-3xl lg:text-5xl mt-2 font-extrabold">
            Browse our Menu
          </h2>

          <div className=" mt-7 lg:mt-10 grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3  md:w-11/12  lg:w-full md:mx-auto lg:mx-0 lg:px-6  gap-6 md:gap-5 lg:gap-16">
            {Cadd} {Cadd} {Cadd}
          </div>
        </section>
        <section className=" py-10 lg:py-20 px-4 lg:px-10 bg-yellow-50 lg:mt-16 h-3/4 ">
          <h4 className="love font-bold lg:mb-5 text-xl lg:text-2xl">
            Our Strength
          </h4>
          <h2 className=" text-2xl lg:text-5xl mt-2 lg:mt-2 font-extrabold">
            Why We Are The Best?
          </h2>
          <Image
            src="/images/pizzona.png"
            alt=""
            width={350}
            height={150}
            className="absolute right-0  mtop hidden lg:block :mb-20"
          />

          <section className=" mt-10 lg:mt-16 ">
            <Slider {...settings}>
              <div className="flex flex-col gap-4">
                <BiBowlRice className="text-5xl text-red-400" />
                <h5 className="font-extrabold text-lg">All Kinds of Foods</h5>
                <p className="text-md w-4/5">
                  Lorem Ipsum is simply dummy text of the <br></br>printing and
                  typesetting industry
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <PiFan className="text-5xl text-red-400" />
                <h5 className="font-extrabold text-lg">All Kinds of Foods</h5>
                <p className="text-md w-4/5">
                  Lorem Ipsum is simply dummy text of the <br></br>printing and
                  typesetting industry
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <LuLaugh className="text-5xl text-red-400" />
                <h5 className="font-extrabold text-lg">All Kinds of Foods</h5>
                <p className="text-md w-4/5">
                  Lorem Ipsum is simply dummy text of the <br></br>printing and
                  typesetting industry
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <SlLocationPin className="text-5xl text-red-400" />
                <h5 className="font-extrabold text-lg">All Kinds of Foods</h5>
                <p className="text-md w-4/5">
                  Lorem Ipsum is simply dummy text of the <br></br>printing and
                  typesetting industry
                </p>
              </div>
            </Slider>
          </section>
        </section>

        <section className="px-4 lg:px-10  mt-10 lg:mt-28">
          <Image src="/images/leaf.png" alt="" width="100" height="100" />

          <h4 className="love font-bold text-xl lg:text-2xl mb-4">
            Customer Feedback
          </h4>
          <h2 className="  text-2xl lg:text-5xl mt-2 font-extrabold">
            Clients Testimonials
          </h2>
          <TestimonialsSlider testimonials={TestsArray} />
        </section>
      </section>
    </>
  );
}

export default Homepage;
