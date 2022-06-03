function toggle(a,b,c){
    function aa(a){
        console.log(a);
    }
    function bb(b){
            console.log(b);
    }
    function cc(c){
                console.log(a,b,c);
            }
    
    aa()
    bb()
    cc()
}

const toggler = toggle(1,2,3)
toggler()
toggler()
toggler()