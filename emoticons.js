<script type="text/javascript">
;(function(){var e="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/";var t=[["yeah","\\m/","111"],["confused",":-/","7"],["waiting",":-w","45"],["time out",":-t","104"],["thinking",":-?","39"],["day dreaming","8->","105"],["rolling eyes","8-|","29"],["hee hee",";))","71"],["sleepy","I-)","28"],["loser","L-)","30"],["silly","8-}","35"],["no talking","[-(","33"],["broken heart","=((","12"],["surprise",":-O","13"],["shame on you","[-X","68"],["cool","B-)","16"],["crying",":((","20"],["laughing",":))","21"],["rolling on the floor","=))","24"],["kiss",":-*","11"],["nail biting",":-SS","42"],["don\\'t tell anyone",":-$","32"],["yawn","(:|","37"],["nerd",":-B","26"],["chatterbox",":-@","76"],["applause","=D>","41"],["blushing",':">',"9"],["money eyes","$-)","64"],["oh go on",":-j","78"],["I don\\'t know",":-??","106"],["thumbs down",":-q","112"],["bring it on",">:/","70"],["hurry up!",":!!","110"],["thumbs up",":-bd","113"],["coffee","~O)","57"],["batting eyelashes",";;)","5"],["d\\'oh","#-o","40"],["on the phone",":)]","100"],["call me",":-c","101"],["big hug",">:D<","6"],["good luck","%%-","54"],["rose","@};-","53"],["daydreaming","8->","105"],["praying","[-O<","63"],["skull","8-X","59"],["bee",":bz","115"],["bug","=:)","60"],["pig",":@)","49"],["idea","*-:)","58"],["angel","O:)","25"],["sick",":-&","31"],["monkey",":(|)","51"],["chicken","~:>","52"],["puppy dog eyes",":o3","108"],["cow","3:-O","50"],["whistling",':-"',"65"],["star","(*)","79"],["tongue",":P","10"],["worried",":-S","17"],["happy",":)","1"],["sad",":(","2"],["big grin",":D","4"],["love struck",":x","8"],["straight face",":|","22"],["angry","X(","14"],["winking",";)","3"]];var n=function(e,t,n){var r=e.split(t);return r.join(n)};var r=function(e,t,n){if(document.getElementsByClassName){var r=function(e,t,n){n=n||document;var r=n.getElementsByClassName(e),i=t?new RegExp("\\b"+t+"\\b","i"):null,s=[],o;for(var u=0,a=r.length;u<a;u+=1){o=r[u];if(!i||i.test(o.nodeName)){s.push(o)}}return s}}else if(document.evaluate){var r=function(e,t,n){t=t||"*";n=n||document;var r=e.split(" "),i="",s="http://www.w3.org/1999/xhtml",o=document.documentElement.namespaceURI===s?s:null,u=[],a,f;for(var l=0,c=r.length;l<c;l+=1){i+="[contains(concat(' ', @class, ' '), ' "+r[l]+" ')]"}try{a=document.evaluate(".//"+t+i,n,o,0,null)}catch(h){a=document.evaluate(".//"+t+i,n,null,0,null)}while(f=a.iterateNext()){u.push(f)}return u}}else{var r=function(e,t,n){t=t||"*";n=n||document;var r=e.split(" "),i=[],s=t==="*"&&n.all?n.all:n.getElementsByTagName(t),o,u=[],a;for(var f=0,l=r.length;f<l;f+=1){i.push(new RegExp("(^|\\s)"+r[f]+"(\\s|$)"))}for(var c=0,h=s.length;c<h;c+=1){o=s[c];a=false;for(var p=0,d=i.length;p<d;p+=1){a=i[p].test(o.className);if(!a){break}}if(a){u.push(o)}}return u}}return r(e,t,n)};var i=["entry-content","comment-content","owner-Body","comment-body"];var s="position:relative;top:0px;left:0px;margin:0px;padding:0px;border:none;background:none !important;background-color:transparent !important;display:inline-block;min-width:16px;min-height:16px;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;";var o=window["talEmoti"]={emos:[],setIcon:function(e,t,n){var r={sign:e||"",path:t||"",title:n||""};this.emos.push(r)},run:function(e){var t=e instanceof Array?e:[];t=t.concat(i);var u=[];for(var a=0;a<t.length;a++){var f=r(t[a]);u=u.concat(f)}if(u.length>0){var l=o.emos;function c(e){for(var t=0;t<l.length;t++){var r=l[t];var i='<img style="'+s+'" src="'+r.path+'" title="'+r.title+'">';var o=r.sign;e=n(e,o,i);e=n(e,o.toLowerCase(),i)}return e}function h(e){if(e.childNodes.length>0){for(var t=0;t<e.childNodes.length;t++){h(e.childNodes[t])}}else{if(e.nodeType==3){e.nodeValue=c(e.nodeValue);var n=document.createElement("SPAN");n.innerHTML=c(e.nodeValue);e.parentNode.replaceChild(n,e)}}}for(var a=0;a<u.length;a++){h(u[a])}}}};(function(){for(var n=0;n<t.length;n++){o.setIcon(t[n][1],e+t[n][2]+".gif",t[n][0])}})()})(); </script>

<script type="text/javascript">
window.onload = talEmoti.run;
</script>