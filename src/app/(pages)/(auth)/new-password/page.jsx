import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/image";
import { RiDeviceRecoverFill } from "react-icons/ri";
import { TbPasswordMobilePhone } from "react-icons/tb";
import { MdKey } from "react-icons/md";

export default function NewPasswordPage() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-between bg-body">
        <div className="grid grid-cols-12 gap-5 w-full max-w-6xl mx-auto">
          <div className="h-full w-full col-span-12 md:col-span-6 md:flex items-center justify-center font-bold">
            <div>
              <h1 className="text-[30px] md:text-[40px] lg:text-[50px] text-center md:text-left">
                New Password
              </h1>
              <p className="open-sans-light text-center md:text-left">Enter the New Password.</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="w-[400px] h-auto bg-body/90 p-10 rounded-lg shadow-md flex flex-col items-center justify-center">
              <p className="text-[100px]"><RiDeviceRecoverFill /></p>
              <h1 className="text-lg font-bold text-center my-4">
                Create New Password
              </h1>

              <div className="w-full mt-3 mb-5">
                <div className="text-input">
                  <div className="p-2 text-[22px]">
                    <MdKey />
                  </div>
                  <input
                    type="text"
                    className="flex-1 outline-none px-3 py-2"
                    placeholder="Enter Password..."
                  />
                </div>
                <div className="text-input">
                  <div className="p-2 text-[22px]">
                    <MdKey />
                  </div>
                  <input
                    type="text"
                    className="flex-1 outline-none px-3 py-2"
                    placeholder="Retype Password..."
                  />
                </div>
                <div>
                  <button className="btn-main">Change Password</button>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
