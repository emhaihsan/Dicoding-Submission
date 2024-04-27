const averageExams = (valuesExam) => {
  const numberValidation = valuesExam.every((exam) => typeof exam === "number");
  if (!numberValidation) throw Error("please input number");

  const sumValues = valuesExam.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sumValues / valuesExam.length;
};

const isStudentPassExam = (valuesExam, name) => {
  const minValues = 75;
  const average = averageExams(valuesExam);

  if (average > minValues) {
    console.log(`${name} pass the exams`);
    return true;
  } else {
    console.log(`${name} fail the exams`);
    return false;
  }
};

// function findMax(a, b, c) {
//   if (a > b && b > c) {
//     return a;
//   } else if (b > a && a > c) {
//     return b;
//   } else {
//     return c;
//   }
// }

function findMax(a, b, c) {
  return Math.max(a, b, c);
}

// function findMax(a, b, c) {
//   if (a > b || a > c) {
//     return a;
//   } else if (b > a || b > c) {
//     return b;
//   } else {
//     return c;
//   }
// }

// function findMax(a, b, c) {
//   if (a < b && a < c) {
//     return a;
//   } else if (b < a && b < c) {
//     return b;
//   } else {
//     return c;
//   }
// }

// function findMin(a, b, c) {
//   if (a < b && a < c) {
//     return a;
//   } else if (b < a && b < c) {
//     return b;
//   } else {
//     return c;
//   }
// }

function findMin(a, b, c) {
  let minValue = a;

  if (a < b) {
    minValue = a;
  } else {
    minValue = b;
  }
  if (c < minValue) {
    minValue = c;
  }

  return minValue;
}

// function findMin(a, b, c) {
//   if (a < b) {
//     if (a < c) {
//       return a;
//     } else {
//       return c;
//     }
//   } else if (b < a) {
//     if (b < c) {
//       return b;
//     } else {
//       return c;
//     }
//   } else {
//     return c;
//   }
// }

// function findMin(a, b, c) {
//   let minValue = 0;

//   if (a < b) {
//     minValue = a;
//   } else if (b < c) {
//     minValue = b;
//   } else {
//     minValue = c;
//   }

//   return minValue;
// }

module.exports = { averageExams, isStudentPassExam, findMax, findMin };
