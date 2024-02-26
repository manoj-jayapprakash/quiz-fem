import { subjects } from "@/data";
import { Theme } from "./Theme";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Theme />
      <section className='my-8 grid gap-6 md:max-w-screen-sm mx-auto xl:max-w-[72.5rem] xl:grid-cols-2 xl:my-24'>
        <header>
          <h1 className='text-[2.5rem] leading-snug md:text-[4rem] md:leading-tight'>
            Welcome to the <strong>Frontend Quiz!</strong>
          </h1>
          <p className='text-accent my-4 text-sm md:text-xl'>
            <em>Pick a subject to get started.</em>
          </p>
        </header>
        <ul className='grid gap-4 md:gap-6'>
          {subjects.map((subject) => (
            <li key={subject.id} className='p-3 rounded-xl bg-card md:p-5'>
              <Link
                to={`/question/${subject.id}`}
                className='flex items-center gap-4'
              >
                <img
                  src={subject.icon}
                  alt={`${subject.id} subject icon`}
                  className='bg-white rounded-md w-10 p-1.5'
                />
                <p className='font-medium text-lg md:text-[1.75rem]'>
                  {subject.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
