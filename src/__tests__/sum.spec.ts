import { sum } from "#utils/sum.js";
import { describe, expect, it } from "vitest";

describe("sum function", () => {
  it("should sum two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
