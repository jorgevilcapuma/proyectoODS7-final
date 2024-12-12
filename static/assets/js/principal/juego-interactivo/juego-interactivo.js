const ods = [

    "https://tse4.mm.bing.net/th?id=OIP.qvn8jhN2j1pIN0XT8l5DNgHaE8&pid=Api&P=0&h=1801",
    "https://tse4.mm.bing.net/th?id=OIP.0f_3vt22iea2wzO3ZzdL2wHaEj&pid=Api&P=0&h=1802",
    "https://tse3.mm.bing.net/th?id=OIP.CG6oLnRt-aun8s4tqIjv-AHaDH&pid=Api&P=0&h=1803",
    "https://iep.org.pe/wp-content/uploads/2016/08/149678eduacion-peruuujpg.jpg",
    "https://www.domipresen.com/images/Fotos/Justicia_y_Paz_2021.jpg",
    "https://ods.inei.gob.pe/ods/images/portada/OBJETIVO-7.jpg",
    "https://www.ulima.edu.pe/sites/default/files/styles/600x300/public/event/img/vida_submarina_peces_600x300.png?itok=A6y9aFZA",
    "https://www.hsi.org/wp-content/uploads/2023/07/Keren-Nazareth-and-street-dog-in-India-1.jpg",
    "https://www.silocomo.com/wp-content/uploads/2023/10/ODS-Rueda-con-Nombres.png",
    "https://www.cepal.org/sites/default/files/pr/images/ecosoc_inauguracion_foto_banner.png?timestamp=1708516767"
];

const correcta = [0, 2, 2, 0, 1, 2, 0, 1, 0, 0]; // Respuestas correctas

const opciones = [

    ["Fin de la Pobreza", "Hambre Cero", "Salud y Bienestar"],
    ["Hambre Cero", "Educación de Calidad", "Igualdad de Género"],
    ["Agua Limpia", "Energía Sostenible", "Salud y Bienestar"],
    ["Educación de Calidad", "Energía Renovable", "Industria e Innovación"],
    ["Reducción de Desigualdades", "Paz y Justicia", "Consumo Responsable"],
    ["Cambio Climático", "Alianzas", "Energía Accesible"],
    ["Vida Submarina", "Vida Terrestre", "Desarrollo Sostenible"],
    ["Salud Mental", "Bienestar Animal", "Producción Responsable"],
    ["Objetivos de Desarrollo Sostenible", "Organización de Desarrollo Social", "Objetivo de Diversidad Sustentable"],
    ["Cooperación Mundial de ONU", "Políticas Ambientales", "Crecimiento Económico"]
];

let posActual = 0;
let cantidadAcertadas = 0;

function comenzarJuego() {
    posActual = 0;
    cantidadAcertadas = 0;
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarODS();
}

function cargarODS() {
    if (posActual >= ods.length) {
        terminarJuego();
    } else {
        limpiarOpciones();
        document.getElementById("imgODS").src = ods[posActual];
        document.getElementById("n0").innerText = opciones[posActual][0];
        document.getElementById("n1").innerText = opciones[posActual][1];
        document.getElementById("n2").innerText = opciones[posActual][2];
    }
}

function limpiarOpciones() {
    ["0", "1", "2"].forEach((i) => {
        document.getElementById("n" + i).className = "nombre";
        document.getElementById("l" + i).className = "letra";
    });
}

function comprobarRespuesta(opElegida) {
    if (opElegida === correcta[posActual]) {
        document.getElementById("n" + opElegida).className += " nombreAcertada";
        document.getElementById("l" + opElegida).className += " letraAcertada";
        cantidadAcertadas++;
    } else {
        document.getElementById("n" + opElegida).className += " nombreNoAcertada";
        document.getElementById("l" + opElegida).className += " letraNoAcertada";
        document.getElementById("n" + correcta[posActual]).className += " nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className += " letraAcertada";
    }
    posActual++;
    setTimeout(cargarODS, 1000);
}

function terminarJuego() {
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").innerText = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerText = ods.length - cantidadAcertadas;
}

function volverAlInicio() {
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
}