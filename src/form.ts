export type TextQuestion = {
  type: "text";
  id: string;
  question: string;
  value: string;
  prompt: string;
};

export type NumberQuestion = {
  type: "number";
  id: string;
  question: string;
  value: number;
};

type ChoiceQuestion = {
  type: "choice";
  id: string;
  question: string;
  options: string[];
  value: string;
};

export type Question = TextQuestion | NumberQuestion | ChoiceQuestion;

export type Section = {
  title: string;
  fields: Question[];
};

export type Survey = {
  sections: Section[];
};
