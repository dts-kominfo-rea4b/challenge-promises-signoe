const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  return new Promise((resolve) => {
    (async () => {
      let IXX = await promiseTheaterIXX();
      let VGC = await promiseTheaterVGC();

      const countIXX = IXX.filter((obj) => obj.hasil === emosi).length;
      const countVGC = VGC.filter((obj) => obj.hasil === emosi).length;
      let count = countIXX + countVGC;

      return resolve(count);
    })();
  });
};

module.exports = {
  promiseOutput,
};
