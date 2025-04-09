import React from 'react'

export const ChatCypher = () => {
  return (
    <section className="w-full ">
      {/* step 1 */}
      <div className="w-full max-w-[331px] rounded-[12px] bg-accent3 mx-auto pb-4">
        <div className="bg-primary py-[25px] px-[15px] rounded-t-[12px]">
          <h2 className="text-white font-bold text-[18px]">Chat with Cypher</h2>
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
          {/* step 7 */}
          <input
            type="text"
            placeholder="Enter your question..."
            className="text-xs w-full placeholder-accent2 py-3 px-[10px] rounded-B_ru border bg-transparent outline-none"
          />
        </div>

        {/* step */}
        <div className='flex justify-between items-center px-3'>
          <div className='flex justify-center items-center gap-1'>
            <img src="/camra.png" alt="" />
            <img src="/gallary.png" alt="" />
            <img src="/Docimg.png" alt="" />
          </div>

          <button className='bg-primary text-xs text-white py-[11px] px-[25px] rounded-[15.5px]'>Send</button>
        </div>
      </div>
    </section>
  );
}
