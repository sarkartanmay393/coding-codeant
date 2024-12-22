import { Button } from "../components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { GitGraphIcon, Github, Lock } from "lucide-react";

import CodeantLogo from "../../public/images/logo.svg";
import AnalyticsImg from "../../public/images/analytics.svg";
import BiggerSmokePng from "../../public/images/bigger-smoke.svg";

const SignInPage = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Left Side */}
      <div className="relative flex-1 items-center justify-center bg-white hidden md:flex">
        <img src={AnalyticsImg} alt="" className="z-50" />
        <img src={BiggerSmokePng} alt="" className="fixed bottom-6 left-6" />
      </div>

      {/* Right Side */}
      <div className="flex-1 flex flex-col items-center justify-center gap-2 bg-gray-50">
        
        {/* Login Board */}
        <div className="m-4 flex min-w-[320px] min-h-[524px] md:w-[620px] md:h-[600px] flex-col rounded-lg bg-white px-6 py-9 shadow-sm gap-5 border-[0.1px] overflow-auto">
          {/* Header */}
          <div className="flex flex-col gap-9 text-center">
            <img
              src={CodeantLogo}
              alt="CodeAnt AI"
              className="mx-auto h-8"
            />
            <h2 className="text-3xl font-semibold whitespace-nowrap">
              Welcome to CodeAnt AI
            </h2>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="saas" className="w-full">
            <TabsList className="grid w-full grid-cols-2 h-16 p-0 mb-9 border-[1px] rounded-lg">
              <TabsTrigger className="rounded-lg h-full text-lg text-[20px] text-gray-800 bg-gray-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white" value="saas">SAAS</TabsTrigger>
              <TabsTrigger className="rounded-lg h-full text-lg text-[20px] text-gray-800 bg-gray-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white" value="self-hosted">Self Hosted</TabsTrigger>
            </TabsList>

            <TabsContent value="saas" className="space-y-3">
              <Button variant="outline" size="lg" className="w-full">
                <Github className="mr-2 h-4 w-4" />
                Sign in with GitHub
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                <img
                  src="/bitbucket-icon.svg"
                  alt=""
                  className="mr-2 h-4 w-4"
                />
                Sign in with Bitbucket
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                <img
                  src="/azure-devops-icon.svg"
                  alt=""
                  className="mr-2 h-4 w-4"
                />
                Sign in with Azure DevOps
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                <GitGraphIcon className="mr-2 h-4 w-4" />
                Sign in with GitLab
              </Button>
            </TabsContent>

            <TabsContent value="self-hosted" className="space-y-3">
              <Button variant="outline" size="lg" className="w-full">
                <img
                  src="/bitbucket-icon.svg"
                  alt=""
                  className="mr-2 h-4 w-4"
                />
                Self Hosted GitLab
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                <Lock className="mr-2 h-4 w-4" />
                Sign in with SSO
              </Button>
            </TabsContent>
          </Tabs>
        </div>

        {/* Policy Text */}
        <div className="text-center text-sm text-gray-500">
          By signing up you agree to the{" "}
          <a href="#" className="text-black hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
