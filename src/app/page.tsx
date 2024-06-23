"use client";
import { memo, useState, useEffect } from "react";
import Header from "@/components/Header";
import ThemeSelector from "@/components/ThemeSelector";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";

const Page = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="container px-4 mx-auto">
        <Experience />
        <Education />
        <Certifications />
        <Skills />
        <Projects />
        <Testimonials />
      </main>
    </>
  );
};

export default memo(Page);
