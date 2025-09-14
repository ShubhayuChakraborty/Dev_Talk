import Link from "next/link";
import React from "react";

import ROUTES from "@/constants/routes";
import { getTimestamp } from "@/lib/utils";

import TagCard from "./TagCard";
import Metric from "../Metric";

// Use global Question type from global.d.ts
interface Props {
  question: Question;
}

const QuestionCard = ({ question }: Props) => {
  const { title, tags, author, createdAt, upvotes, answers, views } = question;
  return (
    <div className="card-wraper border border-gray-200 dark:border-gray-700 rounded-xl p-6 sm:p-8 bg-white dark:bg-dark-200 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Header */}
      <div className="flex flex-col-reverse items-start justify-between gap-4 sm:flex-row">
        <div>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {getTimestamp(createdAt)}
          </span>
          <Link href={ROUTES.QUESTION(question._id)}>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 mt-1 line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {title}
            </h3>
          </Link>
        </div>
      </div>

      {/* Tags */}
      <div className="mt-4 flex w-full flex-wrap gap-2">
        {tags.map((tag: Tag) => (
          <TagCard key={tag._id} _id={tag._id} name={tag.name} compact />
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 flex w-full flex-wrap items-center justify-between gap-4">
        <Metric
          imgUrl={author.image || ""}
          alt={author.name || ""}
          value={author.name || ""}
          title={`• asked ${getTimestamp(createdAt)}`}
          href={author ? ROUTES.PROFILE(author._id) : undefined}
          textStyles="text-sm text-gray-600 dark:text-gray-300"
          isAuthor
          titleStyles="hidden sm:inline"
        />

        <div className="flex items-center gap-4 max-sm:flex-wrap max-sm:justify-start">
          <Metric
            imgUrl="/icons/like.svg"
            alt="like"
            value={upvotes}
            title="Votes"
            textStyles="text-sm font-medium text-gray-600 dark:text-gray-300"
          />
          <Metric
            imgUrl="/icons/message.svg"
            alt="message"
            value={answers}
            title="Answers"
            textStyles="text-sm font-medium text-gray-600 dark:text-gray-300"
          />
          <Metric
            imgUrl="/icons/eye.svg"
            alt="eye"
            value={views}
            title="Views"
            textStyles="text-sm font-medium text-gray-600 dark:text-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
