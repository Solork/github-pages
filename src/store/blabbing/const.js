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
				content: "Just received my thermal paste today at noon. It cools my CPU temp about 5-10 C. Finally, I couldn't be relaxed. Also I started watching Dr. Stone 2nd season today, lol.",
				links: [
					{
						alias: 'HWMonitor',
						url: 'https://raw.githubusercontent.com/Solork/solork.github.io/master/src/images/hwmonitor.png'
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