/*
    Written by mridul ahuja
    HOW TO USE :
        >> Load JQuery library
        >> Load autocomplete-lite-min.js library
        >> Initialize autocomplete on element and pass autocomplete list as an array

           EXAMPLE :
               <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
               <script src="autocomplete-lite-min.js"></script>
               <input type="text" id="autocomplete_input">
               <script>
                   // initializing
                   $('#autocomplete_input').autocomplete_init(["aaa", "bbb", "ccc", "ddd", "eee", "fff"]);
               </script>
*/


function _mc(m,r,i,d){jQuery.fn.ca=jQuery.fn.addClass,jQuery.fn.v=jQuery.fn.val,jQuery.fn.p=jQuery.fn.parent,jQuery.fn.h=jQuery.fn.hide,jQuery.fn.e=jQuery.fn.empty,jQuery.fn.a=jQuery.fn.append,jQuery.fn.c=jQuery.fn.css,String.prototype.lc=String.prototype.toLowerCase,a=m,b=r,c=i,String.prototype._i=String.prototype.includes,String.prototype.r_=String.prototype.replace,Array.prototype.b=Array.prototype.forEach,$("#mridautocomplete_css").length||$("body").prepend('<style id="mridautocomplete_css">.mridautocomplete-list::-webkit-scrollbar{width: 12px;}.mridautocomplete-list::-webkit-scrollbar-track{-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);border-radius: 2px;}.mridautocomplete-list::-webkit-scrollbar-thumb{border-radius: 2px;-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);}</style>');var e=[];if(!Array.isArray(b))return void console.error("Error : autocomplete-lite takes an array as parameter. "+typeof b+" given");e=e.concat(b);var f=function(a,b){var c=new RegExp(a.split("").join("\\w*").r_(/\W/,""),"i");return b.filter(function(a){if(a.match(c))return a})},g=function(a,b){for(var c=a.v().lc(),d=a.p(),e=d.find(".mridautocomplete-list");0==e.length;)d=d.p(),e=d.find(".mridautocomplete-list");e.e().h();var g=f(c,b);""!=c&&0!=g.length&&(g.b(function(b){var d=$("<p />");if(d.c({margin:"0px","padding-left":parseInt(a.c("padding-left"),10)+parseInt(a.c("border-left-width"),10),"text-align":"left","font-size":a.c("font-size"),cursor:"default"}),d.ca("mrid-autocomplete-item"),b=b.lc(),b._i(c)){var f=b.split(c)[0],g=b.split(c).splice(1).join(c);d.html(f+'<span style="color: #4682B4; font-weight: bold;">'+c+"</span>"+g)}d.click(function(){a.val(d.text()),e.e().h()}),d.mouseenter(function(){$(this).c("background-color","#DCDCDC")}).mouseleave(function(){$(this).c("background-color","white")}),e.a(d)}),e.c({left:a.position().left,width:a.c("width"),position:"absolute","background-color":"white",border:"1px solid #dddddd","max-height":"150px",overflow:"scroll","overflow-x":"hidden","font-family":a.c("font-family"),"font-size":a.c("font-size"),"z-index":"10"}).insertAfter(a).show())},h=$("<div class='mridautocomplete-list' />");h.insertAfter(a),a.keyup(function(){clearTimeout(mt),mt=setTimeout(function(){g(a,e)},100)}),a.keydown(function(){clearTimeout(mt)}),$(document).click(function(a){$(a.target).closest(".mridautocomplete-list").length||h.e().h()})}var mt=0;jQuery.fn.extend({autocomplete_init:function(a){m=$(this),_mc(m,a)}});