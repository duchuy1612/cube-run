import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlueButton from '../../components/Button/BlueButton'
import RedButton from '../../components/Button/RedButton'
import InputBlue from '../../components/InputBox/InputBlue'

export default function Signup() {
    const navigate = useNavigate()

    const navigateToHome = () => {
      navigate('/home')
    }

    const navigateToAccount = () => {
        navigate('/account')
    }

    return (
        <div className="flex h-screen w-full items-center justify-center bg-indigo-700">
          <div
            className={
              "window flex h-4/5 w-full flex-col gap-3 bg-white p-4 outline outline-0 outline-offset-4 outline-red-500 transition-all md:w-2/5"
            }
          >
            <div className="flex flex-col gap-2 items-center">
                <div className="text-xl font-bold text-indigo-800">Add Account</div>
            </div>
            <div className="flex h-full flex-col gap-4 overflow-y-scroll">
                <InputBlue label="Full Name" type="text"></InputBlue>
                <InputBlue label="Email" type="email"></InputBlue>
                <InputBlue label="Phone Number" type="tel"></InputBlue>
                <InputBlue label="Address" type="text"></InputBlue>
                <select className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
                  <option>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>
                <InputBlue label="Birthdate" type="date"></InputBlue>
                <InputBlue label="Password" type="password"></InputBlue>
                <InputBlue label="Confirm Password" type="password"></InputBlue>
            </div>
            <div className="flex flex-row items-end justify-end gap-4">
                <RedButton onClick={navigateToAccount}>Return</RedButton>
                <BlueButton onClick={navigateToHome}>Save</BlueButton>
            </div>
          </div>
        </div>
      );
}
