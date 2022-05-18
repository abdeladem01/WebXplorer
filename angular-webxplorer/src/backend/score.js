vraiedate="20001225"
datejoueur="20010101"

function date(date){
    year = +date.substring(0, 4);
    month = +date.substring(4, 6);
    day = +date.substring(6, 8);
    return new Date(year, month - 1, day);
}


//easy, hard, difficult? easy with only the year, hard with the month, difficult with the day
//gerer le cas ou il donne une date inexistante pour pas lui donner des points quand meme



function precision(diff){
    if (diff<=20){
        return 1;
    }

    else if (diff>20 && diff<=1000){
        return 1-diff/1250;
    }

    else if (diff>1000 && diff<=2000){
        return 0.4-diff/5000;
    }

    else if (diff>2000){
        return 0;
    }
}

function temps(tps){
    if (tps<3){
        return 1;
    }
    else {
        return exp(-(tps-3)/57);
    }

}
function score(vraiedate,datejoueur,tps){

    const diff = Math.ceil(Math.abs(vraiedate - datejoueur) / (1000 * 60 * 60 * 24));
    score=5000*precision(diff)*temps(tps);
    console.log("Vous avez viser la vraie date à "+ diff + " jours prés.");
    console.log("Votre score est de "+score+" points");
}
