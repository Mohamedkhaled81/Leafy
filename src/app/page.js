import "./globals.css";
import SlideShow from "@/components/slideShow";
import Link from "next/link";


export default function Home() {
  return (
    <>
    <div className="flex flex-col text-gray-300 text-3xl cont mt-20 mx-auto max-w-5xl">
      <header className="flex flex-col md:flex-row items-center justify-evenly gap-10">
        <div>
          <SlideShow></SlideShow>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-4xl font-bold mb-6">The Best and Elegant Plants</h1>
            <p>Where every leaf tells a story of life, Carefully selected plants grown with love to ensure top quality.</p>
          </div>
          <div className="flex gap-6 items-baseline">
            <Link className="text-green-400 " href="/plants">Show me plants!</Link>
            <Link className="border-2 border-green-400 text-green-400 px-5 py-2 rounded-xl " href="/about">Know About Us</Link>
          </div>
        </div>
      </header>
    </div>
    </>
  );
}


