"use client"
import { useMediaQuery } from '@react-hook/media-query';
import { Lista } from "@/components/Sections/Lista";
import { Main } from "@/components/Sections/Main";
import { BrowserRouter as Router } from 'react-router-dom';

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 768px)"); // Cambia el tamaño máximo según lo consideres necesario
  return (
    <>
      <div className="flex h-screen">
        {!isMobile && (
          <div className="border w-64 h-full">
            <Lista />
          </div>
        )}
        <div className="flex-auto w-2/3 p-0 h-full mx-auto max-w-screen-xl">
          <Router>
            <Main />
          </Router>
        </div>
      </div>
    </>
  );
}
