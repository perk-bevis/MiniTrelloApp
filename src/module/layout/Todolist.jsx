import React, { useEffect, useState } from 'react'
import frintf from "../../assets/printf.png"
import CardModal from './CardModal'
import finishedTask from "../../assets/finishedTask.png"
import user from "../../assets/users.png"
import InviteBoard from './InviteBoard'

const Todolist = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedList, setSelectedList] = useState('')
  const [selectedCard, setSelectedCard] = useState('')
  const [inputValues, setInputValues] = useState({});
  const [isInviteOpen, setIsInviteOpen] = useState(false)
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("jobs");
    return savedJobs ? JSON.parse(savedJobs) : [];
  });

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);
  const openModal = (listName, cardName = 'New Card') => {
    setSelectedList(listName)
    setSelectedCard(cardName)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedList('')
    setSelectedCard('')
  }
  const handleInputChange = (listName, value) => {
    setInputValues(prevValues => ({
      ...prevValues,
      [listName]: value
    }));

  };
  const handleSubmit = (e, listName) => {
    e.preventDefault();
    const currentInputValue = inputValues[listName] || "";

    if (!currentInputValue.trim()) {
      alert("The job title cannot be left blank.");
      return;
    }
    const newJob = {
      id: Math.ceil(Math.random() * 100000000),
      jobname: currentInputValue.trim(),
      status: false,
      list: listName
    };
    setJobs([...jobs, newJob]);

    handleInputChange(listName, "");
  };
  return (
    <div className="bg-gray-100 font-sans">
      <div className="flex flex-col h-screen w-screen">
        <header className="bg-[#4a154b] text-white p-3 flex justify-between items-center shadow-md w-[1617px]">
          <h1 className="text-lg font-normal">My Trello board</h1>
          <button onClick={() => setIsInviteOpen('Invite member')} className="bg-white/20 hover:bg-white/30 text-sm font-medium py-2 px-4 rounded-md flex">
            <img src={user} alt="" className='mr-1' />
            <span> Invite member</span>
          </button>
        </header>

        <main className="flex-1 p-4 flex space-x-4 overflow-x-auto">
          {/* todo */}
          <div className="bg-neutral-900 rounded-lg p-3 w-72 h-fit flex-shrink-0">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-white">To do</h2>
            </div>
            <div className="space-y-3">
              {jobs
                .filter(job => job.list === 'To do')
                .map(job => (
                  <div key={job.id} className="bg-neutral-800 p-3 rounded-md text-white cursor-pointer hover:bg-neutral-700">
                    {job.jobname}
                  </div>
                ))}
            </div>
            <form onSubmit={(e) => handleSubmit(e, 'To do')} className="w-full mt-3 p-2 text-gray-400 hover:bg-neutral-800 rounded-md flex items-center justify-between">
              <input
                type="text"
                placeholder='+ Add a card'
                className="bg-transparent border-none focus:outline-none flex-1 placeholder-gray-400"
                value={inputValues['To do'] || ''}
                onChange={(e) => handleInputChange('To do', e.target.value)}
              />
              <button type="button" onClick={() => openModal('To do')}>
                <img src={frintf} alt="Add card icon" />
              </button>
            </form>
          </div>

          {/* Doing List */}
          <div className="bg-neutral-900 rounded-lg p-3 w-72 h-fit flex-shrink-0">
            <div className="flex justify-between items-center mb-3">
              <h2 className=" text-white">Doing</h2>
            </div>
            <div className="space-y-3">
              {jobs
                .filter(job => job.list === 'Doing')
                .map(job => (
                  <div key={job.id} className="bg-neutral-800 p-3 rounded-md text-white cursor-pointer hover:bg-neutral-700">
                    {job.jobname}
                  </div>
                ))}
            </div>
            <form onSubmit={(e) => handleSubmit(e, 'Doing')} className="w-full mt-3 p-2 text-gray-400 hover:bg-neutral-800 rounded-md flex items-center justify-between">
              <input
                type="text"
                placeholder='+ Add a card'
                className="bg-transparent border-none focus:outline-none flex-1 placeholder-gray-400"
                value={inputValues['Doing'] || ''}
                onChange={(e) => handleInputChange('Doing', e.target.value)}
              />
              <button type="button" onClick={() => openModal('Doing')}>
                <img src={frintf} alt="Add card icon" />
              </button>
            </form>
          </div>

          {/* Done List */}
          <div className="bg-neutral-900 rounded-lg p-3 w-72 h-fit flex-shrink-0">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-white">Done</h2>
              <img src={finishedTask} alt="" />
            </div>
            <div className="space-y-3">
              {jobs
                .filter(job => job.list === 'Done List')
                .map(job => (
                  <div key={job.id} className="bg-neutral-800 p-3 rounded-md text-white cursor-pointer hover:bg-neutral-700">
                    {job.jobname}
                  </div>
                ))}
            </div>
            <form onSubmit={(e) => handleSubmit(e, 'Done List')} className="w-full mt-3 p-2 text-gray-400 hover:bg-neutral-800 rounded-md flex items-center justify-between">
              <input
                type="text"
                placeholder='+ Add a card'
                className="bg-transparent border-none focus:outline-none flex-1 placeholder-gray-400"
                value={inputValues['Done List'] || ''}
                onChange={(e) => handleInputChange('Done List', e.target.value)}
              />
              <button type="button" onClick={() => openModal('Done List')}>
                <img src={frintf} alt="Add card icon" />
              </button>
            </form>
          </div>

          {/* Add another list */}
          <div className="w-72 flex-shrink-0">
            <button className="w-full text-left p-3 text-white bg-[#A16081] hover:bg-[#A16081]/80 rounded-lg">
              + Add another list
            </button>
          </div>
        </main>

        {isModalOpen && (
          <CardModal
            isOpen={isModalOpen}
            onClose={closeModal}
            listName={selectedList}
            cardName={selectedCard}
          />
        )}

        {isInviteOpen && (
          <InviteBoard onClose={() => setIsInviteOpen(false)} />
        )}
      </div>
    </div>
  )
}

export default Todolist