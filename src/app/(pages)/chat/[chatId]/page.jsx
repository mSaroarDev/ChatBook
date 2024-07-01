import ChatBody from "@/components/ChatBody";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function MessagesPage() {
  return (
    <>
      <Navbar />
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <ChatBody />
    </>
  );
}
