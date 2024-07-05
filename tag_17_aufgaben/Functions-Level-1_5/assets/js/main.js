function math(a, b) {
  console.log(a * b);
  if (b != 0) {
    console.log(a / b);
  }
  if (b == 0) {
    console.log("Division by zero");
  }
}

math(10, 2);
math(30, 20);
math(100, 100);
math(5, 0);
math(45, 173);
math(1, 1000);
