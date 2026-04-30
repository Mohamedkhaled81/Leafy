"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const plantsImgs = ["/p1.jpg", "/p2.jpeg", "/p3.jpeg"];

export default function SlideShow() {
  const [ currImg, setCurrImg] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
        setCurrImg((prev) => (prev + 1) % plantsImgs.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
    
  return (
<div className="relative w-100 h-150 overflow-hidden rounded-xl">
  <Image
    src={plantsImgs[currImg]}
    alt="slide"
    fill
    className="object-cover "
  />
</div>
  );
}
