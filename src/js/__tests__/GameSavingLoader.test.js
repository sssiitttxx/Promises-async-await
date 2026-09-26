import GameSaving from "../GameSaving";
import GameSavingLoader from "../GameSavingLoader";
import read from "../reader";
import json from "../parser";

jest.mock("../reader");
jest.mock("../parser");

describe("GameSavingLoader", () => {
  test("should load and parse game saving", async () => {
    read.mockResolvedValue("fake buffer");
    json.mockResolvedValue(
      '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}',
    );
    const saving = await GameSavingLoader.load();

    expect(saving).toBeInstanceOf(GameSaving);
    expect(saving.id).toBe(9);
    expect(saving.userInfo.name).toBe("Hitman");
  });
  test("should reject if read fails", async () => {
    read.mockRejectedValue(new Error("read error"));
    await expect(GameSavingLoader.load()).rejects.toThrow("read error");
  });
});
