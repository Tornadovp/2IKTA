const questions = [
    {
        question: 'Jeg er enig i gratis SFO?',
        enig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 },
        littEnig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 },
        littUenig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 },
        uenig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 }
    },

     {
        question: 'Jeg vil ha bybane over bryggen',
        enig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 },
        littEnig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 },
        littUenig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 },
        uenig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 }
    },

    {
        question: 'Jeg vil ha lavere skatt',
        enig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 },
        littEnig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 },
        littUenig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 },
        uenig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 }
    },

    {
        question: 'Jeg er mot fraværsgrensen',
        enig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 },
        littEnig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 },
        littUenig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 },
        uenig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 }
    },

    {
        question: 'Jeg vil bruke mer av oljefonnet',
        enig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 },
        littEnig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 },
        littUenig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 },
        uenig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 }
    },

    {
        question: 'Jeg støtter bruk av private helsetjenester',
        enig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 },
        littEnig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 },
        littUenig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 },
        uenig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 }
    },

    {
        question: 'Jeg støtter skjenking på torgallmenningen',
        enig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 },
        littEnig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 },
        littUenig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 },
        uenig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 }
    },

    {
        question: 'Jeg er enig i leksefri skole',
        enig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 },
        littEnig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 },
        littUenig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 },
        uenig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 }
    },

    {
        question: 'Jeg er positiv til å bygge ut vindkraft i mitt nærområde, selv om det går ut over naturlandskapet',
        enig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 },
        littEnig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 },
        littUenig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 },
        uenig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 }
    },

    {
        question: 'Det er bra at bomstasjonene i kommunen gjør det mindre fristende å kjøre bil',
        enig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 },
        littEnig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 },
        littUenig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 },
        uenig: { R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0 }
    },
   
];

let partyScores = {
    R: 0, SV: 0, AP: 0, MDG: 0, SP: 0, V: 0, KRF: 0, H: 0, FRP: 0
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
        resultBox.innerHTML += party + " Er ditt parti" + "<br>";
        count++;
    }
}
