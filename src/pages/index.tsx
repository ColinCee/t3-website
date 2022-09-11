import type { NextPage } from "next";
import NextJsLogo from "../../public/images/nextjs.svg";
import TailwindLogo from "../../public/images/tailwind.svg";
import PrismaLogo from "../../public/images/prisma.svg";
import Typewriter from "typewriter-effect";

const Home: NextPage = () => {
  return (
    <main className="flex flex-auto flex-col gap-20 justify-center items-center bg-gray-900">
      <h1 className="text-3xl break-words">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hello, My name is Colin!")
              .pauseFor(1000)
              .typeString("<br/>")
              .typeString("I'm a full-stack developer.")
              .pauseFor(1000)
              .deleteChars(21)
              .typeString("machine learning enthusiast.")
              .pauseFor(1000)
              .deleteChars(28)
              .typeString("backseat gamer.")
              .pauseFor(10000)
              .start();
          }}
          options={{
            autoStart: true,
            loop: true,
            delay: 100,
          }}
        />
      </h1>
      <aside className="text-center">
        <h3>Built using </h3>

        <section className="flex gap-10">
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
      </aside>
    </main>
  );
};

export default Home;
