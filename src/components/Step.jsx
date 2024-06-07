import React from "react";

export default function Step({steps}) {
  return (
    <>
      {steps.length >= 0 &&
        steps.map((step, index) => (
          <div className="flex gap-x-5 ms-1">
            {/* <!-- Icon --> */}
            <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
              <div className="relative z-10 size-8 flex justify-center items-center">
                <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#7ecef4] font-semibold text-xs uppercase rounded-full">
                  {index + 1}
                </span>
              </div>
            </div>
            {/* <!-- End Icon --> */}

            {/* <!-- Right Content --> */}
            <div className="grow pt-0.5 pb-8 sm:pb-12">
              <p className="text-sm lg:text-base text-neutral-400">
                <span className="text-white">{step.title}</span>
                {step.description}
              </p>
            </div>
            {/* <!-- End Right Content --> */}
          </div>
        ))}
    </>
  );
}
