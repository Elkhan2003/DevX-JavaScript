// fetch("https://randomuser.me/api/?results=5")
// 	.then((res) => res.json())
// 	.then((data) => {
// 		let users = data.results;
// 		let items = users.map((users) => {
// 			return `
// 	<div>
// 		<img src="${users.picture.large}" alt="">
// 		<img src="${users.picture.medium}" alt="">
// 		<img src="${users.picture.thumbnail}" alt="">
// 		<p>${users.name.first} ${users.name.last}</p>
// 		<p>${users.location.timezone.offset}, <br> ${users.location.timezone.description}</p>
// 	</div>
// 		`;
// 		});
// 		document.querySelector("#items").innerHTML = items;
// 	});

async function getUsers() {
	try {
		const response = await fetch("https://randomuser.me/api/?results=5");
		const data = await response.json();
		const users = data.results;
		const items = users.map((user) => {
			return `
					<div>
						<img src="${user.picture.large}" alt="">
						<img src="${user.picture.medium}" alt="">
						<img src="${user.picture.thumbnail}" alt="">
						<p>${user.name.first} ${user.name.last}</p>
						<p>${user.location.timezone.offset}, <br> ${user.location.timezone.description}</p>
					</div>
				`;
		});
		document.querySelector("#items").innerHTML = items.join("");
	} catch (error) {
		console.log(error);
	}
}

getUsers();
