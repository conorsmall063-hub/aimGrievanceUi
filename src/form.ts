type TextQuestion = {
  type: "text";
  id: string;
  question: string;
  value: string;
};

type NumberQuestion = {
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

type Question = TextQuestion | NumberQuestion | ChoiceQuestion;

type Section = {
  title: string;
  fields: Question[];
};

type Survey = {
  sections: Section[];
};
