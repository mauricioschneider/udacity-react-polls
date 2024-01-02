import { formatDate } from "./helpers";

describe("formatDate", () => {
  it("formats a timestamp correctly", () => {
    const timestamp = 1572393600000; // This is the timestamp for October 30, 2019
    const formattedDate = formatDate(timestamp);
    expect(formattedDate).toBe("5:00:PM | 10/29/2019");
  });
});
