"use server";

import { z } from "zod";

import { AskQuestionSchema } from "@/lib/validation";

interface CreateQuestionParams {
  title: string;
  content: string;
  tags: string[];
}

interface EditQuestionParams extends CreateQuestionParams {
  questionId: string;
}

interface ActionResponse<T = null> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
  };
  status?: number;
}

export async function createQuestion(
  data: z.infer<typeof AskQuestionSchema>
): Promise<ActionResponse<Question>> {
  try {
    // TODO: Implement the actual question creation logic
    // This is a placeholder implementation
    console.log("Creating question:", data);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Return mock success response
    const newQuestion: Question = {
      _id: `question-${Date.now()}`,
      title: data.title,
      description: data.content,
      tags: data.tags.map((tag) => ({
        _id: tag.toLowerCase().replace(/\s+/g, "-"),
        name: tag,
      })),
      author: {
        _id: "temp-author-id",
        name: "Current User",
      },
      createdAt: Date.now(),
      upvotes: 0,
      answers: 0,
      views: 0,
    };

    return {
      success: true,
      data: newQuestion,
      status: 201,
    };
  } catch (error) {
    console.error("Error creating question:", error);
    return {
      success: false,
      error: {
        message:
          error instanceof Error ? error.message : "Failed to create question",
      },
      status: 500,
    };
  }
}

export async function editQuestion(
  params: EditQuestionParams
): Promise<ActionResponse<Question>> {
  try {
    const { questionId, title, content, tags } = params;

    // TODO: Implement the actual question editing logic
    // This is a placeholder implementation
    console.log("Editing question:", { questionId, title, content, tags });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Return mock success response
    const updatedQuestion: Question = {
      _id: questionId,
      title,
      description: content,
      tags: tags.map((tag) => ({
        _id: tag.toLowerCase().replace(/\s+/g, "-"),
        name: tag,
      })),
      author: {
        _id: "temp-author-id",
        name: "Current User",
      },
      createdAt: Date.now(),
      upvotes: 0,
      answers: 0,
      views: 0,
    };

    return {
      success: true,
      data: updatedQuestion,
      status: 200,
    };
  } catch (error) {
    console.error("Error editing question:", error);
    return {
      success: false,
      error: {
        message:
          error instanceof Error ? error.message : "Failed to edit question",
      },
      status: 500,
    };
  }
}
