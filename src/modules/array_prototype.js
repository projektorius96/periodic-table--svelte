// globalThis.myArray = []
globalThis.skippedValues = function (skip) {return skip;} /* global helper */
export let getInterval = function (start, step, end, inc=false, skip){
    let _this = {
        'skipRange' : []
    } 
    loop1:
    for (start; start < end+inc; start += step) {
            loop2:
            for (let items of skip) {
                if (items == start) {
                continue loop1;
                }
            }
            _this['skipRange'].push( start );
    }
    return _this
}
