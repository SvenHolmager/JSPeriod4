const  DB_URI = "mongodb://admin:admin1234@ds113019.mlab.com:13019/demo";
const TEST_DB_URI = "mongodb://admin:admin1234@ds113019.mlab.com:13019/demo";

//default timeout for Mocha async tests
const MOCHA_TEST_TIMEOUT = 5000;


module.exports = {
  DB_URI,
  TEST_DB_URI,
  MOCHA_TEST_TIMEOUT
}
