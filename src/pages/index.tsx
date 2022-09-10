import type { NextPage } from "next";
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
      <section className="text-center">
        <h3>Built using </h3>
        <ul>
          <li>
            <a href="https://nextjs.org/">Next.js</a>
          </li>
          <li>
            <a href="https://tailwindcss.com/">Tailwind CSS</a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Home;
