"use server";
import Header from "@/components/layouts/Header";
// import { createClient } from "@/utils/supabase/server";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/LandingPage/Hero";
import { Numbers } from "@/components/LandingPage/Numbers";
import { HowItWorks } from "@/components/LandingPage/HowItWorks";
import {
  ArrowUpRight,
  BarChart2,
  BarChart2Icon,
  Building2,
  ChevronDown,
  FileBarChart2Icon,
  FilterIcon,
  HomeIcon,
  Inbox,
  Layers,
  Layers2,
  MessageSquare,
  MessageSquareCode,
  Search,
  Zap,
} from "lucide-react";

export default async function Home() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getSession();
  return (
    <div className=",x-auto h-screen">
      <div className="mx-auto min-h-screen bg-black text-white">
        {/* Navigation */}
        <header className="flex w-full justify-center">
          <Header />
        </header>

        {/* Hero Section */}
        <div className="relative mx-4 my-8 overflow-hidden rounded-lg border border-gray-800">
          <div className="absolute inset-0">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 800 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M400,300 Q500,100 600,300 T800,300"
                stroke="rgba(255,255,255,0.05)"
                fill="none"
                strokeWidth="2"
              />
              <path
                d="M0,300 Q100,100 200,300 T400,300"
                stroke="rgba(255,255,255,0.05)"
                fill="none"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="relative flex flex-col items-center px-4 py-20 text-center">
            <h1 className="mb-2 text-4xl font-bold md:text-5xl">
              Document your applications with Style
            </h1>

            <p className="mb-8 max-w-md text-gray-400">
              Beyond the Portfolio: Explain your process, showcase your skills,
              and connect with employers on a deeper level.
            </p>
            <button className="rounded-md bg-white px-6 py-2 text-black">
              Get started
            </button>
          </div>

          {/* Dashboard UI */}
          <div className="mx-auto flex max-w-7xl border-t border-gray-800">
            {/* Sidebar */}
            <div className="hidden w-64 border-r border-gray-800 p-4 md:block">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-md bg-blue-500">
                    R
                  </div>
                  <span>Rho</span>
                </div>
                <ChevronDown className="h-4 w-4" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-white">
                  <HomeIcon className="mr-3 h-4 w-4" />
                  <span>Home</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Search className="mr-3 h-4 w-4" />
                  <span>Search</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Inbox className="mr-3 h-4 w-4" />
                  <span>Inbox</span>
                </div>

                <div className="mb-2 mt-6 text-xs uppercase text-gray-500">
                  Metrics
                </div>

                <div className="flex items-center text-gray-500">
                  <Building2 className="mr-3 h-4 w-4" />
                  <span>Industry</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <MessageSquareCode className="mr-3 h-4 w-4" />
                  <span>Topic</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Layers2 className="mr-3 h-4 w-4" />
                  <span>Model</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <FileBarChart2Icon className="mr-3 h-4 w-4" />
                  <span>Citation</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Zap className="mr-3 h-4 w-4" />
                  <span>Improve</span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Header */}
              <div className="border-b border-gray-800 p-4">
                <div className="flex items-center text-sm text-gray-500">
                  <HomeIcon className="mr-1 h-3 w-3" />
                  <span className="mr-1">/</span>
                  <span>Home</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <h2 className="text-xl font-bold">Home</h2>
                  <div className="flex space-x-2">
                    <div className="flex items-center space-x-2 text-xs">
                      <button className="rounded border border-gray-700 bg-gray-900 px-3 py-1">
                        Last 24 hours
                      </button>
                      <button className="rounded border border-gray-700 bg-gray-800 px-3 py-1">
                        Last 7 days
                      </button>
                      <button className="rounded border border-gray-700 bg-gray-900 px-3 py-1">
                        Last 30 days
                      </button>
                      <button className="flex items-center rounded border border-gray-700 bg-gray-900 px-3 py-1">
                        Custom range <ChevronDown className="ml-1 h-3 w-3" />
                      </button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="flex items-center rounded border border-gray-700 bg-gray-900 px-3 py-1">
                        <svg
                          className="mr-1 h-3 w-3"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2L2 7L12 12L22 7L12 2Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        AI models
                      </button>
                      <button className="rounded border border-gray-700 bg-gray-900 px-3 py-1">
                        Region
                      </button>
                      <button className="flex items-center rounded border border-gray-700 bg-gray-900 px-3 py-1">
                        <FilterIcon className="mr-1 h-3 w-3" />
                        Filter
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-4">
                <div className="mb-6">
                  <h3 className="mb-1 text-sm font-medium">Brand visibility</h3>
                  <p className="mb-4 text-xs text-gray-500">
                    Percentage of AI answers about Business credit cards that
                    mention Rho
                  </p>

                  <div className="mb-2 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">
                        Visibility score
                      </div>
                      <div className="text-2xl font-bold">89.8%</div>
                    </div>
                    <div className="flex items-center text-sm text-green-500">
                      <ArrowUpRight className="mr-1 h-3 w-3" />
                      1%{" "}
                      <span className="ml-1 text-gray-500">vs last week</span>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="relative h-32 w-full">
                    <svg viewBox="0 0 500 100" className="h-full w-full">
                      <path
                        d="M0,50 C20,40 40,20 60,30 C80,40 100,60 120,50 C140,40 160,20 180,30 C200,40 220,60 240,50 C260,40 280,20 300,30 C320,40 340,60 360,50 C380,40 400,20 420,30 C440,40 460,60 480,50 C500,40 520,20 540,30"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2"
                      />
                      <path
                        d="M0,50 C20,40 40,20 60,30 C80,40 100,60 120,50 C140,40 160,20 180,30 C200,40 220,60 240,50 C260,40 280,20 300,30 C320,40 340,60 360,50 C380,40 400,20 420,30 C440,40 460,60 480,50 C500,40 520,20 540,30 L540,100 L0,100 Z"
                        fill="rgba(16, 185, 129, 0.1)"
                      />
                    </svg>

                    <div className="absolute bottom-0 left-0 grid w-full grid-cols-6 text-xs text-gray-500">
                      <div>Feb 09</div>
                      <div>Feb 11</div>
                      <div>Feb 17</div>
                      <div>Feb 23</div>
                      <div>Feb 28</div>
                    </div>

                    <div className="absolute left-0 top-0 flex h-full flex-col justify-between text-xs text-gray-500">
                      <div>100%</div>
                      <div>75%</div>
                      <div>50%</div>
                      <div>25%</div>
                      <div>0</div>
                    </div>
                  </div>
                </div>

                {/* Brand Rankings */}
                <div>
                  <h3 className="mb-4 text-sm font-medium">
                    Brand Industry Ranking
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="mr-2 h-5 w-5 text-center">1</div>
                        <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-sm bg-gray-700">
                          <svg
                            className="h-3 w-3"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 12H19M19 12L12 5M19 12L12 19"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span>Chase</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2 text-red-500">-5%</span>
                        <span>92%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="mr-2 h-5 w-5 text-center">2</div>
                        <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-sm bg-blue-500">
                          R
                        </div>
                        <span>Rho</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2 text-green-500">+1%</span>
                        <span>89.8%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="mr-2 h-5 w-5 text-center">3</div>
                        <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-sm bg-blue-700">
                          A
                        </div>
                        <span>American Express</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2 text-red-500">-1%</span>
                        <span>85.2%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="mr-2 h-5 w-5 text-center">4</div>
                        <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-sm bg-gray-700">
                          C
                        </div>
                        <span>Capital on Tap</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2 text-red-500">-5%</span>
                        <span>78%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="mr-2 h-5 w-5 text-center">5</div>
                        <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-sm bg-gray-700">
                          U
                        </div>
                        <span>US Bank</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2 text-red-500">-2%</span>
                        <span>76.9%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="mr-2 h-5 w-5 text-center">6</div>
                        <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-sm bg-orange-500">
                          B
                        </div>
                        <span>Bill</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2 text-green-500">+1.5%</span>
                        <span>72.3%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-sm font-medium">Topic visibility</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
