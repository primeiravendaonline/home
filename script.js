// Timer
const display = document.getElementById('timer');
const savedEnd = localStorage.getItem('timerEnd');
const now = new Date().getTime();
let endTime = savedEnd && savedEnd > now ? parseInt(savedEnd) : now + 30 * 60 * 1000;
localStorage.setItem('timerEnd', endTime);

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = endTime - now;

  if (distance < 0) {
    clearInterval(timer);
    display.textContent = "00:00:00";
  } else {
    const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');
    display.textContent = `${hours}:${minutes}:${seconds}`;
  }
}, 1000);

// Popup de Vendas
const salesPopup = document.getElementById('salesPopup');

const firstNamesMale = [
  "João", "Lucas", "Carlos", "Felipe", "Gabriel", "Rafael",
  "Mateus", "Vinicius", "André", "Pedro", "Thiago", "Bruno",
  "Eduardo", "Leonardo", "Gustavo", "Rodrigo", "Daniel", "Caio",
  "Igor", "Henrique", "Ricardo", "Fernando", "Samuel", "Diego"
];

const firstNamesFemale = [
  "Ana", "Mariana", "Camila", "Larissa", "Juliana", "Beatriz",
  "Fernanda", "Carla", "Amanda", "Tatiane", "Isabela", "Luana",
  "Gabriela", "Renata", "Bianca", "Jéssica", "Patrícia", "Letícia",
  "Daniela", "Natália", "Priscila", "Aline", "Bruna", "Lívia"
];

const lastNames = [
  "Silva", "Souza", "Costa", "Oliveira", "Pereira", "Rodrigues",
  "Almeida", "Santos", "Barbosa", "Lima", "Carvalho", "Fernandes",
  "Martins", "Rocha", "Dias", "Gomes", "Ribeiro", "Teixeira",
  "Melo", "Nogueira", "Batista", "Azevedo", "Monteiro", "Correia"
];

const states = [
  "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Fortaleza",
  "Salvador", "Recife", "Curitiba", "Manaus", "Porto Alegre",
  "Brasília", "Belém", "Goiânia", "Campinas", "Natal", "São Luís",
  "Maceió", "João Pessoa", "Aracaju", "Cuiabá", "Campo Grande"
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomName() {
  const isFemale = Math.random() > 0.5;
  const firstName = isFemale ? getRandomItem(firstNamesFemale) : getRandomItem(firstNamesMale);
  const lastName = getRandomItem(lastNames);
  const city = getRandomItem(states);
  return `${firstName} ${lastName} de ${city}`;
}

function showPopup(message) {
  salesPopup.innerHTML = message;
  salesPopup.classList.add('show');
  setTimeout(() => {
    salesPopup.classList.remove('show');
  }, 5000);
}

function randomPopup() {
  const fullName = generateRandomName();
  const msg = `${fullName} acabou de adquirir o PVO`;
  showPopup(msg);
}

// Exibir pop-ups em intervalo aleatório de 15 a 35 segundos
setInterval(() => {
  randomPopup();
}, Math.floor(Math.random() * 20000) + 15000);