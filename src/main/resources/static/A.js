let bilettInfo= [];

function kjopBillett(){

        const film = document.forms["form"]["film"].value;
        const antall = document.forms["form"]["antall"].value;
        const fornavn = document.forms["form"]["fornavn"].value;
        const etternavn = document.forms["form"]["etternavn"].value;
        const telefonnr = document.forms["form"]["telefon"].value;
        const epost = document.forms["form"]["email"].value + " , ";

    document.getElementById("antallInput").innerText = "";
    document.getElementById("filmInput").innerText = "";
    document.getElementById("fornavnInput").innerText = "";
    document.getElementById("etternavnInput").innerText = "";
    document.getElementById("telefonInput").innerText = "";
    document.getElementById("emailInput").innerText = "";





        if (antall === "" || film === "Velg film" || fornavn === "" || etternavn === "" || telefonnr === "" || epost === "") {
            if (antall === "") {
                document.getElementById("antallInput").innerText = "Skriv noe inn i antall";
            }
            if (film === "Velg film") {
                document.getElementById("filmInput").innerText = "Velg film";
            }
            if (fornavn === "") {
                document.getElementById("fornavnInput").innerText = "Skriv noe inn i fornavn";
            }
            if (etternavn === "") {
                document.getElementById("etternavnInput").innerText = "Skriv noe inn i etternavn";
            }
            if (telefonnr === "") {
                document.getElementById("telefonInput").innerText = "Skriv noe inn i telefonnr";
            }
            if (epost === " , ") {
                document.getElementById("emailInput").innerText = "Skriv noe inn i epost";
            }
        }
        else {
            let kunde = {
                filmValgt: film,
                antallValgt: antall,
                fornavnValgt: fornavn,
                etternavnValgt: etternavn,
                telefonnrValgt: telefonnr,
                epostValgt: epost
            }

            bilettInfo += Object.values(kunde);

            let ut = "";
            for (let i = 0; i < bilettInfo.length; i++) {
                ut += bilettInfo[i];
            }
            document.getElementById("visKunder").innerHTML = ut;
        }

}
function slett(){
    bilettInfo=[];
    document.getElementById("visKunder").innerHTML="";
    document.getElementById("antallInput").innerText = "";
    document.getElementById("filmInput").innerText = "";
    document.getElementById("fornavnInput").innerText = "";
    document.getElementById("etternavnInput").innerText = "";
    document.getElementById("telefonInput").innerText = "";
    document.getElementById("emailInput").innerText = "";
}