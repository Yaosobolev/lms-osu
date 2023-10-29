"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

export const Feedback = () => {
  return (
    <div className="bg-white @apply scroll-smooth" id="feedback">
      <div className=" container mx-auto max-w-[700px] px-5 py-20 h-screen">
        <h2 className="text-6xl  text-black uppercase text-center mb-10">
          Отзывы
        </h2>
        <p className="text-3xl text-black mb-10">
          Обратная связь наших клиентов после создания или вступления в портал{" "}
        </p>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="text-black">
              <TestimonialCard />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-black">
              <TestimonialCard />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-black">
              <TestimonialCard />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-black">
              <TestimonialCard />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-black">
              <TestimonialCard />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function TestimonialCard() {
  return (
    <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 pt-0 pb-8"
      >
        <Avatar
          size="lg"
          variant="circular"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="tania andrew"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Tania Andrew
            </Typography>

            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <Typography color="blue-gray">Frontend Lead @ Google</Typography>
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0">
        <Typography>
          &quot;Портал очень крутой. Мне понравилось, что там есть все: И
          быстрый доступ к материалам и хорошо составленные тесты. Всем советую
          !!!&quot;
        </Typography>
      </CardBody>
    </Card>
  );
}
