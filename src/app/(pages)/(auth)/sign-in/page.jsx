import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { MdKey } from "react-icons/md";
import Image from "next/image";

export default function SignInPage() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-between bg-body">
        <div className="grid grid-cols-12 gap-5 w-full max-w-6xl mx-auto">
          <div className="h-full w-full col-span-12 md:col-span-6 md:flex items-center justify-center font-bold">
            <div>
              <h1 className="text-[30px] md:text-[40px] lg:text-[50px] text-center md:text-left">
                Chat Book
              </h1>
              <p className="open-sans-light text-center">
                Connect people and chat for free. The chats are personal and end
                to end encrypted.
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="w-[400px] h-auto bg-body/90 p-10 rounded-lg shadow-md flex flex-col items-center justify-center">
              <Image
                width={120}
                height={100}
                src="/user.png"
                alt="image"
                className="mb-5"
              />
              <h1 className="text-2xl font-bold text-center">
                Sign in to Start Chat
              </h1>

              <div className="w-full mt-3 mb-5">
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

              <Link href="/forgot-password" className="underline">
                Forgot Password? Reset Now...
              </Link>
              <p className="my-2">or</p>
              <Link href="/sign-up" className="underline">
                Dont have an account? Create free...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
