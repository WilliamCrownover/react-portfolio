export const pageNames = [
	{
		id: 1,
		link: '/react-portfolio/about',
		name: 'About Me'
	},
	{
		id: 2,
		link: '/react-portfolio/projects',
		name: 'Projects'
	},
	{
		id: 3,
		link: '/react-portfolio/contact',
		name: 'Contact'
	},
	{
		id: 4,
		link: '/react-portfolio/resume',
		name: 'Resume'
	}
];

export const allSkills = [
	{
		title: 'Front-end Proficiencies',
		list: [
			'React.js',
			'Redux.js',
			'JavaScript ES6',
			'jQuery',
			'Handlebars.js',
			'CSS3',
			'HTML5',
		]
	},
	{
		title: 'Back-end Proficiencies',
		list: [
			'GraphQL',
			'Node.js',
			'Express.js',
			'MongoDB',
			'MongooseODM',
			'MySQL2',
			'Sequelize.js',
		]
	},
	{
		title: 'Full-stack Methodologies',
		list: [
			'MERN Stack',
			'Agile Development',
			'MVC Paradigm',
			'Git Version Control',
		]
	},
	{
		title: 'Design Principles',
		list: [
			'Mobile Responsive',
			'User Interfaces',
			'User Experience',
			'Graphic Design',
			'Data Visualization'
		]
	},
	{
		title: 'Interpersonal Skills',
		list: [
			'Collaboration',
			'Written & Verbal Communication',
			'Problem Solving',
			'Attention to Details',
			'Time Management',
			'Emotional Intelligence'
		]
	}
];

export const allProjectInfo = [
	{
		id: 1,
		title: 'Bfanz',
		imageName: 'bfz.jpg',
		goal: 'This full-stack MERN web application provides a fun and safe space for Cult Classic and B-Movie enthusiasts to share and rate their favorite films while providing an opportunity to discover new movie experiences.',
		role: 'Full-stack web developer. I had a good understanding of how to write GraphQL queries and mutations which I used to bring data from our Mongo database to the front-end react components. I used my knowledge of UI and UX to inform the design of our web app specifically handling error messages for the user’s interactions with the website.',
		concepts: 'MERN-stack, Responsive Design, React Components, GraphQL Queries and Mutations, JWT Authentication',
		tech: 'React, GraphQL, JavaScript, MaterialUI, Apollo Server',
		liveURL: 'https://bfanz.herokuapp.com/',
		repoURL: 'https://github.com/WilliamCrownover/bfanz/',
		guestAccount: '- guest - password123'
	},
	{
		id: 2,
		title: 'Shelf-Life Continued',
		imageName: 'slc.jpg',
		goal: 'This full-stack web app helps user’s keep track of their grocery’s expiration dates in order to help them save food and money.',
		role: 'Project lead & Front-end web developer. I guided my team on project goals and developed the majority of the client-side page design.',
		concepts: 'Full-stack app, Restful API, Database, MVC File Structure, User Authentication',
		tech: 'HTML, CSS, JavaScript, Node, Express, Handlebars, MySQL, Sequelize, Luxon',
		liveURL: 'https://shelf-life-206.herokuapp.com/',
		repoURL: 'https://github.com/WilliamCrownover/shelf-life-continued',
		guestAccount: '- guest@email.com - password123'
	},
	{
		id: 3,
		title: 'US Voter Representative',
		imageName: 'usvr.jpg',
		goal: 'This front-end web application aims to help United State voters easily find out information about their house representatives in congress. By using publicly available civic APIs we created a tool to bring hidden information to curious voters in a non-biased, comprehensible way.',
		role: 'Client-side web developer. I focused on transforming the incoming JSON data from 3rd-party API fetches into candidate objects displayed on the user interface of the website.',
		concepts: 'Front-end app, Responsive Design, Server-side API, Local Storage',
		tech: 'HTML, CSS, JavaScript, Materialize.css, jQuery, 3rd-party API’s',
		liveURL: 'https://williamcrownover.github.io/us-voter-representatives/',
		repoURL: 'https://github.com/WilliamCrownover/us-voter-representatives'
	},
	{
		id: 4,
        title: 'QGB Therapy',
        imageName: 'qgb.jpg',
        goal: 'This professional website was built as a single-page React.js app to expand the web presence of Dr. Quintin Bailey. Using React components for the pages and elements, the website is completely mobile responsive. I designed custom CSS to maintain precise control over the look of the pages. New patients are able to submit a google form embedded into the contact page.',
        concepts: 'Single-page App, React Components, JSX, Custom CSS',
        tech: 'React, CSS, Node',
        liveURL: 'https://qgbtherapy.com/',
        repoURL: 'https://github.com/WilliamCrownover/qgb-therapy'
	},
	{
		id: 5,
		title: 'Weather Forecast Dashboard',
		imageName: 'wfd.jpg',
		goal: 'This web application was designed as a quick way to look up the current and five day weather forecast for various cities around the world and compare the results between past city searches. The 3rd party API used for the weather data comes from OpenWeather. The UV index and forecast background colors are presented in response to the data so that the user on a glimpse can see how intense the UV light is and if the week will be cold or hot.',
		concepts: 'Front-end app, Dynamic HTML/CSS, 3rd-party API’s, Local Storage',
		tech: 'HTML, CSS, JavaScript, jQuery, Moment.js',
		liveURL: 'https://williamcrownover.github.io/weather-forecast-dashboard/',
		repoURL: 'https://github.com/WilliamCrownover/weather-forecast-dashboard'
	},
	{
		id: 6,
		title: 'Tech Blog Forum',
		imageName: 'tbf.jpg',
		goal: 'This full-stack web app was built as a blog/forum style site to host discussions on the latest in developer tech news and opinions. The website handles user account creation securely using bcrypt to hash passwords and once a user is validated they can interact with the forum by creating blog posts of their own or adding comments to past posts.',
		concepts: 'MVC File Structure, Restful API, Responsive Design, User Authentication, CRUD',
		tech: 'Handlebars, MySQL2, Sequelize, Express, Node',
		liveURL: 'https://tech-blog-forum-mvc.herokuapp.com/',
		repoURL: 'https://github.com/WilliamCrownover/tech-blog-forum',
		guestAccount: '- guest - password123'
	},
	{
		id: 7,
		title: 'Javascript Coding Quiz',
		imageName: 'jsq.jpg',
		goal: 'This website is designed to be an interactive quiz game with the focus of the questions being JavaScript fundamentals. I built this project to help reinforce the foundations of JavaScript and be a helpful tool for programming students to gauge their learning progress.',
		concepts: 'Local Storage, JSON, Responsive Design',
		tech: 'JavaScript, HTML, CSS',
		liveURL: 'https://williamcrownover.github.io/javascript-coding-quiz/',
		repoURL: 'https://github.com/WilliamCrownover/javascript-coding-quiz'
	}
];
