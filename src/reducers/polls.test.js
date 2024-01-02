import polls from "./polls";
import { RECEIVE_POLLS, ANSWER_POLL, ADD_POLL } from "../actions/polls";

describe("polls reducer", () => {
  it("should handle initial state", () => {
    expect(polls(undefined, {})).toEqual({});
  });

  it("should handle RECEIVE_POLLS", () => {
    expect(
      polls(
        {},
        {
          type: RECEIVE_POLLS,
          polls: { poll1: { id: "poll1", question: "Question 1" } },
        }
      )
    ).toEqual({ poll1: { id: "poll1", question: "Question 1" } });
  });

  it("should handle ANSWER_POLL", () => {
    expect(
      polls(
        {
          "8xf0y6ziyjabvozdd253nd": {
            id: "8xf0y6ziyjabvozdd253nd",
            author: "sarahedo",
            timestamp: 1467166872634,
            optionOne: {
              votes: ["sarahedo"],
              text: "Build our new application with Javascript",
            },
            optionTwo: {
              votes: [],
              text: "Build our new application with Typescript",
            },
          },
        },
        {
          type: ANSWER_POLL,
          qid: "8xf0y6ziyjabvozdd253nd",
          answer: "optionTwo",
          authedUser: "user1",
        }
      )
    ).toEqual({
      "8xf0y6ziyjabvozdd253nd": {
        id: "8xf0y6ziyjabvozdd253nd",
        author: "sarahedo",
        timestamp: 1467166872634,
        optionOne: {
          votes: ["sarahedo"],
          text: "Build our new application with Javascript",
        },
        optionTwo: {
          votes: ["user1"],
          text: "Build our new application with Typescript",
        },
      },
    });
  });

  it("should handle ADD_POLL", () => {
    expect(
      polls(
        {},
        {
          type: ADD_POLL,
          poll: {
            id: "8xf0y6ziyjabvozdd253nd",
            author: "sarahedo",
            timestamp: 1467166872634,
            optionOne: {
              votes: ["sarahedo"],
              text: "Build our new application with Javascript",
            },
            optionTwo: {
              votes: [],
              text: "Build our new application with Typescript",
            },
          },
        }
      )
    ).toEqual({
      "8xf0y6ziyjabvozdd253nd": {
        id: "8xf0y6ziyjabvozdd253nd",
        author: "sarahedo",
        timestamp: 1467166872634,
        optionOne: {
          votes: ["sarahedo"],
          text: "Build our new application with Javascript",
        },
        optionTwo: {
          votes: [],
          text: "Build our new application with Typescript",
        },
      },
    });
  });
});
