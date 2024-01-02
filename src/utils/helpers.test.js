import { formatDate } from "./helpers";

describe("formatDate", () => {
  it("formats a timestamp correctly", () => {
    const timestamp = Date.UTC(2022, 1, 1, 13, 30);
    const formattedDate = formatDate(timestamp);
    const date = new Date(timestamp);
    expect(formattedDate).toContain(
      date.toLocaleTimeString("en-US").substr(0, 5)
    );
    expect(formattedDate).toContain(date.toLocaleTimeString("en-US").slice(-2));
  });
});
