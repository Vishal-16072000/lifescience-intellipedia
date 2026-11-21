
import Sidebar from "./Sidebar";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />

      <main className="flex-1 min-w-0 p-6 lg:p-8">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
