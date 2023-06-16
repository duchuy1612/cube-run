import { useState, useContext, FormEvent, useReducer } from "react";
import { ToggleButton } from "../../components/toggleButton";
import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';


export default function Password() {
  const navi = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [confirmedCurrentPassword, setconfirmedCurrentPassword] = useState("");
  const [isInvalidCred, setInvalidCred] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const HandleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    if (!error) {
      navi("/home");
    }
    else{
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-indigo-700">
      <div
        className={
          "window flex h-4/5 w-full flex-col gap-3 bg-white p-4 outline outline-0 outline-offset-4 outline-red-500 transition-all md:w-2/5 " +
          (isInvalidCred ? "outline-4" : "")
        }
      >
        <div className="flex flex-col gap-2 w-full h-full items-center">
            <img src="/Vector.png" className="object-scale-down h-7"></img>
            <div className="text-base font-bold">Change Password</div>
        </div>
        <form className="flex h-full flex-col gap-1" onSubmit={HandleSubmit}>
            <div className="text-sm">Type your current password*</div> 
            <input
                className="input"
                type="password"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => {
                    setCurrentPassword(e.target.value);
                    setInvalidCred(false);
                }}
                required
            />
            <div className="text-sm">Type your new password*</div>
            <input
                className="input"
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => {
                    setNewPassword(e.target.value);
                    setInvalidCred(false);
                }}
                required
            />
            <div className="text-sm">Retype your new password*</div>
            <input
                className="input"
                type="password"
                placeholder="Retype New Password"
                value={confirmedCurrentPassword}
                onChange={(e) => {
                    setconfirmedCurrentPassword(e.target.value);
                    setInvalidCred(false);
                }}
                required
            />
          <div className="flex flex-col items-center justify-between">
            <button
                type="submit"
                className=" bg-indigo-700 text-white"
                disabled={isLoading}
                onClick={() => { 
                  if (newPassword === confirmedCurrentPassword) {
                    setError(false);
                  } else {
                    setError(true);
                    alert("Password does not match");
                    
                  }
                }}
              >
                Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}