import React, { useEffect, useRef, useState } from 'react'
import { FetchJobs } from './FetchJobs'
import JobCard from './JobCard'
import FilterBar from './FilterBar';

const App = () => {
  const [jobList, setJobsList] = useState([]);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const Scrollref = useRef();

  useEffect(() => {
    FetchJobs(jobList, setJobsList, 12, page * 10);
  }, [page])

  const handelInfiniteScroll = async (event) => {
    // console.log("scrollHeight" + event.target.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + event.target.scrollTop);
    try {
      if (window.innerHeight + event.target.scrollTop + 10 >= event.target.scrollHeight) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setFilteredData(jobList.filter((obj) => obj.companyName.toLowerCase().includes(searchText.toLowerCase())))
    Scrollref?.current.scroll({
      top: 0,
      behaviour: "smooth"
    })
  }, [searchText])


  return (
    <div className='w-[100%] flex h-full justify-center align-top overflow-clip'>
      <FilterBar setSearchText={setSearchText} searchText={searchText} setFilteredData={setFilteredData} jobList={jobList} />
      <div ref={Scrollref} className='w-[100%] mt-32 max-sm:mt-64 flex justify-center h-[80%] overflow-y-scroll py-5 scrollbar-thin' onScroll={handelInfiniteScroll}>
        {
          filteredData.length ? (<div className='w-[100%] h-[90%] flex flex-wrap justify-center align-top'>
            {filteredData.map((data) => {
              return (
                <JobCard data={data} />
              )
            })}
          </div>) : (<div className='w-[100%] h-[90%] flex flex-wrap justify-center align-top'>
            {jobList.map((data) => {
              return (
                <JobCard data={data} />
              )
            })}
          </div>)
        }
      </div>
    </div>
  )
}

export default App
