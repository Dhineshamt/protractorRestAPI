describe("API Test", () => {
  const request = require("request");

  it("Should reach google.com", (done) => {
    const options = {
      url: "https://reqres.in/api/users",
      method: "POST",
      body: {
        "name": "morpheus",
        "job": "leader"
      },
      json: true
    };

    request(options, function (err, res, body) {
      console.log(res.statusCode);
      expect(res.statusCode).toBe(202);
      done();
    });
  });
});
