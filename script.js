// script.js

let score = 0;
let currentSituation = 0;

const situations = [
    {
        text: "Seorang teman tampak sedih di sudut kelas. Apa yang akan kamu lakukan?",
        choices: [
            { text: "Tanya apakah dia baik-baik saja", points: 10 },
            { text: "Abaikan saja", points: -5 },
            { text: "Buat lelucon tentang dia", points: -10 }
        ]
    },
    {
        text: "Temanmu dijahili oleh siswa lain di koridor. Apa yang kamu lakukan?",
        choices: [
            { text: "Ajak teman itu pergi dari sana", points: 10 },
            { text: "Bantu siswa lain mengejeknya", points: -10 },
            { text: "Diam saja dan lanjut berjalan", points: -5 }
        ]
    },
    {
        text: "Seseorang di grup chatting kelas mulai mengomentari fisik teman sekelas. Bagaimana responsmu?",
        choices: [
            { text: "Beritahu mereka untuk berhenti", points: 10 },
            { text: "Tambahkan komentar negatif", points: -10 },
            { text: "Baca saja tanpa komentar", points: -5 }
        ]
    }
];

function updateSituation() {
    if (currentSituation < situations.length) {
        const situation = situations[currentSituation];
        document.getElementById("situation").textContent = situation.text;
        const choices = document.querySelectorAll("#choices button");
        choices.forEach((button, index) => {
            button.textContent = situation.choices[index].text;
        });
    } else {
        document.getElementById("situation").textContent = "Permainan selesai! Terima kasih sudah bermain.";
        document.getElementById("choices").style.display = "none";
    }
}

function chooseOption(choiceIndex) {
    const points = situations[currentSituation].choices[choiceIndex].points;
    score += points;
    document.getElementById("score").textContent = "Poin Kebaikan: " + score;
}

function nextSituation() {
    currentSituation++;
    updateSituation();
}

// Mulai game dengan situasi pertama
updateSituation();