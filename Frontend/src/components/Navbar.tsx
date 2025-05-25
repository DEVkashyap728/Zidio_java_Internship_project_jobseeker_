
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, User, LogOut } from "lucide-react";
import { useNotifications } from "@/contexts/NotificationsContext";
import NotificationsDropdown from "./NotificationsDropdown";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { unreadCount } = useNotifications();

  const getDashboardLink = () => {
    if (!user) return "/";
    
    switch (user.role) {
      case "student":
        return "/student";
      case "recruiter":
        return "/recruiter";
      case "admin":
        return "/admin";
      default:
        return "/";
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-brand-blue-600">
          JobSeekConnect
        </Link>

        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/jobs" className="text-gray-700 hover:text-brand-blue-600 transition">
            Jobs
          </Link>
          {isAuthenticated && (
            <Link to={getDashboardLink()} className="text-gray-700 hover:text-brand-blue-600 transition">
              Dashboard
            </Link>
          )}
        </div>

        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <NotificationsDropdown />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative rounded-full" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium">{user?.name}</p>
                    <p className="text-xs text-muted-foreground">{user?.email}</p>
                    <p className="text-xs font-medium mt-1 capitalize">{user?.role}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to={`/${user?.role}/profile`}>Profile</Link>
                  </DropdownMenuItem>
                  {user?.role === "student" && (
                    <>
                      <DropdownMenuItem asChild>
                        <Link to="/student/applications">My Applications</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/student/resume">My Resume</Link>
                      </DropdownMenuItem>
                    </>
                  )}
                  {user?.role === "recruiter" && (
                    <>
                      <DropdownMenuItem asChild>
                        <Link to="/recruiter/jobs">My Job Postings</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/recruiter/applications">View Applications</Link>
                      </DropdownMenuItem>
                    </>
                  )}
                  {user?.role === "admin" && (
                    <>
                      <DropdownMenuItem asChild>
                        <Link to="/admin/users">Manage Users</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/admin/analytics">Analytics</Link>
                      </DropdownMenuItem>
                    </>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    className="text-red-600 cursor-pointer"
                    onClick={logout}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="flex space-x-2">
              <Button asChild variant="outline">
                <Link to="/login">Log in</Link>
              </Button>
              <Button asChild>
                <Link to="/register">Sign up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
