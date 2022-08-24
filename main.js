
Webcam.set ({width:350, height:300, image_format : 'png', png_quality:90});
camera = document.getElementById ("camera");
Webcam.attach ('#camera');

 
function take_snapshot (){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
});
}
console.log('ml 5version:' , ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/train/image.json',modelLoaded);

//Crea una función que se llame modelLoaded
function modelLoaded(){
    console.log ('Modelo Cargado');
}

  
//Crea una función que se llame check
function check (){
img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
//usa la variable img para guardar la foto tomada, usa el comando para obtener la imagen con el id captured_image
// vamos a llamar a la función predefinida de ml5.js, classifier.classify para comparar la imagen capturada con el modelo, le mandamos los parámetros img y gotResult
  


// Crea una función que se llame gotResult con los parámetros error y results
function gotResult (error, results) {
    if (error ){
    console.error (error);
    }
else{
console.log (results);
     document.getElementById ("result_object_name").innerHTML=results[0].label;
    
     document.getElementById ("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
}    
}
//Usa la condicional if con el parámetro error
//usa el comando console.error para imprimir el error
//usa la condicional else 
//imprime en la consola results 
//usa el comando document.getElementById con el id result_object_name para modificar html mostramos el primer elemento del arreglo results[0].label
//usa el comando document.getElementById con el id result_object_accuracy para modificar html y mostrar la precisión con 3 decimales results[0].confidence.toFixed(3)
