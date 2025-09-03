import Image from "next/image";
import Link from "next/link";

import ROUTES from "@/constants/routes";

import TagCard from "../cards/TagCard";

const hotQuestions = [
  { _id: 1, question: "What is the capital of France?" },
  { _id: 2, question: "How to learn React?" },
  { _id: 3, question: "What is the use of useEffect hook?" },
  { _id: 4, question: "What is TypeScript?" },
  { _id: 5, question: "How to manage state in React?" },
];

const popularTags = [
  { _id: 1, tag: "React", questions: 100 },
  { _id: 2, tag: "JavaScript", questions: 80 },
  { _id: 3, tag: "CSS", questions: 60 },
  { _id: 4, tag: "TypeScript", questions: 40 },
  { _id: 5, tag: "Next.js", questions: 20 },
];

const RightSideBar = () => {
  return (
    <section className="pt-36 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden ">
      <div>
        <h3 className="text-xl font-bold text-dark200_light900">
          Top Questions
        </h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ _id, question }) => (
            <Link
              key={_id}
              href={`${ROUTES.PROFILE}/${_id}`}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{question}</p>
              <Image
                src="/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      <data className="mt-8"></data>
      <h3 className="text-xl font-bold text-dark200_light900">Popular Tags</h3>
      <div className="mt-7 flex flex-col gap-4">
        {popularTags.map(({_id, tag, questions }) => (
          <TagCard key={_id} _id={_id.toString()} name={tag} questions={questions} showCount compact/>
        ))}
      </div>
    </section>
  );
};

export default RightSideBar;
