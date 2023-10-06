const questions = [
    {
        question: 'Jeg er enig i gratis SFO?',
        enig: { R: 9, SV: 10, AP: 8, MDG: 10, SP: 5, V: 4, KRF: 3, H: 1, FRP: 2, B: 0 },
        littEnig: { R: 7, SV: 8, AP: 6, MDG: 8, SP: 4, V: 3, KRF: 2, H: 1, FRP: 2, B: 0 },
        vetIkke: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0, B: 5 },
        littUenig: { R: 3, SV: 2, AP: 4, MDG: 2, SP: 4, V: 5, KRF: 6, H: 7, FRP: 8, B: 0 },
        uenig: { R: 1, SV: 1, AP: 2, MDG: 1, SP: 6, V: 7, KRF: 8, H: 10, FRP: 9, B: 0 }
    },

    {
        question: 'Jeg vil ha bybane over bryggen',
        enig: { R: 7, SV: 9, AP: 8, MDG: 10, SP: 4, V: 3, KRF: 2, H: 1, FRP: 2, B: 0 },
        littEnig: { R: 5, SV: 7, AP: 6, MDG: 8, SP: 3, V: 2, KRF: 1, H: 1, FRP: 1, B: 0 },
        vetIkke: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0, B: 5 },
        littUenig: { R: 3, SV: 3, AP: 3, MDG: 4, SP: 6, V: 6, KRF: 7, H: 8, FRP: 9, B: 0 },
        uenig: { R: 1, SV: 1, AP: 1, MDG: 2, SP: 8, V: 9, KRF: 10, H: 10, FRP: 10, B: 0 }
    },

    {
        question: 'Jeg vil ha lavere skatt',
        enig: { R: 10, SV: 1, AP: 3, MDG: 2, SP: 4, V: 6, KRF: 7, H: 9, FRP: 8, B: 0 },
        littEnig: { R: 8, SV: 2, AP: 4, MDG: 3, SP: 5, V: 7, KRF: 6, H: 9, FRP: 8, B: 0 },
        vetIkke: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0, B: 5 },
        littUenig: { R: 4, SV: 6, AP: 5, MDG: 4, SP: 6, V: 4, KRF: 3, H: 2, FRP: 2, B: 0 },
        uenig: { R: 2, SV: 9, AP: 8, MDG: 7, SP: 1, V: 1, KRF: 1, H: 1, FRP: 1, B: 0 }
    },

    {
        question: 'Jeg er mot fraværsgrensen',
        enig: { R: 1, SV: 10, AP: 9, MDG: 10, SP: 3, V: 2, KRF: 2, H: 1, FRP: 1, B: 0 },
        littEnig: { R: 2, SV: 8, AP: 7, MDG: 8, SP: 4, V: 3, KRF: 3, H: 2, FRP: 2, B: 0 },
        vetIkke: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0, B: 5 },
        littUenig: { R: 3, SV: 4, AP: 4, MDG: 5, SP: 6, V: 6, KRF: 7, H: 8, FRP: 9, B: 0 },
        uenig: { R: 9, SV: 1, AP: 2, MDG: 1, SP: 7, V: 9, KRF: 8, H: 10, FRP: 10, B: 0 }
    },

    {
        question: 'Jeg vil bruke mer av oljefondet',
        enig: { R: 8, SV: 2, AP: 3, MDG: 4, SP: 5, V: 6, KRF: 7, H: 9, FRP: 10, B: 0 },
        littEnig: { R: 7, SV: 3, AP: 4, MDG: 5, SP: 6, V: 7, KRF: 8, H: 9, FRP: 10, B: 0 },
        vetIkke: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0, B: 5 },
        littUenig: { R: 3, SV: 5, AP: 6, MDG: 7, SP: 8, V: 9, KRF: 10, H: 8, FRP: 7, B: 0 },
        uenig: { R: 2, SV: 8, AP: 9, MDG: 10, SP: 7, V: 5, KRF: 4, H: 3, FRP: 2, B: 0 }
    },

    {
        question: 'Jeg støtter bruk av private helsetjenester',
        enig: { R: 10, SV: 1, AP: 2, MDG: 3, SP: 4, V: 5, KRF: 6, H: 8, FRP: 9, B: 0 },
        littEnig: { R: 8, SV: 2, AP: 3, MDG: 4, SP: 5, V: 6, KRF: 7, H: 9, FRP: 10, B: 0 },
        vetIkke: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0, B: 5 },
        littUenig: { R: 4, SV: 6, AP: 7, MDG: 8, SP: 9, V: 10, KRF: 8, H: 7, FRP: 6, B: 0 },
        uenig: { R: 2, SV: 9, AP: 10, MDG: 10, SP: 6, V: 4, KRF: 3, H: 2, FRP: 1, B: 0 }
    },

    {
        question: 'Jeg støtter skjenking på torgallmenningen',
        enig: { R: 4, SV: 9, AP: 5, MDG: 7, SP: 3, V: 6, KRF: 2, H: 8, FRP: 10, B: 0 },
        littEnig: { R: 3, SV: 8, AP: 4, MDG: 6, SP: 2, V: 5, KRF: 1, H: 7, FRP: 9, B: 0 },
        vetIkke: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0, B: 5 },
        littUenig: { R: 6, SV: 4, AP: 3, MDG: 5, SP: 1, V: 4, KRF: 2, H: 8, FRP: 10, B: 0 },
        uenig: { R: 7, SV: 3, AP: 2, MDG: 4, SP: 1, V: 5, KRF: 1, H: 9, FRP: 10, B: 0 }
    },

    {
        question: 'Jeg er enig i leksefri skole',
        enig: { R: 2, SV: 9, AP: 6, MDG: 8, SP: 3, V: 5, KRF: 1, H: 7, FRP: 10, B: 0 },
        littEnig: { R: 3, SV: 8, AP: 5, MDG: 7, SP: 4, V: 6, KRF: 2, H: 6, FRP: 9, B: 0 },
        vetIkke: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0, B: 5 },
        littUenig: { R: 6, SV: 4, AP: 2, MDG: 5, SP: 2, V: 3, KRF: 1, H: 8, FRP: 10, B: 0 },
        uenig: { R: 7, SV: 2, AP: 1, MDG: 3, SP: 1, V: 4, KRF: 1, H: 9, FRP: 10, B: 0 }
    },

    {
        question: 'Jeg er positiv til å bygge ut vindkraft i mitt nærområde, selv om det går ut over naturlandskapet',
        enig: { R: 5, SV: 10, AP: 7, MDG: 9, SP: 4, V: 8, KRF: 3, H: 6, FRP: 2, B: 0 },
        littEnig: { R: 4, SV: 8, AP: 6, MDG: 8, SP: 3, V: 7, KRF: 2, H: 5, FRP: 1, B: 0 },
        vetIkke: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0, B: 5 },
        littUenig: { R: 7, SV: 4, AP: 3, MDG: 6, SP: 2, V: 5, KRF: 1, H: 8, FRP: 1, B: 0 },
        uenig: { R: 8, SV: 2, AP: 1, MDG: 5, SP: 1, V: 4, KRF: 1, H: 9, FRP: 1, B: 0 }
    },

    {
        question: 'Det er bra at bomstasjonene i kommunen gjør det mindre fristende å kjøre bil',
        enig: { R: 1, SV: 10, AP: 9, MDG: 10, SP: 3, V: 2, KRF: 2, H: 1, FRP: 1, B: 0 },
        littEnig: { R: 2, SV: 8, AP: 7, MDG: 8, SP: 4, V: 3, KRF: 3, H: 2, FRP: 2, B: 0 },
        vetIkke: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0, B: 5 },
        littUenig: { R: 3, SV: 4, AP: 4, MDG: 5, SP: 6, V: 6, KRF: 7, H: 8, FRP: 9, B: 0 },
        uenig: { R: 9, SV: 1, AP: 2, MDG: 1, SP: 7, V: 9, KRF: 8, H: 10, FRP: 10, B: 0 }
    },
   
];

let partyScores = {
    R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0, B: 0
};

const questionT = document.getElementById('question');
const btnNext = document.getElementById('btnNext');
const rbAnswer = document.getElementsByName('answer');
const inputForm = document.getElementById('valgomatForm');

btnNext.addEventListener('click', nextQuestion);

let qidx = 0;
questionT.innerHTML = questions[qidx].question;

function nextQuestion() {
    let radioChecked = document.querySelector('input[name="answer"]:checked');
    
    if (radioChecked) {
        calculateResult(qidx, radioChecked.value);
        qidx++;
        if (qidx < questions.length) {
            radioChecked.checked = false;
            questionT.innerHTML = questions[qidx].question;
        }
        else {
            inputForm.style.display = 'none';
            showResult();
        }
    }
    else {
        alert("Du må velge noe!");
    }
}

function calculateResult(qidx, chosen) {
    console.log("Spørsmåls-ID: " + qidx + ", valgt: " + chosen);

    let partyChoices = questions[qidx][chosen];
    console.log("partyChoices: ");
    console.log(partyChoices);

    for (let party in partyChoices){
        partyScores[party] += partyChoices[party];
    }

    console.log("partyScore: ");
    console.log(partyScores);
}

function showResult() {
    let entries = Object.entries(partyScores);

    entries.sort((a, b) => b[1] - a[1]);

    let sortedPartyScores = Object.fromEntries(entries);

    console.log("Sortert etter poengsum: ");
    console.log(sortedPartyScores);

    const resultBox = document.getElementById("result");
    resultBox.innerHTML = "";

    let count = 0;
    for (let party in sortedPartyScores) {
        if (count >= 3) {
            break;
        }
        let choice = "";
        switch (party) {
            case "R":
                choice = "Rødt";
                break
            case "H":
                choice = "Høyre";      
                break
            case "B":
                choice = "Blank";      
                break
            case "AP":
                choice = "Arbeider Partiet";      
                break
            case "SV":
                choice = "Sosialistisk venstre parti";      
                break
            case "MDG":
                choice = "Miljøpartiet de grønne";      
                break
            case "V":
                choice = "Venstre";      
                break
            case "FRP":
                choice = "Fremskrittspartiet";      
                break
            case "KRF":
                choice = "Kristelig folke parti";      
                break
        }

        
        resultBox.innerHTML = `Partiet med høyest score er ${choice} med en score på ${highestScore}.`;

        sortedPartyScores
    }
}

