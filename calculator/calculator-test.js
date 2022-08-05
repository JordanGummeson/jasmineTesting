
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 41000,
    rate: 4.5,
    years: 10
  }
  expect(calculateMonthlyPayment(values)).toEqual('424.92')
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 10043,
    rate: 5.8,
    years: 8
  }
  expect(calculateMonthlyPayment(values)).toEqual('131.00')
});

/// etc
