import React, { useState } from 'react';

export const ChatCypher = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-[331px] rounded-[12px] mx-auto pb-4 fixed right-12 bottom-6">
      {/* Toggle Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed right-6 sm:bottom-10 bottom-[10%]"
        >
          <div className="bg-primary inline-flex justify-center items-center size-[50px] lg:size-[77px] rounded-full cursor-pointer">
            <h1 className="font-Bebas   text-[40px] lg:text-[55.2px] text-white">
              C
            </h1>
          </div>
        </button>
      )}

      {/* Chat Box */}
      {isOpen && (
        <div className="w-full max-w-[331px] rounded-[12px] bg-accent3 shadow-lg ">
          {/* Header */}
          <div className="bg-primary rounded-t-[12px] p-4 text-white font-bold text-sm">
            Chat with Cypher
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-white text-2xl"
            >
              &times;
            </button>
          </div>

          {/* step 2 */}
          <div className="mt-[27px] px-3 pb-[15px]  space-y-4">
            <div className="w-full max-w-[213px] bg-[#3F3F46] rounded-[7px] py-[15px] px-[13px] ml-auto">
              <p className="max-w-[187px] text-white text-xs leading-[19px]">
                Lorem ipsum dolar sit general sac mascho werho
              </p>
            </div>
            {/* step 4 */}
            <div className="w-full max-w-[213px]  rounded-[7px] py-[15px] px-[13px] border border-zinc-200">
              <p className="max-w-[187px] text-accent2 text-xs leading-[19px]">
                Lorem ipsum dolar sit general sac mascho werho
              </p>
            </div>
            {/* step 5 */}
            <div className="w-full max-w-[213px]  rounded-[7px] py-[15px] px-[13px] border border-zinc-200">
              <p className="max-w-[187px] text-accent2 text-xs leading-[19px]">
                Lorem ipsum dolar sit general sac mascho werho
              </p>
            </div>
            {/* step 6 */}
            <div className="w-full max-w-[213px] bg-[#3F3F46] rounded-[7px] py-[15px] px-[13px] ml-auto">
              <p className="max-w-[187px] text-white text-xs leading-[19px]">
                Lorem ipsum dolar sit general sac mascho werho
              </p>
            </div>
            <input
              type="text"
              placeholder="Enter your question..."
              className="text-xs w-full placeholder-accent2 py-3 px-[10px] rounded-B_ru border bg-transparent outline-none"
            />
          </div>
          <div className="flex justify-between items-center px-3 pb-2">
            <div className="flex justify-center items-center gap-1">
              <img src="/camra.png" alt="" />
              <img src="/gallary.png" alt="" />
              <img src="/Docimg.png" alt="" />
            </div>

            <button className="bg-primary text-xs text-white py-[11px] px-[25px] rounded-[15.5px]">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
