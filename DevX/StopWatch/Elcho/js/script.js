// ! stopWatch
const stopWatchFunction = () => {
	const stopwatch = document.querySelector("#stopwatch");
	const startBtn = document.querySelector("#startBtn");
	const stopBtn = document.querySelector("#stopBtn");
	const reverseBtn = document.querySelector("#reverseBtn");
	const resetBtn = document.querySelector("#resetBtn");

	// Идентификатор интервала, используется для остановки интервала
	let intervalId;

	// Количество прошедшего времени в секундах
	let elapsedTime = +localStorage.getItem("time") || 0;
	stopwatch.textContent = formatTime(elapsedTime);

	// Назначение обработчиков событий для кнопок
	startBtn.addEventListener("click", start);
	stopBtn.addEventListener("click", stop);
	reverseBtn.addEventListener("click", reverse);
	resetBtn.addEventListener("click", reset);

	// Функция, которая запускает секундомер
	function start() {
		// Если интервал еще не запущен, то запускаем его
		if (!intervalId) {
			intervalId = setInterval(updateStopwatch, 10);
		}
	}

	function reverse() {
		// Если интервал еще не запущен, то запускаем его
		if (!intervalId) {
			intervalId = setInterval(reverseUpdateStopwatch, 10);
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
		stopwatch.textContent = formatTime(elapsedTime);
		localStorage.setItem("time", elapsedTime);
	}

	// Функция, которая обновляет значение секундомера
	function updateStopwatch() {
		elapsedTime += 0.01;
		stopwatch.textContent = formatTime(elapsedTime);
		localStorage.setItem("time", elapsedTime);
	}

	function reverseUpdateStopwatch() {
		elapsedTime -= 0.01;
		if (elapsedTime <= 0) {
			reset();
		}
		stopwatch.textContent = formatTime(elapsedTime);
		localStorage.setItem("time", elapsedTime);
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
};

stopWatchFunction();

// ! counter
const counterFunction = () => {
	let counter = document.querySelector("#counter");
	const button = document.querySelector("#button");
	const start = document.querySelector("#start");
	const stop = document.querySelector("#stop");
	const reset = document.querySelector("#reset");
	let count = +localStorage.getItem("count_V2") || 0;

	counter.textContent = count;

	let intervalId;

	const added = () => {
		if (!intervalId) {
			intervalId = setInterval(() => {
				count += 1;
				counter.textContent = count;
				localStorage.setItem("count_V2", count);
			}, 10);
		}
	};

	button.addEventListener("click", function () {
		count += 1;
		counter.textContent = count;
		localStorage.setItem("count_V2", count);
	});

	start.addEventListener("click", function () {
		added(intervalId);
	});

	stop.addEventListener("click", function () {
		clearInterval(intervalId);
		intervalId = null;
	});

	reset.addEventListener("click", function () {
		count = 0;
		counter.textContent = count;
		clearInterval(intervalId);
		intervalId = null;
		localStorage.setItem("count_V2", count);
	});
};
counterFunction();

fetch("https://randomuser.me/api/?results=100")
	.then((response) => response.json())
	.then((data) => {
		let users = data.results;
		let output = users.map((user) => {
			return `
        <div>
          <img src="${user. picture.medium}" alt="${user.name.first} ${user.name.last}">
          <p>${user.name.first} ${user.name.last}</p>
          <p>${user.email}</p>
        </div>
      `;
		});
		document.querySelector("#users").innerHTML = output;
	});
