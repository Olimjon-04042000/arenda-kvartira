import React from "react";

const kvartira = () => {
  return (
    <div className=" bg-white">
      <img src="/img-1.png" alt="" />
      <div className="mt-[6px] px-[18px] pb-[22px]">
        <h3 className="text-[#458BD1] text-[18px] mb-[10px]">
          Ул. Петра Мстиславца, 24
        </h3>
        <div>
          <p className="text-[#211A1D] text-[14px] font-light">
            Спальных мест: <span className="text-[#458BD1] font-normal">2</span>
          </p>
          <div className="flex gap-[5px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="17"
              viewBox="0 0 12 17"
              fill="none"
            >
              <path
                d="M6.39844 0.683594C3.36572 0.683594 0.898438 3.20658 0.898438 6.30773C0.898438 10.1564 5.8204 15.8064 6.02996 16.045C6.22679 16.2692 6.57044 16.2688 6.76692 16.045C6.97648 15.8064 11.8984 10.1564 11.8984 6.30773C11.8984 3.20658 9.43112 0.683594 6.39844 0.683594ZM6.39844 9.1374C4.8726 9.1374 3.63128 7.86802 3.63128 6.30773C3.63128 4.74745 4.87263 3.4781 6.39844 3.4781C7.92424 3.4781 9.16557 4.74748 9.16557 6.30777C9.16557 7.86805 7.92424 9.1374 6.39844 9.1374Z"
                fill="#458BD1"
              />
            </svg>
            <a href="">Маяк Минска</a>
            <p className="underline text-[#211a1d99] text-[14px] font-light ">Маяк Минска</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default kvartira;
