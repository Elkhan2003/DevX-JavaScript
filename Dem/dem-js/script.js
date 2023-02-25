const count_function = () => {
	let counter = document.querySelector("#counter");
	const plus = document.querySelector("#plus");
	const minus = document.querySelector("#minus");
	const start_count = document.querySelector("#start");
	const stop_count = document.querySelector("#stop");
	const reset_count = document.querySelector("#reset");

	let count = +localStorage.getItem("count") || 0;
	counter.textContent = count;

	let intervalId;

	const added = () => {
		if (!intervalId) {
			intervalId = setInterval(() => {
				count += 1;
				counter.textContent = count;
				localStorage.setItem("count", count);
			}, 10);
		}
	};

	plus.addEventListener("click", function () {
		count += 1;
		counter.textContent = count;
		localStorage.setItem("count", count);
	});

	minus.addEventListener("click", function () {
		if (count > 0) {
			count -= 1;
			counter.textContent = count;
			localStorage.setItem("count", count);
		}
	});

	start_count.addEventListener("click", function () {
		added();
	});

	stop_count.addEventListener("click", function () {
		clearInterval(intervalId);
		intervalId = null;
	});

	reset_count.addEventListener("click", function () {
		count = 0;
		counter.textContent = count;
		clearInterval(intervalId);
		intervalId = null;
		localStorage.setItem("count", count);
	});
};
count_function();
