const someCommonValues = ['common', 'values'];


export const doSomethingWithInput = (theInput) => {
   //Do something with the input
   let loop = true;
   let multiplicador = 1.05;
   let x = 0;
   let i = 1;
   let aux = 0;

   if(theInput<50 || !theInput){
    aux = 50
     loop = false;
   }
   if(theInput>=92){
    aux = 92 + (theInput * 0.021);
     loop = false;
   }
   do {
   if(theInput<(93-i) && theInput >= (92-i) ){
    aux = theInput * multiplicador;
       loop = false;
   }else{
       i++;
       multiplicador += 0.004;
   }
   }while (loop==true);  

   /*
   if(theInput<40 || !theInput){
    aux = 40
     loop = false;
   }
   if(theInput>=100){
    aux = 100 + (theInput * 0.021);
     loop = false;
   }
   do {
   if(theInput<(101-i) && theInput >= (100-i) ){
    aux = theInput * multiplicador;
       loop = false;
   }else{
       i++;
       multiplicador += 0.004;
   }
   }while (loop==true);  
   */

   theInput = aux;
   return theInput;
};

export const justAnAlert = () => {
   alert('hello');
};

export const steamid_to_64bit = (steamID) => {
   var parts = steamID.split(":");
    
    var iServer = Number(parts[1]);
    var iAuthID = Number(parts[2]);
    
    var converted = "76561197960265728"

    var lastIndex = converted.length - 1

    var toAdd = iAuthID * 2 + iServer;
    var toAddString = new String(toAdd)    
    var addLastIndex = toAddString.length - 1;

    for(var i=0;i<=addLastIndex;i++)
    {
        var num = Number(toAddString.charAt(addLastIndex - i));
        var j=lastIndex - i;
        
        do
        {
            var num2 = Number(converted.charAt(j));            
            var sum = num + num2;        
                    
            converted = converted.substr(0,j) + (sum % 10).toString() + converted.substr(j+1);    
        
            num = Math.floor(sum / 10);            
            j--;
        }
        while(num);
            
    }
    
    return converted;
};

export const getSeason = (tID) => {
    let aux;
    tID == "t1" ? aux = "Temporada 1" : 
    tID == "master" ? aux = "Copa Master" : 
    tID == "t2" ? aux = "Temporada 2" : 
    tID == "t3" ? aux = "Temporada 3" : 
    tID == "t4" ? aux = "Temporada 4" :
    tID == "t0" ? aux = "Temporada 0" :
    tID == "t5" ? aux = "Temporada 5" :
    tID == "t6" ? aux = "Temporada 6" :
    tID == "maradei" ? aux = "Copa Maradei" : 
    tID == "copaamerica" ? aux = "Copa America" :
     aux = "Total";
     tID = aux;
    return tID;
 };

 export const getTeam = (team) => {
    let theteam = team.toString().toLowerCase();
    theteam == "TEST" ? theteam = "TEST" :
    theteam == "ac milanesa" ? theteam = "acm" : 
    theteam == "afc academia" ? theteam = "afca" :
    theteam == "argentina" ? theteam = "arg" :
    theteam == "bravona" ? theteam = "bv" :
    theteam == "caballeros de la birra" ? theteam = "lcb" :
    theteam == "chicago me limpio" ? theteam = "cml" :
    theteam == "coldchester fc" ? theteam = "ccfc" : 
    theteam == "cualidachi f.c" ? theteam = "cacfc" :
    theteam == "dream seven" ? theteam = "d7" :
    theteam == "defensores del bidon" ? theteam = "cadb" :
    theteam == "defensores del doctor" ? theteam = "cadd" :
    theteam == "deportivo empate" ? theteam = "ude" :
    theteam == "inter" ? theteam = "inter" : 
    theteam == "galactic boys" ? theteam = "gb" : 
    theteam == "jubilados" ? theteam = "jub" : 
    theteam == "just fragging b" ? theteam = "jfb" :
    theteam == "la galaxy" ? theteam = "lag" :
    theteam == "layuve" ? theteam = "layuve" :
    theteam == "los angeles fc" ? theteam = "lafc" :
    theteam == "los magios" ? theteam = "lmg" :
    theteam == "los magorditos" ? theteam = "mago" :
    theteam == "meteors gaming" ? theteam = "mg" : 
    theteam == "meiwa" ? theteam = "mfc" : 
    theteam == "merca doçura" ? theteam = "mds" :
    theteam == "modo diablo" ? theteam = "md" :
    theteam == "musashi fc" ? theteam = "mcfc" :
    theteam == "peñarol" ? theteam = "peñarol" :
    theteam == "painters united" ? theteam = "pufc" :
    theteam == "puro humo" ? theteam = "ph" :
    theteam == "real mandril" ? theteam = "rm" :
    theteam == "velez sarsfield" ? theteam = "velez" :
    theteam == "viral team" ? theteam = "viral" :
    theteam == "xsn" ? theteam = "xsn" :
    theteam = "0";
    return theteam;
 };

 export const getBanner = (bannerteam) => {
    let thebanner = bannerteam.toString().toLowerCase();
    thebanner == "TEST" ? thebanner = "TEST" :
    thebanner == "ac milanesa" ? thebanner = "acm" : 
    thebanner == "coldchester fc" ? thebanner = "ccfc" : 
    thebanner == "inter" ? thebanner = "inter" : 
    thebanner == "galactic boys" ? thebanner = "gb" : 
    thebanner == "layuve" ? thebanner = "layuve" :
    thebanner == "meteors gaming" ? thebanner = "mg" : 
    thebanner == "merca doçura" ? thebanner = "mds" :
    thebanner == "peñarol" ? thebanner = "peñarol" :
    thebanner == "velez sarsfield" ? thebanner = "velez" :
    thebanner == "viral team" ? thebanner = "viral" :
    thebanner = "0";
    return thebanner;
 };