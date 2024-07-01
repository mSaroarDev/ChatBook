import { LuImagePlus } from "react-icons/lu";
import { FaPaperPlane } from "react-icons/fa";
import Message from "@/components/Message";
import { FaRegCircle } from "react-icons/fa";
import ContactSearchResult from "@/components/ContactSearchResult";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function StartChat() {
  return (
    <>
      <Navbar />
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="fixed top-0 bottom-0 left-0 lg:left-[360px] right-0">
        <div className="w-full h-dvh pt-20">
          <div className="p-3 lg:p-5 h-full">
            <div className="bg-white rounded-xl h-full relative overflow-hidden">
              {/* Fixed header */}
              <div className="bg-lightBg px-4 py-4 rounded-t-xl flex items-center gap-5">
                <div className="w-full">
                  <input
                    type="text"
                    className="w-full px-4 py-2 outline-0 rounded-xl"
                    placeholder="Search to chat..."
                  />
                </div>
              </div>

              {/* Scrollable content area */}
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 lg:col-span-6 overflow-y-auto h-fit md:h-[calc(100%-40px)] p-7">
                  <ContactSearchResult />
                  <ContactSearchResult />
                  <ContactSearchResult />
                  <ContactSearchResult />
                  <ContactSearchResult />
                </div>

                {/* <div className="col-span-12 lg:col-span-6 overflow-y-auto h-[calc(100%-40px)] p-7">
                  <h1 className="text-xl font-bold mb-2">Selected Contacts</h1>
                  <p className="bg-brand text-white px-4 rounded-full w-fit">
                    Nusrat Jahan
                  </p>
                </div> */}
              </div>

              {/* Fixed header */}
              <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-lightBg px-6 py-2 rounded-b-xl flex items-center">
                <div className="w-full flex items-center gap-5">
                  <button className="w-full btn-main">START CHAT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
