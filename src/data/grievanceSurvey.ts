import type { Survey } from "@/form";
import type { TFunction } from "i18next";

export const createGrievanceSurvey = (t: TFunction): Survey => ({
  sections: [
    {
      title: t('sectionOne.header'),
      fields: [
        {
          type: "text",
          id: 'questionOne',
          question: t('sectionOne.questionOne'),
          value: 'string',
          prompt: t('sectionOne.promptOne')
        },
        {
          type: "text",
          id: 'questionTwo',
          question: t('sectionOne.questionTwo'),
          value: 'string',
          prompt: ''
        },
        {
          type: "text",
          id: 'questionThree',
          question: t('sectionOne.questionThree'),
          value: 'string',
          prompt: ''
        },
        {
          type: "text",
          id: 'questionFour',
          question: t('sectionOne.questionFour'),
          value: 'string',
          prompt: t('sectionOne.promptFour'),
        },
        {
          type: "text",
          id: 'questionFive',
          question: t('sectionOne.questionFive'),
          value: 'string',
          prompt: t('sectionOne.promptFive'),
        },
        {
          type: "text",
          id: 'questionSix',
          question: t('sectionOne.questionSix'),
          value: 'string',
          prompt: t('sectionOne.promptSix'),
        },
      ]
    },
    {
      title: t('sectionTwo.Header'),
      fields: [
        {
          type: "text",
          id: 'sectionTwoQuestionOne',
          question: t('sectionTwo.questionOne'),
          value: 'string',
          prompt: t('sectionTwo.promptOne')
        },
        {
          type: "text",
          id: 'sectionTwoQuestionTwo',
          question: t('sectionTwo.questionTwo'),
          value: 'string',
          prompt: ''
        },
        {
          type: "text",
          id: 'sectionTwoQuestionThree',
          question: t('sectionTwo.questionThree'),
          value: 'string',
          prompt: t('sectionTwo.promptThree')
        },
      ]
    },
    {
      title: t('sectionThree.Header'),
      fields: [
        {
          type: "text",
          id: 'sectionThreeQuestionOne',
          question: t('sectionThree.questionOne'),
          value: 'string',
          prompt: t('sectionThree.promptOne')
        },
        {
          type: "text",
          id: 'sectionThreeQuestionTwo',
          question: t('sectionThree.questionTwo'),
          value: 'string',
          prompt: ''
        },
      ]
    },
    {
      title: t('sectionFour.Header'),
      fields: [
        {
          type: "text",
          id: 'sectionFourQuestionOne',
          question: t('sectionFour.questionOne'),
          value: 'string',
          prompt: t('sectionFour.promptOne')
        },
        {
          type: "text",
          id: 'sectionFourQuestionTwo',
          question: t('sectionFour.questionTwo'),
          value: 'string',
          prompt: ''
        },
        {
          type: "text",
          id: 'sectionFourQuestionThree',
          question: t('sectionFour.questionThree'),
          value: 'string',
          prompt: t('sectionFour.promptThree')
        },
      ]
    },
    {
      title: t('sectionFive.Header'),
      fields: [
        {
          type: "text",
          id: 'sectionFiveQuestionOne',
          question: t('sectionFive.questionOne'),
          value: 'string',
          prompt: ''
        },
        {
          type: "text",
          id: 'sectionFiveQuestionTwo',
          question: t('sectionFive.questionTwo'),
          value: 'string',
          prompt: t('sectionFive.promptTwo')
        },
        {
          type: "text",
          id: 'sectionFiveQuestionThree',
          question: t('sectionFive.questionThree'),
          value: 'string',
          prompt: ''
        },
        {
          type: "text",
          id: 'sectionFiveQuestionFour',
          question: t('sectionFive.questionFour'),
          value: 'string',
          prompt: ''
        },
      ]
    },
  ]
});
