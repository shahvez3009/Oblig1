let bilettInfo= [];

function kjopBillett() {

        const film = document.getElementsByName("film").value;
        const antall = document.getElementsByName("antall").value;
        const fornavn = document.getElementsByName("fornavn").value;
        const etternavn = document.getElementsByName("etternavn").value;
        const telefonnr = document.getElementsByName("telefon").value;
        const epost = document.getElementsByName("email").value;

    const kunde = {
        valgFilm : film,
        valgtAntall : antall,
        valgtFornavn  : fornavn,
        valgtEtternavn : etternavn,
        valgtTelefon : telefonnr,
        valgtEpost : epost
    }

    bilettInfo.push(kunde)

    let ut="";
    for (let i=0;i<bilettInfo.length; i++) {
        ut+= bilettInfo[i] + " , "
    }
    document.getElementById("visKunder").innerHTML=ut;

}