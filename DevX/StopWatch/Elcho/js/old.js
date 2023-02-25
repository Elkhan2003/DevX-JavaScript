const stopwatch = document.querySelector("#stopwatch");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resetBtn = document.querySelector("#resetBtn");

// Идентификатор интервала, используется для остановки интервала
let intervalId;

// Количество прошедшего времени в секундах
let elapsedTime = 0;

// Для отображения в HTML
let readyValue = "00:00:00:000";
stopwatch.textContent = readyValue;

// Назначение обработчиков событий для кнопок
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

// Функция, которая запускает секундомер
function start() {
	// Если интервал еще не запущен, то запускаем его
	if (!intervalId) {
		intervalId = setInterval(updateStopwatch, 10);
	}
}

// Функция, которая останавливает секундомер
function stop() {
	clearInterval(intervalId);
	intervalId = null;
}

// Функция, которая сбрасывает секундомер
function reset() {
	stop();
	elapsedTime = 0;
	stopwatch.textContent = readyValue;
}

// Функция, которая обновляет значение секундомера
function updateStopwatch() {
	elapsedTime += 0.01;
	stopwatch.textContent = formatTime(elapsedTime);
}

// Функция, которая форматирует время в формате чч:мм:сс:мс
function formatTime(time) {
	const hours = Math.floor(time / 3600);
	const minutes = Math.floor((time % 3600) / 60);
	const seconds = Math.floor(time % 60);
	const milliseconds = Math.floor((time % 1) * 100);
	return `${padTimeUnit(hours)}:${padTimeUnit(minutes)}:${padTimeUnit(seconds)}:${msPadTimeUnit(milliseconds)}`;
}

// Тут все просто)
function padTimeUnit(timeUnit) {
	return timeUnit.toString().padStart(2, "0");
}

function msPadTimeUnit(timeUnit) {
	return timeUnit.toString().padStart(3, "0");
}
