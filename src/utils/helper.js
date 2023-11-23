import questionAnswerData from "../assets/questions-answer.json";

export const getParsedQuetionAnswer = () => {
  const questionAnswerItems = JSON.parse(JSON.stringify(questionAnswerData));
  const parsedQuetionAnswer = {};
  if (Array.isArray(questionAnswerItems)) {
    questionAnswerItems.forEach((item) => {
      const { id } = item;
      parsedQuetionAnswer[id] = {
        ...item,
      };
    });
  }
  return parsedQuetionAnswer;
};

export const getQuetionAnswerGroupByCategory = (parsedQuetionAnswer) => {
  const quetionAnswerGroupByCategory = {};

  if (parsedQuetionAnswer) {
    Object.keys(parsedQuetionAnswer).forEach((key) => {
      const item = parsedQuetionAnswer[key];
      const { category } = item;
      if(!quetionAnswerGroupByCategory[category]) {
        quetionAnswerGroupByCategory[category] = {
          category: item.category,
          description: item.description,
          questionAnswers: []
        }
      }
      quetionAnswerGroupByCategory[category].questionAnswers.push(item);
    });
  }
  console.log('parsedQuetionAnswer - ', quetionAnswerGroupByCategory);
  return quetionAnswerGroupByCategory;
};
