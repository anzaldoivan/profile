const someCommonValues = ['common', 'values'];

export const doSomethingWithInput = (theInput) => {
   //Do something with the input
   let loop = true;
   let multiplicador = 1.05;
   let x = 0;
   let i = 1;
   let aux = 0;

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
   theInput = aux;
   return theInput;
};

export const justAnAlert = () => {
   alert('hello');
};