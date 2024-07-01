import ChatBody from "@/components/ChatBody";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function MyProfileLayout({ children }) {
  return (
    <>
      <Navbar />
      <Sidebar />
      {children}
    </>
  );
}
