console.log("active")
var zero = (document.getElementById("zero"))
var one = document.getElementById("one")
var two = document.getElementById("two")
var three = document.getElementById("three")
var four = document.getElementById("four")
var five = document.getElementById("five")
var six = document.getElementById("six")
var seven = document.getElementById("seven")
var eight = document.getElementById("eight")
var nine = document.getElementById("nine")
var dot = document.getElementById("dot")
var add = document.getElementById("add")
var sub = document.getElementById("sub")
var mul = document.getElementById("mul")
var div = document.getElementById("div")
var mod = document.getElementById("mod")
function eql(){
    var cur = document.getElementById("cur")
    var pre = document.getElementById("pre")
    try {
        pre.value = cur.value
        cur.value = eval(cur.value)
    } catch (error) {
        cur.value = "SyntaxError"
    }
}

function clr(){
    cur.value = ""
}

function clrall(){
    cur.value = ""
    pre.value = ""
}