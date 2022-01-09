const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.should();
chai.use(chaiHttp);

describe("/POST logout", () => {
  it("it should return a message", (done) => {
    chai
      .request.agent('http://localhost:3001')
      .post(`/auth/logout`)
      .end((err, res) => {
        res.text.should.have
          .eql("You have successfully logged out");
        done();
      });
  });
});