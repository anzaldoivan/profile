if(PASS<40){
    PASFF =40
    setAssistavg(Math.round(PASFF));
    loop = false;
  }
  if(PASS>=100){
    PASFF = 100 + (PASS * 0.021);
    console.log("Paso el IF del 100");
    loop = false;
    setPassavg(Math.round(PASFF));
  }
  do {
  if(PASS<(101-i) && PASS >= (100-i) ){
      PASFF = PASS * multiplicador;
      loop = false;
      console.log("Paso el IF y se paro en el numero -> " + (100-i) + "/ El PASFF ES: " + PASFF + "/ Multiplicador es: " + multiplicador);
      setPassavg(Math.round(PASFF));
  }else{
      i++;
      multiplicador += 0.004;
      console.log("Paso el else");
  }
  console.log("A VER ESTO XD");
  }while (loop==true);  

  loop = true;
  multiplicador = 1.05;
  x = 0;
  i = 1;

  if(ASISS<40){
    ASISFF =40
    setAssistavg(Math.round(ASISFF));
    loop = false;
  }
  if(ASISS>=100){
    ASISFF = 100 + (ASISS * 0.021);
    console.log("Paso el IF del 100");
    loop = false;
    setAssistavg(Math.round(ASISFF));
  }
  do {
  if(ASISS<(101-i) && ASISS >= (100-i) ){
      ASISFF = ASISS * multiplicador;
      loop = false;
      console.log("Paso el IF y se paro en el numero -> " + (100-i) + "/ El PASFF ES: " + ASISFF + "/ Multiplicador es: " + multiplicador);
      setAssistavg(Math.round(ASISFF));
  }else{
      i++;
      multiplicador += 0.004;
      console.log("Paso el else");
  }
  console.log("A VER ESTO XD");
  }while (loop==true);  

  loop = true;
  multiplicador = 1.02;
  x = 0;
  i = 1;


  if(POSS <= 40){
    POSSF = 40;
    setPosavg(POSSF);
  }
  if(POSS>=100){
    POSSF = 100 + (POSS * 0.021);
    console.log("Paso el IF del 100");
    loop = false;
    setPosavg(Math.round(POSSF));
  }
  do {
  if(POSS<(101-i) && POSS >= (100-i) ){
    POSSF = POSS * multiplicador;
      loop = false;
      console.log("Paso el IF y se paro en el numero -> " + (100-i) + "numero analizado:" + POSS + "/ LA POSESION ES: " + POSSF + "/ Multiplicador es: " + multiplicador);
      setPosavg(Math.round(POSSF));
  }else{
      i++;
      multiplicador += 0.004;
      console.log("Paso el else" + (100-i) + "numero analizado:" + POSS + "/ LA POSESION ES: " + POSSF + "/ Multiplicador es: " + multiplicador);
  }
  console.log("A VER ESTO XD");
  }while (loop==true);

  loop = true;
  multiplicador = 1.05;
  x = 0;
  i = 1;

  if(ASISFF<40){
    ASISFA =40
    setAttackassistavg(Math.round(ASISFA));
    loop = false;
  }
  if(ASISFF>=100){
    ASISFA = 100 + (ASISFF * 0.021);
    console.log("Paso el IF del 100");
    loop = false;
    setAttackassistavg(Math.round(ASISFA));
  }
  do {
  if(ASISFF<(101-i) && ASISFF >= (100-i) ){
      ASISFA = ASISFF * multiplicador;
      loop = false;
      console.log("Paso el IF y se paro en el numero -> " + (100-i) + "/ El PASFF ES: " + ASISFA + "/ Multiplicador es: " + multiplicador);
      setAttackassistavg(Math.round(ASISFA));
  }else{
      i++;
      multiplicador += 0.004;
      console.log("Paso el else");
  }
  console.log("A VER ESTO XD");
  }while (loop==true);  

  loop = true;
  multiplicador = 1.05;
  x = 0;
  i = 1;

  if(INTER<40){
    INTERF = 40;
    setInteravg(Math.round(INTERF));
    loop = false;
    console.log("Paso el IF del 40 EN LA INTER"+ " numero analizado:" + INTER);
  }
  if(INTER>=100){
    INTERF = 100 + (INTER * 0.021);
    console.log("Paso el IF del 100 EN LA INTER");
    loop = false;
    setInteravg(Math.round(INTERF));
  }
  do {
  if(INTER<(101-i) && INTER >= (100-i) ){
      INTERF = INTER * multiplicador;
      loop = false;
      console.log("Paso el else" + (100-i) + "numero analizado:" + INTER + "/ LA INTER ES: " + INTERF + "/ Multiplicador es: " + multiplicador);
      setInteravg(Math.round(INTERF));
  }else{
      i++;
      multiplicador += 0.004;
      console.log("Paso el else");
  }
  console.log("A VER ESTO XD");
  }while (loop==true);  

  loop = true;
  multiplicador = 1.05;
  x = 0;
  i = 1;

  if(TACKLE<40 || !TACKLE){
    TACKLEF = 40;
    setTackleavg(Math.round(TACKLEF));
    loop = false;
    console.log("Paso el IF del 40 EN LA INTER"+ " numero analizado:" + INTER);
  }
  if(TACKLE>=100){
    TACKLEF = 100 + (TACKLE * 0.021);
    console.log("Paso el IF del 100 EN LA INTER");
    loop = false;
    setTackleavg(Math.round(TACKLEF));
  }
  do {
  if(TACKLE<(101-i) && TACKLE >= (100-i) ){
    TACKLEF = TACKLE * multiplicador;
      loop = false;
      console.log("Paso el IF" + (100-i) + "numero analizado:" + TACKLE + "/ EL TACKLE ES: " + TACKLEF + "/ Multiplicador es: " + multiplicador);
      setTackleavg(Math.round(TACKLEF));
  }else{
      i++;
      multiplicador += 0.004;
      console.log("Paso el else" + (100-i) + "numero analizado:" + TACKLE + "/ EL TACKLE ES: " + TACKLEF + "/ Multiplicador es: " + multiplicador);
  }
  console.log("A VER ESTO XD");
  }while (loop==true);  

  loop = true;
  multiplicador = 1.05;
  x = 0;
  i = 1;