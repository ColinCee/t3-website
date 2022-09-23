import type { NextPage } from "next";
import NextJsLogo from "../../public/images/nextjs.svg";
import TailwindLogo from "../../public/images/tailwind.svg";
import PrismaLogo from "../../public/images/prisma.svg";
import Typewriter from "typewriter-effect";
import Eyeball from "../components/eyeball";

const Home: NextPage = () => {
  return (
    <main className="flex flex-auto flex-col gap-20 justify-center items-center bg-gray-900 p-4">
      <h1 className="text-3xl break-words">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hello, My name is Colin!")
              .pauseFor(1500)
              .typeString("<br/>")
              .typeString("I'm a full-stack developer.")
              .pauseFor(1500)
              .deleteChars(21)
              .typeString("machine learning enthusiast.")
              .pauseFor(1500)
              .deleteChars(28)
              .typeString("casual gamer.")
              .pauseFor(8000)
              .start();
          }}
          options={{
            autoStart: true,
            loop: true,
            delay: 80,
            deleteSpeed: 50,
          }}
        />
      </h1>
      <aside className="text-center bg-gray-700 p-12 rounded-lg relative">
        <h3 className="my-4">Built using </h3>

        <section className="flex justify-center flex-wrap gap-8">
          <a href="https://nextjs.org/">
            <NextJsLogo alt="Next.js Logo" width={100} height={100} />
          </a>

          <a href="https://tailwindcss.com/">
            <TailwindLogo alt="Tailwind CSS Logo" width={100} height={100} />
          </a>

          <a href="https://www.prisma.io/">
            <PrismaLogo alt="Prisma Logo" width={100} height={100} />
          </a>
        </section>
        <Eyeball />
      </aside>
    </main>
  );
};

export default Home;
