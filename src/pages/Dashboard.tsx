import { RefreshCcw, Plus, Database, Loader2Icon } from "lucide-react";
import { Button } from "../components/ui/button";
import { SearchInput } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import Sidebar from "./Sidebar";
import React, { useEffect } from "react";

type Language =
  | "Python"
  | "Java"
  | "Rust"
  | "Swift"
  | "Javascript"
  | "React"
  | "HTML/CSS"
  | "PHP"
  | "C++";

type Repository = {
  name: string;
  isPublic: boolean;
  language: Language;
  size: string;
  updatedAgo: string;
};

const RepositoryListing = () => {
  const [loading, setLoading] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleRefresh = (until: number) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, until ?? 3000)
  }

  useEffect(() => {
    handleRefresh(500)
  }, [])

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredRepositories = React.useMemo(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return repositories.filter((repo) =>
      repo.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-hidden">
      <Sidebar />
      <main className="md:pl-64">
        <div className="bg-white border-[1px] shadow-sm rounded-lg md:m-6 p-4 md:p-6">
          <div className="border-b pb-6">
            <div className="md:flex md:justify-between md:items-center mb-4 gap-2">
              <div>
                <h1 className="text-2xl font-semibold mb-1">Repositories</h1>
                <p className="text-sm text-gray-500">{loading ? '--' : repositories.length } total repositories</p>
              </div>
              <div className="flex gap-2 mt-4 md:mt-0">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 text-sm font-normal"
                  onClick={() => handleRefresh(1500)}
                >
                  <RefreshCcw className="h-5 w-5" />
                  Refresh All
                </Button>
                <Button
                  size="sm"
                  className="flex items-center gap-2 bg-blue-500 text-sm font-normal hover:bg-blue-600"
                >
                  <Plus className="h-5 w-5" />
                  Add Repository
                </Button>
              </div>
            </div>
            <SearchInput
              prefix=""
              placeholder="Search Repositories"
              className=""
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          <div className="divide-y">
            {loading && <div className="w-full p-6 flex justify-center items-center text-gray-600"><Loader2Icon className="animate-spin " /></div>}
            {!loading && filteredRepositories?.map((repo, i) => (
              <RepoCard key={i} repo={repo} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default RepositoryListing;

const RepoCard = ({ repo }: { repo: any }) => {
  return (
    <div key={repo.name} className="p-3 hover:bg-[#F5F5F5] cursor-pointer">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-normal text-lg text-[20px] text-gray-900">
              {repo.name}
            </h3>
            <Badge
              variant={repo.isPublic ? "secondary" : "outline"}
              className={`text-sm px-2 py-0.5 font-normal text-blue-600 bg-blue-50 border-blue-300 rounded-full`}
            >
              {repo.isPublic ? "Public" : "Private"}
            </Badge>
          </div>
          <div className="flex items-center gap-10 text-sm text-[16px] font-normal">
            <div className="flex items-center gap-1.5">
              {repo.language}
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
            </div>
            <div className="flex items-center gap-1.5">
              <Database className="h-3 w-3" />
              {repo.size}
            </div>
            <p>Updated {repo.updatedAgo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const repositories: Repository[] = [
  {
    name: "design-system",
    isPublic: true,
    language: "React",
    size: "7320 KB",
    updatedAgo: "1 day ago",
  },
  {
    name: "codeant-ci-app",
    isPublic: false,
    language: "Javascript",
    size: "5871 KB",
    updatedAgo: "2 days ago",
  },
  {
    name: "analytics-dashboard",
    isPublic: false,
    language: "Python",
    size: "4521 KB",
    updatedAgo: "5 days ago",
  },
  {
    name: "mobile-app",
    isPublic: true,
    language: "Swift",
    size: "3096 KB",
    updatedAgo: "3 days ago",
  },
  {
    name: "e-commerce-platform",
    isPublic: false,
    language: "Java",
    size: "6210 KB",
    updatedAgo: "6 days ago",
  },
  {
    name: "blog-website",
    isPublic: true,
    language: "HTML/CSS",
    size: "1876 KB",
    updatedAgo: "4 days ago",
  },
  {
    name: "portfolio-site",
    isPublic: true,
    language: "HTML/CSS",
    size: "2048 KB",
    updatedAgo: "2 days ago",
  },
  {
    name: "weather-app",
    isPublic: false,
    language: "Javascript",
    size: "3120 KB",
    updatedAgo: "7 days ago",
  },
  {
    name: "machine-learning-model",
    isPublic: false,
    language: "Python",
    size: "5120 KB",
    updatedAgo: "10 days ago",
  },
  {
    name: "game-engine",
    isPublic: true,
    language: "C++",
    size: "10240 KB",
    updatedAgo: "15 days ago",
  },
];
