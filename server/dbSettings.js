const DB_URI = "mongodb://admin:1234@ds219100.mlab.com:19100/4periodproduction";
const TEST_DB_URI = "mongodb://admintest:1234@ds117960.mlab.com:17960/4periodtest";

//default timeout for Mocha async tests
const MOCHA_TEST_TIMEOUT = 5000;


module.exports = {
  DB_URI,
  TEST_DB_URI,
  MOCHA_TEST_TIMEOUT
}
