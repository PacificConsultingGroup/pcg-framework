(function () {
    const Helper = require('./helper');
    const Main = function () {
        const helper = new Helper();

        Main.prototype.log = function (val) {
            helper.log(`[Main]: ${val}`);
        }

        return this;
    }
    module.exports = Main;
})();