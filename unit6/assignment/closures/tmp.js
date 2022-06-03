function throttler( callback, duration ){

    let prev =0;
    return callback=>{
        let now = new Date.getTime()
        if(now-prev>duration){
            return callback;
        }
    }  
}