import { _saveQuestion, _saveQuestionAnswer, _getQuestions } from "./_DATA";

describe("_saveQuestion", () => {
  it("saves data correctly", async () => {
    const mockData = {
      author: "tylermcginnis",
      optionOneText: "This is option one",
      optionTwoText: "This is option two",
    };

    const poll = await _saveQuestion(mockData);

    expect(poll.author).toEqual("tylermcginnis");
    expect(poll.optionOne.text).toEqual("This is option one");
    expect(poll.optionTwo.text).toEqual("This is option two");
  });

  it("returns an error if incorrect data is passed", async () => {
    const mockData = {
      author: "tylermcginnis",
      optionOneText: "This is option one",
    }; // missing 'optionTwo'
    await expect(_saveQuestion(mockData)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("_saveQuestionAnswer", () => {
  it("saves data correctly", async () => {
    const mockData = {
      authedUser: "tylermcginnis",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
    };
    const res = await _saveQuestionAnswer(mockData);
    expect(res).toEqual(true);

    const questions = await _getQuestions();
    expect(questions["8xf0y6ziyjabvozdd253nd"]["optionOne"]["votes"]).toContain(
      "tylermcginnis"
    );
  });

  it("returns an error if incorrect data is passed", async () => {
    const mockData = {
      authedUser: "tylermcginnis",
      qid: "8xf0y6ziyjabvozdd253nd",
    }; // missing 'answer'

    await expect(_saveQuestionAnswer(mockData)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});
