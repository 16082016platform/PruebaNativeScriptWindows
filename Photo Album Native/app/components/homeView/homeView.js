var frameModule = require("ui/frame");
function buttonForwardTap(args) {
    var topmost = frameModule.topmost();
    topmost.navigate("components/page1/page1");
}
exports.buttonForwardTap = buttonForwardTap;