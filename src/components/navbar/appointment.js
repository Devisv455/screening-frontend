
import React from "react"
import data from './list.json'
import "./appointment.css"
import {  Typography } from "@material-tailwind/react";
export const Appointment =() =>{
    
    const appointments = data.appointments;
    const TABLE_HEAD = ["PATIENTS", "DATE", "TIME", "DOCTOR","INJURY","ACTION"];
    const formatDate = (dateString) => {

      const options = {day:"2-digit",month:"short",year:"numeric"}
      const date = new Date(dateString)
      return date.toLocaleDateString("en-IN",options).replace(/-/g, ' ')
    };

    const formatTime = (timeString) => {
     
      const[time] = timeString.split(' ');
      const[hours,minutes] = time.split(':').map(Number);
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
     return `${hours}:${formattedMinutes}`;
      
    }
return (
    <section className="section">
      <div className="containers mx-auto" style={{ width: '98%' }}>
        <div className="overflow-x-auto">
          <div className="max-w-95 mx-auto"> 
            <div className="rounded-lg border border-gray-200 mt-4">
              <table className="w-full text-sm text-gray-500 dark:text-gray-400 sm:rounded-lg" style={{ width: '95%', margin: '0 auto' }}>
                <caption className="font-bold p-2 pl-0 ml-[-5px]  text-xl text-left ">Today's Appointment List</caption>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    {TABLE_HEAD.map((head, index) => (
                      <th key={index} className={`${index === 0 ? 'pl-2' : ''} text-left border-b border-blue-gray-100 bg-blue-gray-50 p-2 rounded-t-lg`}>
                        <Typography variant="small" color="blue-gray" className="ml-3 font-semibold leading-none opacity-70">
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment, index) => (
                    <tr key={appointment.patient_name} className="text-justify border-b border-blue-gray-100 bg-blue-gray-50">
                      <td className="p-3 border-b border-blue-gray-100">
                        <div className="flex flex-col items-start">
                          <div className="flex items-center">
                            <img 
                              src="/boy.jpg" 
                              alt="Patient" 
                              className=" ml-1 w-8 h-8" />
                            <span className="text-sm font-semibold ml-1">{appointment.patient_name}</span>
                          </div>
                          <span className="text-xs ml-9">{appointment.mobile_number}</span>
                        </div>
                      </td>
                      <td className="p-3 border-b border-blue-gray-100">
                        <div className="flex flex-col items-start">
                          <div className="flex items-center text-sm ml-2">
                            <img  
                              src="/cal-blue1.png" 
                              alt="cal" 
                              className="calendar ml-0 filter saturate-0 sepia-100 hue-rotate-200 w-6 h-6"
                            />
                            {formatDate(appointment.appointment_date)}
                          </div>
                        </div>
                      </td>
                      <td className="p-3 border-b border-blue-gray-100">
                        <div className="flex flex-col items-start">
                          <div className="flex items-center text-sm ml-2">
                            <img  
                              src="https://icons.iconarchive.com/icons/bootstrap/bootstrap/128/Bootstrap-clock-history-icon.png" 
                              alt="Icon" 
                              className="clock-icon w-6 h-6"
                            />
                            {formatTime(appointment.appointment_time)}
                          </div>
                        </div>
                      </td>
                      <td className="p-3 border-b border-blue-gray-100">
                        <div className="flex items-center text-sm ml-2">
                        {index === 3 || index === 4 ? (
              <img src="/red.jpg" alt="Another Icon" className="w-6 h-6" />
            ) : (
              <img src="/star.jpg" alt="Star Icon" className="w-6 h-6" />
            )}
                          {appointment.doctor}
                        </div>
                      </td>
                      <td className="p-3 border-b border-blue-gray-100">
                        <div className="border border-solid border-blue-500 bg-blue-200 text-blue-gray-500 text-sm ml-2 font-normal p-2 rounded-lg border-transparent inline-block">
                          {appointment.injury}
                        </div>
                      </td>

<td className="p-3 border-b border-blue-gray-100">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" class="ml-8 w-8 h-8">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
  </svg>
</td>
 </tr>
                    
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  }  