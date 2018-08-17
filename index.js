
var script = document.createElement("script");
script.src="http://api.jisuapi.com/jieqi/query?appkey=fd723f4e8718afa9&year=2018&callback=time";

var message;

var message = window.localStorage;
function createlist() {
    var thing = JSON.parse(message.a);
    ul = document.createElement("ul");
    for(var i=0;i<24;i++) {
        li = document.createElement("li"); 

        var box1 = document.createElement("div"); 
        box1.setAttribute("class","top");

        var box2 = document.createElement("div"); 
        box2.setAttribute("class","bottom");
        li.appendChild(box1);
        li.appendChild(box2);

        var title = document.createElement("div"); 
        title.setAttribute("class","title");
        pic = document.createElement("div"); 
        pic.setAttribute("class","pic");
        pic.setAttribute("style","background-image:url("+thing.result.list[i].pic+")"  );
        
        box1.appendChild(title);
        box1.appendChild(pic);

        var big = document.createElement("div"); 
        big.setAttribute("class","big");
        big.innerHTML = thing.result.list[i].name;
        var small = document.createElement("div"); 
        small.setAttribute("class","small");
        small.innerHTML = thing.result.list[i].time.substr(0,10);
        var season = document.createElement("div"); 
        season.setAttribute("class","season");
        if(thing.result.list[i].jieqiid>=1&&thing.result.list[i].jieqiid<=6) {
            season.innerHTML = "春"
        }else if(thing.result.list[i].jieqiid>=7&&thing.result.list[i].jieqiid<=12) {
            season.innerHTML = "夏"
        }else if(thing.result.list[i].jieqiid>=13&&thing.result.list[i].jieqiid<=18) {
            season.innerHTML = "秋"
        }else if(thing.result.list[i].jieqiid>=19&&thing.result.list[i].jieqiid<=24) {
            season.innerHTML = "冬"
        }
        
        title.appendChild(big);
        title.appendChild(small);
        title.appendChild(season);

        ul.appendChild(li);
    }
    var list = document.getElementsByClassName("left")[0];
    list.appendChild(ul);
}

if(message.a == undefined){
    var script = document.createElement("script");
    script.src="http://api.jisuapi.com/jieqi/query?appkey=fd723f4e8718afa9&year=2018&callback=time";
    document.body.appendChild(script);
    function time(x) {
        message.a = JSON.stringify(x);
        start();
    }
}

else {
    start();
}
function start() {
    createlist();
}
for(var i=0;i<24;i++){
    (function(j) {
        var topf = document.getElementsByClassName("top")[j];
        topf.onmouseenter = function(){
            topf.className = "posty";
            topf.children[1].className  = "picsty";
            topf.parentElement.lastElementChild.className  = "botsty";
        }
        topf.onmouseleave = function(){
            topf.className = "top";
            topf.children[1].className  = "pic";
            topf.parentElement.lastElementChild.className  = "bottom";
        }
        topf.onclick = function() {
           
            var num = turn(j);
            console.log(num);
            getmess(num);

        }
    } )(i);   
}
function getmess(num) {
    var script = document.createElement("script");
    script.src="http://api.jisuapi.com/jieqi/detail?appkey=fd723f4e8718afa9&jieqiid="+num+"&year=2018&callback=getn";
    document.body.appendChild(script);
}
function turn(j) {
    if(j<2) {
        num = j+23;
    }else {
        num = j-1;
    }
    return num;
}


getmess(23);



function getn(x) {
    console.log(x);
    var frame = document.getElementsByClassName("frame")[0];

    frame.children[0].innerHTML = x.result.jieqiid;
    frame.children[1].innerHTML = x.result.name;
    frame.children[2].innerHTML = x.result.date;
    frame.children[4].innerHTML = x.result.xisu;
    frame.children[6].innerHTML = x.result.yangsheng;
    frame.children[8].innerHTML = x.result.jianjie;
    frame.children[10].innerHTML = x.result.youlai;
}
var fchose = document.getElementsByClassName("seasld");
for(var i=0;i<22;i++) {
    var j=0;
    (function(j) {
        fchose[j].onclick = function() {
            getmess(j+1);
            move(j);
            trans(j+1);
        }
    })(i);
}
fchose[22].onclick = function() {
    getmess(23);
    move(0);
    trans(23);
}
fchose[23].onclick = function() {
    getmess(24);
    move(0);
    trans(24);
}

show = document.getElementsByClassName("screen")[0];
var timer;
function move(j) {
    console.log(j);
    var step = ((j*170)-show.scrollTop)/100;
    clearInterval(timer);
    timer = setInterval(function(){
        console.log( step);
        show.scrollBy(0,step);
        if(Math.abs(show.scrollTop-(j*170))<Math.abs(step)) {
            clearInterval(timer);
        }
    },1);
}




//左
newli = document.getElementsByClassName("left")[0].getElementsByTagName("li");
newimg = document.getElementsByClassName("img")[0];
newback = document.getElementsByClassName("backimg")[0];
newbotsty = document.getElementsByClassName("bottom")[0];


newglass = document.getElementsByClassName("glass")[0];
newglassw = document.getElementsByClassName("glassw")[0];
newglassth = document.getElementsByClassName("glassth")[0];
newglassf = document.getElementsByClassName("glassf")[0];
newname = document.getElementsByClassName("name")[0];
newdate= document.getElementsByClassName("date")[0];
newxisu = document.getElementsByClassName("xisu")[0];
newysh = document.getElementsByClassName("ysh")[0];
newjianjie = document.getElementsByClassName("jianjie")[0];
newyoulai = document.getElementsByClassName("youlai")[0];


for(var i=0;i<24;i++) {
    var j = 0;
    (function(j){
        newli[j].onclick = function() {
            trans(j);
        }
    })(i);
}



function trans(j) {
    if(j>=2&&j<=7){
        newimg.children[0].style.display = "block" ;
        newimg.children[1].style.display = "none" ;
        newimg.children[2].style.display = "none" ;
        newimg.children[3].style.display = "none" ;

        newglass.style.backgroundImage = "url(./src/img/春.jpg)";
        newglassw.style.backgroundImage = "url(./src/img/春.jpg)";
        newglassth.style.backgroundImage = "url(./src/img/春.jpg)";
        newglassf.style.backgroundImage = "url(./src/img/春.jpg)";

        newback.style.backgroundImage = "url(./src/img/春.jpg)";

        newname.style.color = "#fff";
        newdate.style.color = "black";
        newxisu.style.color = "black";
        newysh.style.color = "black";
        newjianjie.style.color = "black";
        newyoulai.style.color = "black";   
    

    }else if(j>=8&&j<=13) {
        newimg.children[0].style.display = "none" ;
        newimg.children[1].style.display = "block" ;
        newimg.children[2].style.display = "none" ;
        newimg.children[3].style.display = "none" ;

        
        newglass.style.backgroundImage = "url(./src/img/夏.jpg)";
        newglassw.style.backgroundImage = "url(./src/img/夏.jpg)";
        newglassth.style.backgroundImage = "url(./src/img/夏.jpg)";
        newglassf.style.backgroundImage = "url(./src/img/夏.jpg)";

        newback.style.backgroundImage = "url(./src/img/夏.jpg)";

        newname.style.color = "#fff";
        newdate.style.color = "#C1CDC1";
        newxisu.style.color = "#C1CDC1";
        newysh.style.color = "#C1CDC1";
        newjianjie.style.color = "#C1CDC1";
        newyoulai.style.color = "#C1CDC1";
    }

    else if(j>=14&&j<=19) {
        newimg.children[0].style.display = "none" ;
        newimg.children[1].style.display = "none" ;
        newimg.children[2].style.display = "block";
        newimg.children[3].style.display = "none" ;

        newglass.style.backgroundImage = "url(./src/img/秋.jpg)";
        newglassw.style.backgroundImage = "url(./src/img/秋.jpg)";
        newglassth.style.backgroundImage = "url(./src/img/秋.jpg)";
        newglassf.style.backgroundImage = "url(./src/img/秋.jpg)";

        newback.style.backgroundImage = "url(./src/img/秋.jpg)";

        newname.style.color = "#fff";
        newdate.style.color = "black";
        newxisu.style.color = "black";
        newysh.style.color = "black";
        newjianjie.style.color = "black";
        newyoulai.style.color = "black";  
    }
    
    else if(j>=20&&j<=23||j>=0&&j<=1) {
        newimg.children[0].style.display = "none" ;
        newimg.children[1].style.display = "none" ;
        newimg.children[2].style.display = "none" ;
        newimg.children[3].style.display = "block" ;

        newglass.style.backgroundImage = "url(./src/img/冬.jpg)";
        newglassw.style.backgroundImage = "url(./src/img/冬.jpg)";
        newglassth.style.backgroundImage = "url(./src/img/冬.jpg)";
        newglassf.style.backgroundImage = "url(./src/img/冬.jpg)";

        newback.style.backgroundImage = "url(./src/img/冬.jpg)";

        newname.style.color = "#fff";
        newdate.style.color = "black";
        newxisu.style.color = "black";
        newysh.style.color = "black";
        newjianjie.style.color = "black";
        newyoulai.style.color = "black";  

    }

}
        
   

