
import { ReactNode } from "react";
import Navbar from "./Navbar";
import { useAuth } from "@/contexts/AuthContext";
import { Briefcase, ChevronRight, FileText, Settings, User } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, title }) => {
  const { user } = useAuth();

  const getNavItems = () => {
    switch (user?.role) {
      case "student":
        return [
          { title: "Dashboard", icon: <Briefcase className="h-5 w-5" />, href: "/student" },
          { title: "Profile", icon: <User className="h-5 w-5" />, href: "/student/profile" },
          { title: "Applications", icon: <FileText className="h-5 w-5" />, href: "/student/applications" },
          { title: "Resume", icon: <FileText className="h-5 w-5" />, href: "/student/resume" }
        ];
      case "recruiter":
        return [
          { title: "Dashboard", icon: <Briefcase className="h-5 w-5" />, href: "/recruiter" },
          { title: "Job Postings", icon: <FileText className="h-5 w-5" />, href: "/recruiter/jobs" },
          { title: "Applications", icon: <FileText className="h-5 w-5" />, href: "/recruiter/applications" }
        ];
      case "admin":
        return [
          { title: "Dashboard", icon: <Briefcase className="h-5 w-5" />, href: "/admin" },
          { title: "User Management", icon: <User className="h-5 w-5" />, href: "/admin/users" },
          { title: "Analytics", icon: <Settings className="h-5 w-5" />, href: "/admin/analytics" }
        ];
      default:
        return [];
    }
  };

  const navItems = getNavItems();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-64 flex-shrink-0">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="font-bold text-lg mb-4 text-gray-800 capitalize">{user?.role} Menu</h2>
              <nav className="space-y-1">
                {navItems.map((item, i) => (
                  <a 
                    key={i}
                    href={item.href}
                    className={`
                      flex items-center px-3 py-2 text-sm rounded-md
                      ${window.location.pathname === item.href
                        ? 'bg-brand-blue-50 text-brand-blue-600 font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                      }
                    `}
                  >
                    {item.icon}
                    <span className="ml-3">{item.title}</span>
                    <ChevronRight className={`ml-auto h-4 w-4 ${window.location.pathname === item.href ? 'text-brand-blue-600' : 'text-gray-400'}`} />
                  </a>
                ))}
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h1 className="text-2xl font-bold mb-6 text-gray-800">{title}</h1>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
