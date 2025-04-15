export const PROJECTS = [
	// {
	// 	title: "Personal Website",
	// 	type: "Personal",
	// 	start_year: 2024,
	// 	end_year: 2024,
	// 	description: "The website which you are currently on 🙂. It is built using React and hosted on GitHub pages.",
	// 	image: "",
	// 	links: [
	// 		{
	// 			name: "GitHub",
	// 			link: "https://github.com/smithr38atwit/smithr38atwit.github.io",
	// 		},
	// 	],
	// },
  {
    title: "LED Matrix Controller",
    type: "Personal",
    start_year: 2024,
    end_year: 2024,
    description:
      "Scripts to display different messages and animations on an RGB LED matrix, as well as a website to control it. The display controller is a Raspberry Pi 3 that runs Python scripts, which can display a “meeting in progress” sign, a score tracker for ongoing games in different sports, and a mini weather/news station. The website is written using Flask and also hosted on the Raspberry Pi.",
		image: "/project_images/led_matrix.png",
    links: [
      {
        name: "GitHub",
        link: "https://github.com/smithr38atwit/LED-Matrix",
      },
    ],
  },
  {
    title: "Discord Bot",
    type: "Personal",
    start_year: 2024,
    end_year: 2024,
    description:
			"(IN PROGRESS) An auto-response Discord bot and accompanying website to manage it. The bot is controlled by a Python script, with its primary function being to scan messages sent in a Discord server and send a response when keywords are detected. The website was built using Flask and is used to update the keywords/response pairs for the bot, which are stored in a SQLite database.",
    image: "",
    links: [
      {
        name: "GitHub",
        link: "https://github.com/smithr38atwit/Gulag-Bot",
      },
    ],
  },
  {
    title: "Master's Thesis",
    type: "School",
    start_year: 2023,
    end_year: 2024,
    description: "My thesis for completion of the Applied Computer Science degree at WIT.", // TODO: copy abstract,
		image: "/project_images/thesis.png",
    links: [
      {
        name: "GitHub",
        link: "https://github.com/smithr38atwit/Thesis-Project",
      },
    ],
  },
	{
		title: "City Explorer",
		type: "School",
		start_year: 2023,
		end_year: 2023,
		description:
			"A mobile-focused web application with the goal of encouraging users to get outside and explore their city or local area. The front end was built using React, and the back end using Python/FastAPI. I worked in a team of three to complete this website as our senior project, and contributed by building the backend along with large portions of the frontend.",
		image: "/project_images/city_explorer.png",
		links: [
			{
				name: "GitHub",
				link: "https://github.com/smithr38atwit/CityExplorer",
			},
		],
	},
  {
    title: "F1 EZ Schedule",
    type: "School",
    start_year: 2023,
    end_year: 2023,
    description:
			"A website that allows easy viewing of the most important information regarding the Formula 1 motorsport series. It uses plain HTML/CSS/Javascript on the front end and Python/FastAPI on the back end. This was made in a team of two as the final project for my Web Development college course during my senior year.",
    image: "/project_images/ez_f1.png",
    links: [
      {
        name: "GitHub",
        link: "https://github.com/smithr38atwit/F1-EZ-Schedule",
      },
    ],
  },
  {
    title: "BG3 Mods",
    type: "Personal",
    start_year: 2024,
    end_year: 2024,
    description:
      "I have made 2 mods for the RPG game Baldur's Gate 3: Auto Hide Summons and Group Perform. They were published on NexusMods and used by the game's modding community with over 47,000 unique downloads across them. Any scripts involved in these mods were written in Lua.",
    image: "/project_images/bg3mods.png",
    links: [
      {
        name: "Group Perform",
        link: "https://github.com/smithr38atwit/GroupPerform",
      },
      {
        name: "Auto Hide Summons",
        link: "https://github.com/smithr38atwit/AutoHideSummons",
      },
    ],
  },
];

export const EXPERIENCE = [
  {
    title: "MS in Applied Computer Science",
    company: "Wentworth Insitute of Technology",
    start_date: "Sep 2023",
    end_date: "Dec 2024",
    description:
      'I completed my master\'s degree in applied computer science at WIT. The related coursework focused heavily machine learning and deep learning. I wrote my thesis on "Pathfinding and Obstacle Avoidance for Warehouse Robots using Reinforcement Learning".',
    icon_path: "/exp_logos/wit_logo.png",
  },
  {
    title: "Software Engineering Intern",
    company: "GoLinks (YC W19)",
    start_date: "Jun 2024",
    end_date: "Sep 2024",
    description:
      "My 3rd internship was at a fast paced startup that heavily valued learning. I did full-stack web development in a team setting where I used React and PHP. Also completed a solo intern project: an internal dashboard for viewing data about the company's customers.",
    icon_path: "/exp_logos/golinks_logo.png",
  },
  {
    title: "BS in Computer Science",
    company: "Wentworth Insitute of Technology",
    start_date: "Sep 2019",
    end_date: "Aug 2023",
    description: "I completed my bachelor's in computer science at WIT with a GPA of 3.33.",
    icon_path: "/exp_logos/wit_logo.png",
  },
  {
    title: "Software Co-op",
    company: "RoviSys",
    start_date: "Sep 2022",
    end_date: "Dec 2022",
    description:
      "My second co-op involved a variety of projects for different customers. Most notably, I worked in a team on a web application using Angular and C#. I also completed a database migration script for a client and worked with them directly to execute the migration.",
    icon_path: "/exp_logos/rovisys_logo.png",
  },
  {
    title: "Product Support Engineering Co-op",
    company: "Teradyne",
    start_date: "Jan 2022",
    end_date: "May 2022",
    description:
      "My first co-op was in a hybrid programming/engineering role at a semi-conductor testing company. I completed a proof of concept for a Windows Forms desktop app that allowed engineers to interact with a 3D CAD model and view information about selected parts. Also wrote a Python web scraper to collect data and assisted engineers with various tasks.",
    icon_path: "/exp_logos/teradyne_logo.png",
  },
];
