import { useState } from "react";
import {
  ChevronDown,
  BookOpen,
  Shield,
  Settings,
  LogOut,
  HelpCircle,
  HomeIcon,
  Code,
  User,
  Menu,
  X,
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

const NAVIGATION_ITEMS = [
  "Repositories",
  "AI Code Review",
  "Cloud Security",
  "How to Use",
  "Settings",
] as const;

const Users = ["AliceWonderland", "BobBuilder", "CharlieBrown", "DianaPrince"];

type NavigationItem = (typeof NAVIGATION_ITEMS)[number];

const Sidebar = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] =
    useState<NavigationItem>("Repositories");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    const newDrawerState = !isDrawerOpen;
    setIsDrawerOpen(newDrawerState);
    if (newDrawerState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  return (
    <div className="w-full md:w-fit">
      {/* top bar */}
      <div className="h-16 flex justify-between items-center p-4 bg-white shadow-md md:hidden z-50">
        <div className="w-40 h-8">
          <img
            src="/images/logo.svg"
            alt="CodeAnt AI"
            className="w-full h-full"
          />
        </div>
        <Button variant="link" size="icon" onClick={toggleDrawer}>
          {isDrawerOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      <div
        className={`w-screen h-screen fixed z-10 bg-gray-800 opacity-30 ${
          isDrawerOpen ? "" : "hidden"
        }`}
      ></div>

      {/* dynamic nav board  */}
      <div
        className={`transform transition-transform duration-300 ${
          isDrawerOpen ? "block" : "hidden"
        } md:flex flex-col w-full md:w-64 shadow-md md:shadow-none border-r bg-white p-4 fixed md:static top-[64px] left-0 z-20 h-fit md:h-full`}
      >
        <div className="hidden md:flex items-center gap-2 px-2 mb-4">
          <div className="w-40 h-8">
            <img
              src="/images/logo.svg"
              alt="CodeAnt AI"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="mb-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-between font-normal border-gray-200"
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  <User className="h-4 w-4" />
                  <span className="truncate whitespace-nowrap">{Users[0]}</span>
                </div>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white rounded-xl">
              {Users.map((user) => (
                <DropdownMenuItem key={user} className="rounded-lg">
                  <User className="h-4 w-4 mr-2" />
                  {user}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <nav className="flex flex-col gap-1">
          {NAVIGATION_ITEMS.map((item) => (
            <Button
              key={item}
              variant="ghost"
              className={`justify-start gap-2 h-10 font-normal ${
                selectedItem === item
                  ? "bg-[#1570EF] text-white hover:bg-[#1570EF] hover:text-white"
                  : "text-gray-600 hover:bg-blue-50 hover:text-gray-600"
              }`}
              onClick={() => setSelectedItem(item)}
            >
              {item === "Repositories" && <HomeIcon className="h-4 w-4" />}
              {item === "AI Code Review" && <Code className="h-4 w-4" />}
              {item === "Cloud Security" && <Shield className="h-4 w-4" />}
              {item === "How to Use" && <BookOpen className="h-4 w-4" />}
              {item === "Settings" && <Settings className="h-4 w-4" />}
              {item}
            </Button>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-1">
          <Button
            variant="ghost"
            className="justify-start gap-2 h-10 font-normal text-gray-600 hover:bg-blue-50 hover:text-gray-600"
          >
            <HelpCircle className="h-4 w-4" />
            Support
          </Button>

          <Button
            onClick={() => navigate("/login")}
            variant="ghost"
            className="justify-start gap-2 h-10 font-normal text-gray-600 hover:bg-blue-50 hover:text-gray-600"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
