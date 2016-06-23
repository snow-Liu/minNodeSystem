var opFile = require('./opfile');
var opfile = new opFile();

function route(args){
    var path = args.path;
    var contents = args.contents ? args.contents : null;
    var callback = args.callback?args.callback:"callback";
    var jsonResult = null;
        if (args.opkind && args.optype) {
            //如果是文件操作，那么进行对文件的操作
            if (args.opkind === "opfile") {
                var results = opfile[args.optype](path, contents);
                if (results != null) {
                    jsonResult = {
                        state: 1,
                        data: results,
                        "callback":callback
                    }
                }
            }
        }
    return jsonResult;
}
exports.route = route;