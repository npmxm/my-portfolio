"use client";
import Image from "next/image";


export default function ItemSkill(props) {
  return (
    <div className="item-skill rounded-xl p-3 shadow-md">
      <div className="icon-skill aspect-5/2 min-[390px]:aspect-square flex items-center justify-center rounded-md overflow-hidden">
        {/* <img
          src={props.picurl}
          alt={props.picurl}
          className="w-full h-full object-contain"
        /> */}
        <Image
          src={props.picurl}
          alt={props.name}
          width={500}   // กำหนดขนาดที่เหมาะสม
          height={500}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="name-skill text-center mt-2">{props.name}</div>
    </div>
  );
}
