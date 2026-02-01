"use client"
import { Button } from "@/components/ui/button";
import {
  ArrowUp,
  HomeIcon,
  ImagePlus,
  Key,
  LayoutDashboard,
  User,
} from "lucide-react";
import { useState } from "react";

const suggestions = [
  {
    label: "Dashboard",
    prompt:
      "Create an analytics dashboard to track customers and revenue data for a SaaS.",
    icon: LayoutDashboard,
  },
  {
    label: "SignUp Form",
    prompt:
      "Create a modern sign up form with email & password fields, Google and GitHub login options and terms checkbox.",
    icon: Key,
  },
  {
    label: "Hero Section",
    prompt:
      "Create a modern header and centered hero section for a productivity SaaS. Include a badge for feature announcement, a title with subtitle gradient effect.",
    icon: HomeIcon,
  },
  {
    label: "User Profile Card",
    prompt:
      "Create a modern user profile card component for a social media website.",
    icon: User,
  },
];

const Hero = () => {
  const [promptInput, setPromptInput] = useState<string>();

  return (
    <section className="flex flex-col items-center justify-center h-[80vh] w-screen">
      {/* Hero Description */}
      <h1 className="text-6xl md:text-7xl font-bold bg-linear-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent mb-6">
        Build something crafty.
      </h1>
      <p className="text-xl text-slate-500 max-w-3xl mx-auto">
        Elevate your online presence with expertly crafted web experiences.
      </p>

      {/* Prompt Input Box */}
      <div className="w-full max-w-2xl p-4 my-5 rounded-2xl shadow bg-slate-200">
        <textarea
          name="promptInput"
          value={promptInput}
          onChange={(e) => setPromptInput(e.target.value)}
          placeholder="Description your webpage"
          className="h-24 w-full resize-none focus:outline-none"
        ></textarea>
        <div className="flex items-center justify-between">
          <Button variant={"ghost"}>
            <ImagePlus />
          </Button>
          <Button>
            <ArrowUp />
          </Button>
        </div>
      </div>

      {/* Suggestion Prompts list */}
      <div className="flex justify-center items-center gap-3">
        {suggestions.map((suggestion, index) => (
          <Button
            variant={"outline"}
            key={index}
            onClick={() => setPromptInput(suggestion.prompt)}
          >
            <suggestion.icon />
            {suggestion.label}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
