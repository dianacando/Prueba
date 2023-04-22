

function coleccion(parametro, orden) {
   const valores = parametro;   

   if (parametro.length === 0) {
    return 'Lista vacia';
   }

    if (orden === 'ASC') {
        for (let i = 0; i < valores.length; i++) {
            if(valores[i]>valores[i+1]){
                const numeromayor = valores[i];
                const numeromenor=valores[i+1];
                valores[i]=numeromenor;
                valores[i+1]=numeromayor;            
              }
        };    
       
    };
    if (orden === 'DESC') {               
        var len = valores.length;
        for (var i = 0; i < len - 1; i++) {
            for (var j = 0; j < len - i - 1; j++) {
                if (valores[j] < valores[j + 1]) {
                    var temp = valores[j];
                    valores[j] = valores[j + 1];
                    valores[j + 1] = temp;
                }
            }
        };
       
    
    };

    return valores;
    
   
}
module.exports = coleccion;