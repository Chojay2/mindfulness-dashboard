import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-[#E6F5E6]">
      <div className="hidden md:block bg-[#fafbfb]">
        <Sidebar />
      </div>
      <div className="flex flex-1 flex-col overflow-hidden w-full md:w-auto">
        <Header />
        <main
          className="flex-1 overflow-y-auto p-4 md:p-6 m-4 bg-[#fafbfb] rounded-[20px]"
          style={{ backgroundColor: "#fafbfb" }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
