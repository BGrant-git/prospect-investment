export const projectsDataShort = [
	{
		title: `Bassein Park`,
		area: `W12`,
		status: `In Progress`,
		description: `Victorian house previously arranged as 4 flats. Creation of a luxury 6 bedroom family home with flexible working space and self contained space for live in staff.`,
		gdv: `Target: £3.5m`,
		img: require('../images/projects/project1/project1.jpg'),
		id: `basseinPark`,
	},
	{
		title: `Cable Street`,
		area: `E1`,
		status: `Completed`,
		description: `Listed early Victorian building arranged as 3 flats. Reconfigured and refurbished to provide 3 flats (all 2 bed). All sold at target price during the COVID pandemic.`,
		gdv: `£1.7m`,
		img: require('../images/projects/project1/project3.jpg'),
		id: `cableStreet`,
	},
	{
		title: `Baker Road`,
		area: `NW10`,
		status: `Completed`,
		description: `Victorian house converted into 3 flats. Purchased at opportunistic price at auction.`,
		gdv: `£1.1m`,
		img: require('../images/projects/project1/project4.jpg'),
		id: `bakerRoad`,
	},
	{
		title: `Fulham Park Gardens`,
		area: `SW6`,
		status: `Completed`,
		description: `Maisonette in grand Victorian building purchased at distressed price. Planning granted to split into 2 maisonette units. Achieve top prices for the area.`,
		gdv: `£2m`,
		img: require('../images/projects/project1/project1.jpg'),
		id: `fulhamParkGardens`,
	},
]

export const projectsDataLong = {
	bakerRoad: {
		title: `Baker Road`,
		area: `NW10`,
		description: `Victorian house converted into 3 flats. Purchased at opportunistic price at auction.`,
		projectIds: [
			[`#groundFloor`, `Ground Floor`],
			[`#firstFloor`, 'First Floor'],
			[`#secondFloor`, `Second Floor`],
		],
		groundFloor: {
			title: `Ground Floor - Baker Road`,
			location: `Harlesden NW10`,
			heroImg: require('../images/projects/BakerRoad/ground-floor/1.jpg'),
			keyFeatures: [
				`Two Double Bedrooms`,
				`Two Shower Rooms`,
				`125 Year Lease`,
				`Central Locaiton`,
				`Stunning Condition`,
				`Brand New`,
			],
			description: `This  newly  converted  two  double  bedroom,  two shower  room,  first  floor  flat  boasts  modern accommodation throughout  with  an  open  plan kitchen living area. It is being sold with a 
			125  year  lease  and  is  available  to  view 
			immediately.`,
			price: `£425 Leasehold`,
			location: `The  property  is  situated  just  0.1 
			miles from Harlseden Station, 0.3 miles to Harlesden 
			High  Street  and  1  mile  from  the  North  Circular 
			leading to the M1 and A40.`,
			images: [
				require('../images/projects/BakerRoad/ground-floor/2.jpg'),
				require('../images/projects/BakerRoad/ground-floor/3.jpg'),
			],
			groundFloor: {
				id: `groundFloor`,
				title: `Ground Floor - Baker Road`,
				location: `Harlesden NW10`,
				heroImg: require('../images/projects/BakerRoad/ground-floor/1.jpg'),
				keyFeatures: [
					`Two Double Bedrooms`,
					`Two Shower Rooms`,
					`125 Year Lease`,
					`Central Locaiton`,
					`Stunning Condition`,
					`Brand New`,
				],
				description: `This  newly  converted  two  double  bedroom,  two shower  room,  first  floor  flat  boasts  modern accommodation throughout  with  an  open  plan kitchen living area. It is being sold with a 
				125  year  lease  and  is  available  to  view 
				immediately.`,
				price: `£425 Leasehold`,
				location: `The  property  is  situated  just  0.1 
				miles from Harlseden Station, 0.3 miles to Harlesden 
				High  Street  and  1  mile  from  the  North  Circular 
				leading to the M1 and A40.`,
				images: [
					require('../images/projects/BakerRoad/ground-floor/2.jpg'),
					require('../images/projects/BakerRoad/ground-floor/3.jpg'),
				],
			},
			firstFloor: {
				id: `firstFloor`,
				title: `First Floor - Baker Road`,
				location: `Harlesden NW10`,
				heroImg: require('../images/projects/BakerRoad/ground-floor/1.jpg'),
				keyFeatures: [
					`Two Double Bedrooms`,
					`Two Shower Rooms`,
					`125 Year Lease`,
					`Central Locaiton`,
					`Stunning Condition`,
					`Brand New`,
				],
				description: `This  newly  converted  two  double  bedroom,  two shower  room,  first  floor  flat  boasts  modern accommodation throughout  with  an  open  plan kitchen living area. It is being sold with a 
				125  year  lease  and  is  available  to  view 
				immediately.`,
				price: `£425 Leasehold`,
				location: `The  property  is  situated  just  0.1 
				miles from Harlseden Station, 0.3 miles to Harlesden 
				High  Street  and  1  mile  from  the  North  Circular 
				leading to the M1 and A40.`,
				images: [
					require('../images/projects/BakerRoad/ground-floor/2.jpg'),
					require('../images/projects/BakerRoad/ground-floor/3.jpg'),
				],
			},
			secondFloor: {
				id: `secondFloor`,
				title: `Second Floor - Baker Road`,
				location: `Harlesden NW10`,
				heroImg: require('../images/projects/BakerRoad/ground-floor/1.jpg'),
				keyFeatures: [
					`Two Double Bedrooms`,
					`Two Shower Rooms`,
					`125 Year Lease`,
					`Central Locaiton`,
					`Stunning Condition`,
					`Brand New`,
				],
				description: `This  newly  converted  two  double  bedroom,  two shower  room,  first  floor  flat  boasts  modern accommodation throughout  with  an  open  plan kitchen living area. It is being sold with a 
				125  year  lease  and  is  available  to  view 
				immediately.`,
				price: `£425 Leasehold`,
				location: `The  property  is  situated  just  0.1 
				miles from Harlseden Station, 0.3 miles to Harlesden 
				High  Street  and  1  mile  from  the  North  Circular 
				leading to the M1 and A40.`,
				images: [
					require('../images/projects/BakerRoad/ground-floor/2.jpg'),
					require('../images/projects/BakerRoad/ground-floor/3.jpg'),
				],
			},
		},
	},
}
