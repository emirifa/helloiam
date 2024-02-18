if (
	process.argv[2] == null
) throw Error("Missing argument [2]");

fetch("https://en.pronouns.page/api/profile/get/" + process.argv[2] + "?version=2")
    .then((response) => response.json())
    .then((json) => {
		if (
			!json.profiles.en
		) throw Error("Username not found.");

		var name = json.profiles.en.names.find(a => a.opinion == "yes").value,
		pronouns = json.profiles.en.pronouns.find(a => a.opinion == "yes").value;

		console.log("Hello, my name is " + name + ". I use the pronouns: " + pronouns + ".");
	})
	.catch((err) => {
		console.error(err);
	});