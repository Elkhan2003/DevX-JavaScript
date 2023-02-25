fetch("https://randomuser.me/api/?results=100")
	.then((res) => res.json())
	.then((data) => {
		let users = data.results;
		let items = users.map((users) => {
			return `
	<div>
		<img src="${users.picture.large}" alt="">
		<img src="${users.picture.medium}" alt="">
		<img src="${users.picture.thumbnail}" alt="">
		<p>${users.name.first} ${users.name.last}</p>
		<p>${users.location.timezone.offset}, <br> ${users.location.timezone.description}</p>
	</div>
		`;
		});
		document.querySelector("#items").innerHTML = items;
	});
