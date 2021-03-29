const getDefaultState = () => {
	return {
		rows: [
			{
				title: 'Dr. Stone',
				date: '23 Mar 21',
				content: "Started watching this title since yesterday. I've watched plenty episodes today lol, it ain't the best but a great to watch, still. (On eps 16 season 1)",
				links: [
					{
						alias: 'My Animelist',
						url: 'https://myanimelist.net/anime/38691/Dr_Stone'
					}
				]
			},
			{
				title: 'Cooling My Temp',
				date: '24 Mar 21',
				content: "Just received my thermal paste today at noon. It cools my CPU temp about 5-10 C. Finally, I couldn't be more relaxed. Also I started watching Dr. Stone 2nd season today, lol.",
				links: [
					{
						alias: 'HWMonitor',
						url: 'https://raw.githubusercontent.com/Solork/github-pages/master/src/images/hwmonitor.png'
					}
				]
			},
			{
				title: 'My Most Productive Day',
				date: '29 Mar 21',
				content: "Today is my most productive day in like the last 3 weeks lmfao. Well, finally I started to code a new feature instead of testing scenarios that's why. As you already knew, I've been starting to watch anime since last week (mararthonly). Free! S1, Re:Zero S2 Cour 2, & Food Wars S5 were some of the titles I've completed this week. My date last weekend canceled, tho :-( . Thankfully, yesterday I met some of my college friends and twas fun. Lastly, international break sucks, I defo miss Chelsea.",
				links: [
					{
						alias: 'Manis ae Coffee & Space',
						url: 'https://www.instagram.com/maniss.ae'
					}
				]
			},
			// add more content here
		]
	}
}

const default_state = getDefaultState()

export {
	default_state
}