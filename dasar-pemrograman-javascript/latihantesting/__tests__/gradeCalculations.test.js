// const { averageExams } = require("../gradeCalculations");

const {
  averageExams,
  isStudentPassExam,
  findMax,
  findMin,
} = require("../gradealculations");

describe("Testing averageExams", () => {
  test("should return the average of exam values", () => {
    expect(averageExams([90, 95, 85, 100])).toBe(92.5);
  });

  test("should throw an error if any value is not a number", () => {
    expect(() => averageExams([90, "95", 85, 100])).toThrow(
      "please input number"
    );
  });
});

describe("Testing isStudentPassExam", () => {
  test("should return true if the average is above 75", () => {
    expect(isStudentPassExam([80, 90, 70, 85], "Alice")).toBeTruthy();
  });

  test("should return false if the average is 75 or below", () => {
    expect(isStudentPassExam([60, 70, 65, 68], "Bob")).toBeFalsy();
  });

  test("should console.log pass message for successful students", () => {
    console.log = jest.fn();
    isStudentPassExam([80, 90, 70, 85], "Alice");
    expect(console.log).toHaveBeenCalledWith("Alice pass the exams");
  });

  test("should console.log fail message for unsuccessful students", () => {
    console.log = jest.fn();
    isStudentPassExam([60, 70, 65, 68], "Bob");
    expect(console.log).toHaveBeenCalledWith("Bob fail the exams");
  });

  test("should return the max number between 3 arguments", () => {
    expect(findMax(1, 2, 3)).toEqual(3);
    expect(findMax(5, 1, 2)).toEqual(5);
    expect(findMax(102, 404, 48)).toEqual(404);
    expect(findMax(-1, 0, -1)).toEqual(0);
    expect(findMax(2, 2, 2)).toEqual(2);
  });

  test("should return the minimum number between 3 arguments", () => {
    expect(findMin(1, 2, 3)).toEqual(1);
    expect(findMin(5, 1, 2)).toEqual(1);
    expect(findMin(102, 404, 48)).toEqual(48);
    expect(findMin(-1, 0, -1)).toEqual(-1);
    expect(findMin(2, 2, 2)).toEqual(2);
  });
});
