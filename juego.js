
function sortear(){
    estacion();
    temporalidad();
    momentos();
    geografico();
    ubicacion();
    emocion();
    pensamiento();
    accion();
    introduccion();
    desarrollo();
    desenlace();
}

function estacion(){
    const estaciones = ["Verano", "Otoño", "Invierno", "Primavera"];
    
    const indice = Math.floor(Math.random() * estaciones.length);

    return document.getElementById("estacion").textContent = estaciones[indice];
}

function temporalidad(){
    const temporalidades = ["Pasado", "Presente", "Futuro"];
    
    const indice = Math.floor(Math.random() * temporalidades.length);
    return document.getElementById("temporalidad").textContent = temporalidades[indice];
    
}

function momentos(){
    const momentos = ["Mañana", "Tarde", "Noche"];
    
    const indice = Math.floor(Math.random() * momentos.length);
    return document.getElementById("momento").textContent = momentos[indice];
}

function geografico(){
    const geograficos = ["Ciudad natal", "Otra ciudad que no se la natal", "Otra provincia", "Otro país"];
    
    const indice = Math.floor(Math.random() * geograficos.length);
    return document.getElementById("geografico").textContent = geograficos[indice];
}

function ubicacion(){
    const ubicaciones = ["En el interior de un lugar", "En el exterior de un lugar, al aire libre"];
    
    const indice = Math.floor(Math.random() * ubicaciones.length);
    return document.getElementById("ubicacion").textContent = ubicaciones[indice];
}

function emocion(){
    const emociones = ["Alegría", "Tristeza", "Miedo","Ira", "Sorpresa","Asco", "Vergüenza", "Culpa","Amor", "Ansiedad"];
    
    const indice = Math.floor(Math.random() * emociones.length);
    return document.getElementById("emocion").textContent = emociones[indice];
}

function pensamiento(){
    const pensamientos = ["¿Estoy haciendo las cosas bien?", "No tengo tiempo para todo.", "Ojalá me salga bien.","¿Qué pensarán los demás de mí?", "Podría haberlo hecho mejor.","Qué lindo momento.", "Esto va a salir mal.", "Tengo que cambiar algo en mi vida","Estoy cansado/a", "Ojalá todo mejore"];
    
    const indice = Math.floor(Math.random() * pensamientos.length);
    return document.getElementById("pensamiento").textContent = pensamientos[indice];
}

function accion(){
    const acciones = ["Levantarse", "Bostezar", "Estirarse","Ir al baño", "Lavarse la cara","Cepillarse los dientes", "Vestirse", "Desayunar","Mirar el celular", "Caminar","Saludar","Hablar", "Escuchar", "Pensar"
, "Comer", "Beber agua", "Trabajar", "Estudiar", "Escribir", "Leer", "Mirar televisión o series", "Escuchar música"
, "Reír", "Llorar", "Suspirar", "Respirar profundamente", "Sentarse", "Acostarse", "Dormir", "Soñar", "Cocinar"
, "Limpiar", "Ordenar", "Viajar o trasladarse", "Comprar", "Pagar", "Planificar", "Pensar en el pasado"
, "Imaginar el futuro", "Preocuparse", "Enfadarse", "Abrazar", "Besar", "Ayudar", "Esperar", "Jugar",
"Mirar por la ventana", "Reírse de algo", "Quejarse", "Agradecer"];
    
    const indice = Math.floor(Math.random() * acciones.length);
    return document.getElementById("accion").textContent = acciones[indice];
}

function introduccion(){
    const introduccion=["Bueno", "Neutro", "Malo"];

    const indice = Math.floor(Math.random() * introduccion.length);
    return document.getElementById("introduccion").textContent = introduccion[indice];
}

function desarrollo(){
    const desarrollo=["Bueno", "Neutro", "Malo"];

    const indice = Math.floor(Math.random() * desarrollo.length);
    return document.getElementById("desarrollo").textContent = desarrollo[indice];
}

function desenlace(){
    const desenlace=["Bueno", "Neutro", "Malo"];

    const indice = Math.floor(Math.random() * desenlace.length);
    return document.getElementById("desenlace").textContent = desenlace[indice];
}