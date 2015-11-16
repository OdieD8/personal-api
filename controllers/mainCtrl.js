var name = { "name": "Donald Duck" };
var location = { "location": "Timbuktu" };
var occupations = { "occupations": ["Thwarting Buggs Bunny", "Tomfoolery"]};
var hobbies = { hobbies: [{
			"name": "Watching cartoons",
			"type": "past"
			},
			{
			"name": "Quacking",
			"type": "past"
			}]};
			
var skills = { skills: [{
			"id": 1,
			"name": "Javascript",
			"experience": "Intermediate"
			},
			{
			"id": 2,
			"name": "HTML",
			"experience": "Intermediate"
			}]};

module.exports = {
	getName: function(req, res, next) {
		res.status(200).json(name.name);
	},
	
	location: function(req, res, next) {
		res.status(200).json(location.location);
	},
	
	occupations: function(req, res, next) {
		if(req.query.order === "asc") {
			res.status(200).json(occupations.occupations.sort());
		}
		else if(req.query.order === "desc") {
		var sorted = occupations.occupations.sort();
		res.status(200).json(sorted.reverse());
		}
		else {
			res.status(200).json(occupations.occupations);
		};
	},
	
	latestOcc: function(req, res, next) {
		var last = occupations.occupations.length - 1;
		res.status(200).json(occupations.occupations[last]);
	},
	
	hobbies: function(req, res, next) {
		res.status(200).json(hobbies.hobbies);
	},
	
	hobbieType: function(req, res, next) {
		var answers = [];
		var type = req.params.type;
		hobbies.hobbies.forEach(function(x) {
			if(type === x.type) {
				answers.push(x.name);
			}
		});
		res.status(200).json(answers);
	},
	
	changeName: function(req, res, next) {
		var newName = req.body;
		name = newName;
		console.log(newName);
		res.status(200).json({message: "Name Updated"});
	},
	
	updateLocation: function(req, res, next) {
		var newLocation = req.body;
		location = newLocation;
		console.log(newLocation);
		res.status(200).json({message: "Location Updated"});
	},
	
	addHobbie: function(req, res, next) {
		hobbies.hobbies.push(req.body);
		console.log(hobbies);
		res.status(200).json({message: "Hobbies Updated"});
	},
	
	addOccupation: function(req, res, next) {
		occupations.occupations.push(req.body.newOccupation);
		console.log(occupations);
		res.status(200).json({message: "Occupations Updated"});
	},
	
	skills: function(req, res, next) {
		var answers = [];
		var kind = req.query.experience;
		if(req.query.experience) {
			skills.skills.forEach(function(x) {
				if(kind === x.experience) {
					answers.push(x.name);
				}
			})
			res.status(200).json(answers);
		}
		else {
			res.status(200).json(skills);
		};
	}
};	
