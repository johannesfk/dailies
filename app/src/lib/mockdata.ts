// Sketch out mock data for a film dailies app with projects > tasks > reels > clips
// This is a simplified version of the data structure used in the app

export const mockData = {
	projects: [
		{
			id: 1,
			name: 'Project 1',
			tasks: [
				{
					id: 1,
					name: 'Task 1',
					reels: [
						{
							id: 1,
							name: 'Reel 1',
							clips: [
								{
									id: 1,
									name: 'Clip 1',
									url: 'https://example.com/clip1.mov'
								},
								{
									id: 2,
									name: 'Clip 2',
									url: 'https://example.com/clip2.mov'
								}
							]
						},
						{
							id: 2,
							name: 'Reel 2',
							clips: [
								{
									id: 3,
									name: 'Clip 3',
									url: 'https://example.com/clip3.mov'
								}
							]
						}
					]
				},
				{
					id: 2,
					name: 'Task 2',
					reels: [
						{
							id: 3,
							name: 'Reel 3',
							clips: [
								{
									id: 4,
									name: 'Clip 4',
									url: 'https://example.com/clip4.mov'
								}
							]
						}
					]
				}
			]
		},
		{
			id: 2,
			name: 'Project 2',
			tasks: [
				{
					id: 3,
					name: 'Task 3',
					reels: [
						{
							id: 4,
							name: 'Reel 4',
							clips: [
								{
									id: 5,
									name: 'Clip 5',
									url: 'https://example.com/clip5.mov'
								}
							]
						}
					]
				}
			]
		}
	]
};
