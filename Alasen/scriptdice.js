// Dice rolling function from: http://www.jsdice.com/roller/


$(document).ready(function(){

    $('#roll').on("click", function() {
        console.log("prima")
        $(".output").html( rollDice($("#dice").val()) );
        console.log("dopo")
    });


})

function roll(dice){
    dice = dice.replace(/- */,'+ -');
    dice = dice.replace(/D/,'d');
    var re = / *\+ */;
    var items = dice.split(re);
    var res = [];
    var type = [];
    for ( var i=0; i<items.length; i++) {
        var match = items[i].match(/^[ \t]*(-)?(\d+)?(?:(d)(\d+))?[ \t]*$/);
        if (match) {
            var sign = match[1]?-1:1;
            var num = parseInt( match[2] || "1", 10);
            var max = parseInt( match[4] || "0", 10);
            if (match[3]) {
                for ( j=1; j<=num; j++) {
                    res[res.length] = sign * Math.ceil(max*Math.random());
                    type[type.length] = max;
                }
            }
            else {
                res[res.length] = sign * num;
                type[type.length] = 0;
            }
        }
        else return null;
    }
    if (res.length === 0) return null;
    return {"res":res, "type":type}
}

function rollDice(dice){
    console.log("meh")
    if (!dice) return;
    let data = roll(dice);
    if (data) {
        var str = ""
        var total = 0
        for (var i=0; i<data.res.length; i++) {
            total = total + data.res[i]
            if (data.res.length>0) {
                var special = "";
                if (i) str = str + ((data.res[i])>=0?" + ":" - ")
                if (data.type[i]) {
                    str = str + "<span class='type'>d"+data.type[i]+"</span>"
                    if( data.type[i] == data.res[i] ) special = "crit"
                    if( data.res[i] == 1 ) special = "fum"
                }
                str = str + "<span class='roll "+special+"'>" + Math.abs(data.res[i]) + "</span>";
            }
        }
        str = str + " = <span class='total'>" + total + "</span>"
        return str;
    }
    else {
        return "Error in roll formula";
    }
}

