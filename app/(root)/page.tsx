import Link from "next/link";

import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/Filter/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

// Sample questions array
const questions = [
  {
    _id: "1",
    title: "How to learn React?",
    description: "I want to learn React, can anyone help me?",
    tags: [
      { _id: "1", name: "React", color: "bg-blue-600 text-white" },
      { _id: "2", name: "JavaScript", color: "bg-yellow-400 text-black" },
    ],
    author: {
      _id: "1",
      name: "Robert Downey Jr.",
      image:
        "https://imgs.search.brave.com/37IWyrrP5NC5vRn0p7J9UANAErb_YmpV62oDkMAnqgs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50aGVtb3ZpZWRi/Lm9yZy90L3AvdzMw/MF9hbmRfaDQ1MF9i/ZXN0djIvNXFITmpo/dGpNRDRZV0gzVVAw/cm00dEt3eENMLmpw/Zw",
    },
    createdAt: Date.now(),
    upvotes: 10,
    answers: 0,
    views: 100,
  },
  // Add more questions as needed
  {
    _id: "2",
    title: "JavaScript Promises vs Async/Await",
    description:
      "What are the main differences between Promises and Async/Await in JavaScript? When should I use one over the other?",
    tags: [
      { _id: "2", name: "JavaScript", color: "bg-yellow-400 text-black" },
      { _id: "3", name: "ES6", color: "bg-green-500 text-white" },
    ],
    author: {
      _id: "2",
      name: "Scarlett Jhonshon",
      image:
        "https://imgs.search.brave.com/kNtGk6jrWur8GRl1xfze2vHFN8VkgY65HDRN14hCFN0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5nYWxhLmRlLzIw/MjY0NDUyL3QvOWMv/djIxL3c5NjAvcjAu/NjY2Ny8tL3NjYXJs/ZXR0LWpvaGFuc3Nv/bi1yZS0tOTY0MjY3/NS0uanBn",
    },
    createdAt: Date.now() - 86400000, // 1 day ago
    upvotes: 15,
    answers: 3,
    views: 250,
  },
  {
    _id: "3",
    title: "Server Components in Next.js 13",
    description:
      "How do I effectively use Server Components in Next.js 13? What are the best practices?",
    tags: [
      { _id: "4", name: "Next.js", color: "bg-black text-white" },
      { _id: "5", name: "React", color: "bg-blue-600 text-white" },
    ],
    author: {
      _id: "3",
      name: "Shubhayu Chakraborty",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQHIiJAfv_XJMg/profile-displayphoto-shrink_800_800/B4DZV.IgY1HIAc-/0/1741577914824?e=1760572800&v=beta&t=Sn-BL83I52epnaewr46po9q5AKUqSUM2oi8vC28a9lk",
    },
    createdAt: Date.now() - 172800000, // 2 days ago
    upvotes: 22,
    answers: 5,
    views: 320,
  },
];

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string; query?: string }>;
}) => {
  const { filter = "", query = "" } = await searchParams;
  const filteredQuestions = questions.filter((question) => {
    const matchesQuery = question.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesFilter = filter
      ? question.tags[0].name.toLowerCase() === filter.toLowerCase()
      : true;
    return matchesQuery && matchesFilter;
  });

  return (
    <>
      <section className="flex w-full flex-col-reverse sm:flex-row justify-between gap-4 sm:items-center ">
        <h1 className="h1-bold text-dark100_light900 ">All Qustions</h1>
        <Button className="primary-gradient  min-h[46px] px-4py-3 !text-light-900 ">
          <Link href={ROUTES.ASK_QUESTION} className="w-full h-full">
            Ask A Question
          </Link>
        </Button>
      </section>

      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search qustions..."
          otherClasses="flex-1"
        />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6 ">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((question, idx) => (
            <QuestionCard key={idx} question={question} />
          ))
        ) : (
          <p>No questions found.</p>
        )}
      </div>
    </>
  );
};

export default Home;
