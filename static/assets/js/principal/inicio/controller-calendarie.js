const MAIN_PATH = "/api/";
/*En caso de usar AWS al crear el servicio EC2, colocar la IP
en vez de localhost y cambiar el http por https*/

const date = new Date();
let currentDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
let currentDateFormatted = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

let dates = fetch(
    MAIN_PATH + "dates/" + currentDate
).then(
    res => res.json()
).then(
    data => {
        console.log("Mostrando data: " + data)
        if (data != null) {
            document.getElementById("showDate").innerHTML = `<p>Hoy es ${currentDateFormatted}<br> "${data.NAMECAL}" </p>`
        } else {
            document.getElementById("showDate").innerHTML = `<p>Hoy es ${currentDateFormatted}</p>`
        }
    }
);