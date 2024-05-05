import { FormControl, FormControlLabel, InputLabel, MenuItem, Select } from '@mui/material';
import Switch from '@mui/material/Switch';
import React, { useEffect, useState } from 'react'

const FilterBar = ({ setSearchText, searchText, setFilteredData, jobList }) => {

    const [experience, setExperience] = useState('');
    const [location, setLocation] = useState('');
    const [role, setRole] = useState('');
    const [RemoteSwitch, setRemoteSwitch] = useState(false);

    useEffect(() => {
        setFilteredData(jobList.filter((obj) => obj.minExp <= experience))
    }, [experience])

    useEffect(() => {
        setFilteredData(jobList.filter((obj) => obj.location.toLowerCase() == location.toLowerCase()))
    }, [location])

    useEffect(() => {
        setFilteredData(jobList.filter((obj) => obj.jobRole.toLowerCase() == role.toLowerCase()))
    }, [role])

    return (
        <div className='w-[90%] max-sm:flex-col max-sm:p-5 max-sm:gap-5 justify-center align-middle flex gap-2 pr-5 bg-white h-16 max-sm:h-56 m-10 max-sm:m-5 absolute rounded-full max-sm:rounded-md border border-gray-400 shadow-md shadow-gray-300'>
            <input onInput={(e) => setSearchText(e.target.value)} value={searchText} className='h-full w-full m-0 pl-8 rounded-full outline-none' placeholder='Search by Company Name ...'></input>
            <FormControl className='self-center w-full m-1' size="small">
                <InputLabel id="demo-select-small-label">Minimum Expericence</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={experience}
                    label="Expericence"
                    onChange={(e) => setExperience(e.target.value)}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={0} >0 years</MenuItem>
                    <MenuItem value={1} >1 years</MenuItem>
                    <MenuItem value={2} >2 years</MenuItem>
                    <MenuItem value={3} >3 years</MenuItem>
                    <MenuItem value={4} >4 years</MenuItem>
                    <MenuItem value={5} >5 years</MenuItem>
                    <MenuItem value={6} >6 years</MenuItem>
                    <MenuItem value={7} >7 years</MenuItem>
                    <MenuItem value={8} >8 years</MenuItem>
                    <MenuItem value={9} >9 years</MenuItem>
                    <MenuItem value={10}>10 years</MenuItem>
                </Select>
            </FormControl>


            <FormControl className='w-full self-center m-1' size="small">
                <InputLabel id="demo-select-small-label">{RemoteSwitch ? "Remote jobs" : "Location"}</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={location}
                    label="Location"
                    onChange={(e) => setLocation(e.target.value)}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"remote"}><FormControlLabel className='flex w-full justify-end' control={<Switch className='w-full' checked={RemoteSwitch} onChange={() => { setLocation(!RemoteSwitch ? 'remote' : ""); setRemoteSwitch(!RemoteSwitch); }} />} label="Remote jobs" /></MenuItem>
                    <MenuItem value={"Delhi NCR"} disabled={RemoteSwitch}  >Delhi NCR</MenuItem>
                    <MenuItem value={"Mumbai"} disabled={RemoteSwitch}  >Mumbai</MenuItem>
                    <MenuItem value={"Bangalore"} disabled={RemoteSwitch}  >Bangalore</MenuItem>
                    <MenuItem value={"Chennai"} disabled={RemoteSwitch}  >Chennai</MenuItem>
                </Select>
            </FormControl>

            <FormControl className='self-center w-full m-1' size="small">
                <InputLabel id="demo-select-small-label">Role</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={role}
                    label="Role"
                    onChange={(e) => setRole(e.target.value)}
                >
                    <MenuItem value="" className='mb-5'>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Frontend"} >Frontend</MenuItem>
                    <MenuItem value={"Backend"} >Backend</MenuItem>
                    <MenuItem value={"Android"} >Android</MenuItem>
                    <MenuItem value={"IOS"} >IOS</MenuItem>
                    <MenuItem value={"Tech Lead"} >Tech Lead</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default FilterBar
