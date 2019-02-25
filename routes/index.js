var express = require('express');
var router = express.Router();

const data = {
	vidly: {
		title: 'Vidly API Server',
		subtitle: 'RESTful API backend for a video rental application',
		description: `Vidly is a RESTful API backend for a video rental application. It supports JSON format and returns specific data about products, customers and rental transactions.
			It is built on Express and make use of json web tokens (JWT) to enable stateless authentication.
			The app interacts with MongoDB and uses Mongoose to define schemas and create models.
			Vidly features a front-end playground to test the endpoints. The code is tested extensively through unit and integration tests.`,
		technologies: ['Javascript', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'Rest Architecture', 'ES6', 'Async/await', 'Input validation', 'Jest'],
		images: ['vidly_code.jpg', 'vidly_endpoints.jpg', 'vidly_play.jpg'],
		links: {
			git: 'https://github.com/emastra/vidly-api-server',
			live: 'https://agile-brushlands-56876.herokuapp.com'
		}
	},
	elearn: {
		title: 'E-Learn',
		subtitle: 'Full-stack e-learning platform',
		description: `E-learn is a full-stack e-learning platform which provides different features for both students and instructors.
			The app makes use of Mongoose to define database schemas and has a local authentication system based on PassportJS and Bcrypt. It features a simple dashboard showing different infomation based on user roles.
			Instructors can publish and manage courses and individual lessons. Students can register for courses and attend lessons.`,
		technologies: ['Javascript', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'PassportJS', 'Bcrypt', 'Sessions', 'Express-validator', 'Connect-flash', 'Promises', 'EJS'],
		images: ['elearn_home.jpg', 'elearn_login.jpg', 'elearn_dash.jpg'],
		links: {
			git: 'https://github.com/emastra/e-learn',
			live: 'https://salty-tundra-54257.herokuapp.com'
		}
	},
	chatapp: {
		title: 'Chat App',
		subtitle: 'SocketIO based group chat app.',
		description: `This is a group chat app which allows to create rooms and exchange messages in real time
			between room members. It features a basic login and room access system. It is built on SocketIO both
			on the back-end and the client-side. It manages custom events and features unit tests for the essential utility modules.`,
		technologies: ['Javascript', 'Node.js', 'Express', 'SocketIO', 'Events', 'Promises', 'Moment', 'Mocha', 'Expect'],
		images: ['chat_login.jpg', 'chat_main.jpg', 'chat_code.jpg'],
		links: {
			git: 'https://github.com/emastra/chat-app',
			live: 'https://mighty-tundra-77965.herokuapp.com'
		}
	},
	blogsystem: {
		title: 'Emilio\'s Blog',
		subtitle: 'Simple blog built with Express',
		description: `This is a full-stack blog system with basic CMS capabilities to provide the possibility to update the content.
			It is built on Express framework and MongoDB. It does not use any ORM, but employs the low level JS mongodb driver
			to perform CRUD operations on the database. It features Promise based code, input validation and connect-flash session messages.`,
		technologies: ['Javascript', 'Node.js', 'Express', 'MongoDB', 'JS mongodb driver', 'Promises', 'Multer', 'Express-validator', 'Connect-flash module', 'EJS templating system'],
		images: ['blog_add.jpg', 'blog_home.jpg', 'blog_post.jpg'],
		links: {
			git: 'https://github.com/emastra/express-blog',
			live: 'https://immense-woodland-97475.herokuapp.com'
		}
	},
	meteo: {
		title: 'Meteo CLI',
		subtitle: 'Node.js CLI app which queries the darksky API',
		description: `Meteo is a CLI application which provides weather forecast for cities worldwide.
			It features a help menu, today and 10-days forecast commands. The app is structured to be scalable and split each command into different modules.
			it integrates the third-party darksky API, the IP geolocation Ipdata API and the Google geolocation API.`,
		technologies: ['Javascript', 'Node.js', 'CLI environment', 'Yargs module', 'async/await', 'Third-party APIs'],
		images: ['meteo_home.jpg', 'meteo_code.jpg', 'meteo_folders.jpg'],
		links: {
			git: 'https://github.com/emastra/meteo-cli',
			live: 'https://github.com/emastra/meteo-cli.git'
		}
	},
	fileserver: {
		title: 'HTTP File Server',
		subtitle: '',
		description: `This project is a http based file server where files can be uploaded and deleted directly from the browser.
			It is built with Node.js without any framework, so it makes use of the low-level built-in http module and the powerful node.js streams
			which are the base of many widely used features like HTTP requests and responses objects, fs read and write streams or TCP sockets.`,
		technologies: ['Javascript', 'Node.js', 'Http module', 'Streams', 'Fs module', 'Custom static server', 'Callbacks', 'Url module', 'Path module', 'Mime types'],
		images: ['filesrvr_home.jpg', 'filesrvr_code.jpg', 'filesrvr_folders.jpg'],
		links: {
			git: 'https://github.com/emastra/http-file-server',
			live: 'https://frozen-peak-19151.herokuapp.com'
		}
	}
}

router.get('/', (req, res, next) => {
	res.render('index.ejs');
});

router.get('/:name', (req, res, next) => {
	const name = req.params.name;
	res.render('project.ejs', data[name]);
});

module.exports = router;
