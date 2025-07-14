
import React from 'react'
import Github from "../../assets/github.png"
import users from "../../assets/users.png"
import Archive from '../../assets/Archive.png'
import { ListOrdered, Rows4 } from 'lucide-react'

const CardModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-slate-700 rounded-lg w-[800px] max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b border-slate-600">
          <h3 className="text-white font-medium text-lg">Project planning</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white text-xl"
          >
            ×
          </button>
        </div>
        
        <div className="p-4">
          <div className="text-gray-300 text-sm mb-4">
            in list To do
          </div>
          
          <div className="flex gap-6">
            {/* Left Column */}
            <div className="flex-1 space-y-6">
              {/* Members & Notifications */}
              <div className="flex gap-8 mb-11">
                <div className=" space-x-3">
                  <span className="text-gray-300 text-sm">Members</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      SD
                    </div>
                    <button className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm hover:bg-gray-500">
                      +
                    </button>
                  </div>
                </div>
                <div >
                  <span className="text-gray-300 text-sm ">Notifications</span>
                  <button className="bg-gray-600 text-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-500 flex items-center space-x-1">
                    <span>👁</span>
                    <span>Watch</span>
                  </button>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-white text-sm mb-3 flex items-center space-x-2">
                  <Rows4/>
                  <span>Description</span>
                </h4>
                <textarea 
                  className="w-full bg-slate-600 text-white p-3 rounded resize-none h-24 text-sm placeholder-gray-400 border border-slate-500 focus:border-blue-500 focus:outline-none"
                  placeholder="Add a more detailed description..."
                />
              </div>

              {/* Activity */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-white text-sm flex items-center space-x-2">
                    <ListOrdered/>
                    <span>Activity</span>
                  </h4>
                  <button className="text-gray-400 hover:text-white text-xs">
                    Show details
                  </button>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                    SD
                  </div>
                  <input 
                    type="text" 
                    className="flex-1 bg-slate-600 text-white p-2 rounded text-sm placeholder-gray-400 border border-slate-500 focus:border-blue-500 focus:outline-none"
                    placeholder="Write a comment..."
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-52 space-y-6">
              {/* Add to card */}
              <div className='mb-2.5'>
                <h4 className="text-gray-300 text-sm mb-1">Add to card</h4>
                <div className="space-y-2">
                  <button className="w-full bg-slate-600 hover:bg-slate-500 text-white py-2 px-3 rounded text-sm text-left flex items-center space-x-2">
                    <img src={users} alt="" srcset="" />
                    <span>Members</span>
                  </button>
                </div>
              </div>

              {/* Power-Ups */}
              <div>
                <div className="text-gray-400 text-xs mb-2">Power-Ups</div>
                <div className="space-y-2">
                  <button className="w-full bg-slate-600 hover:bg-slate-500 text-white py-2 px-3 rounded text-sm text-left flex items-center space-x-2">
                    <img src={Github} alt="" srcset="" />
                    <span>GitHub</span>
                  </button>
                  
                  <button className="w-full bg-slate-600 hover:bg-slate-500 text-white py-2 px-3 rounded text-sm text-left">
                    Attach Branch
                  </button>
                  <p>Attach Commit</p>
                  <p>Attach Issue</p>
                  <p>Attach Pull Request...</p>
                </div>
              </div>

              {/* Actions */}
              <div>
                <button className="w-full bg-slate-600 hover:bg-slate-500 text-white py-2 px-3 rounded text-sm text-left flex items-center space-x-2">
                  <img src={Archive} alt="" />
                  <span>Archive</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardModal