import React from 'react'
import Attachmoney from "../../assets/Attachmoney.svg"
import close from "../../assets/Close.svg"

const InviteBoard = () => {
    return (
        <div className='fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50 '>
            <div className='bg-[#272D33] rounded-lg w-[599px] max-w-4xl mx-4 h-[200px] overflow-y-auto'>
                <div className='p-5 flex flex-col space-y-1'>
                    <h1 className='font-semibold text-gray-400'>Invite to Board</h1>
                    <input type="text" placeholder='Invite to Board Email address or name' className='border border-transparent w-full focus:outline-none bg-[#16191C] p-3.5 text-gray-300 focus:border-gray-400' />
                </div>

                <div className='flex justify-between px-5 pb-5 pt-1'>
                    {/* thẻ 1 */}
                    <div>
                        <p>Invite someone to this Workspace with a link:</p>
                        <a href="" className='text-[#4179DD]'>Disable link</a>
                    </div>

                    {/* thẻ 2 */}
                    <button className='border border-gray-400 p-1 w-[140px] h-[40px]'>
                        <div className='flex items-center ml-4 '>
                            <img src={Attachmoney} alt="" className='mr-2'/>
                            <span className='text-gray-400'>Copy Link</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default InviteBoard
