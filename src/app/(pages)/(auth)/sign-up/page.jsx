import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { MdKey } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-between bg-body">
        <div className="grid grid-cols-12 gap-5 w-full max-w-6xl mx-auto">
          <div className="h-full w-full col-span-12 md:col-span-6 md:flex items-center justify-center font-bold">
            <div className="px-5">
              <h1 className="text-[30px] md:text-[40px] lg:text-[50px] text-center md:text-left">
                Create a free account to start
              </h1>
              <p className="open-sans-light text-center md:text-left">
                Connect people and chat for free. The chats are personal and end
                to end encrypted.
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="w-[400px] h-auto bg-body/90 p-10 rounded-lg shadow-md flex flex-col items-center justify-center">
              <Image width={120} height={100} src="/user.png" alt="image" className="mb-5" />
              <h1 className="text-lg font-bold text-center">
                Sign in to Start Chat
              </h1>

              <div className="w-full mt-3 mb-5">
                <div className="text-input">
                  <div className="p-2 text-[22px]">
                  <LuUser />
                  </div>
                  <input
                    type="text"
                    className="flex-1 outline-none px-3 py-2"
                    placeholder="Enter Username..."
                  />
                </div>
                <div className="text-input">
                  <div className="p-2 text-[22px]">
                    <HiOutlineMail />
                  </div>
                  <input
                    type="text"
                    className="flex-1 outline-none px-3 py-2"
                    placeholder="Enter Email..."
                  />
                </div>
                <div className="text-input">
                  <div className="p-2 text-[22px]">
                    <MdKey />
                  </div>
                  <input
                    type="password"
                    className="flex-1 outline-none px-3 py-2"
                    placeholder="******"
                  />
                </div>

                <div>
                  <button className="btn-main">Sign In</button>
                </div>
              </div>

              <Link href="/sign-in" className="underline">
                Already have an account? Sign in Now...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
