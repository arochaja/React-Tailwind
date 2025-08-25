import nike1 from "../assets/n1-min.png";
import { QUANTITIES } from "./constant.js";
import { SIZES } from "./constant.js";
import { Select } from "./Select.jsx";
import { useState } from "react";
export function ShoeDetail({ shoe, onClickAdd }) {
  const [form, setForm] = useState({qty: null, size: null});
  return (
    <div className="flex flex-col lg:flex-row-reverse dark:text-white">
      <div className="flex-1 lg:-mt-32">{/* Shoe image*/}
        <div className="flex-center h-full bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
          <img className="animate-float" src={shoe.src} />
        </div>
      </div>
      <div className="flex-1 space-y-6"> {/* Shoe text details */}
        <div className="text-5xl font-black md:text-9xl"> {shoe.title}</div>
        <div className="font-medium md:text-xl">{shoe.description} </div>
        <div className="flex space-x-6">
          <div className="text-3xl font-extrabold md:text-6xl">{shoe.price}</div>
          <Select value={form.qty} onChange={(qty) => setForm({...form, qty})} title={"QTY"} options={QUANTITIES} />
          <Select value={form.size} onChange={(size) => setForm({...form, size})} title={"SIZE"} options={SIZES} />
        </div>
        <div className="space-x-10"> {/* Shoe buttons and links */}
            <button onClick={() => onClickAdd(shoe, form.qty, form.size)} className= "dark:bg-white dark:text-black btn-press-anim h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700">Add to bag</button>
            <a href="#" className="text-large font-bold underline underline-offset-4">View Details</a>
        </div>
       </div>
    </div>
  );
}