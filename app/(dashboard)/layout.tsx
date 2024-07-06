import { Navbar } from "@/components/navbar";
import { OrgSidebar } from "@/components/org-sidebar";
import { SIdebar } from "@/components/sidebar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <SIdebar />
      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          <OrgSidebar />
          <div className="h-full flex-1">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
