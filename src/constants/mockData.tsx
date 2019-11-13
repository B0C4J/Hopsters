const options = [
	{
		key: '00',
		title: 'Popular',
		icon: require('../../assets/icons/fire.png'),
		data: [
			{
				key: 'yh-newtowner',
				title: 'Newtowner',
				brewery: 'Young Henrys',
				style: 'Australian Pale Ale',
				strength: '4.8%',
				description: 'Young Henrys wouldn’t be what it is without Newtown. It’s our home, community and inspiration. So when the suburb celebrated its sesquicentenary and we were invited to brew a unique beer to celebrate, we jumped at the chance. The resulting beer was an Aussie Pale Ale called Newtowner. In a bit of a nod to the suburb’s past and present influences, we used a blend of English and Australian malts. Then we added three varieties of local hops to make it fun, fruity and even a little bitter - just like Newtown. This is a beer we wanted everyone in our community to enjoy, whether it was being thrown back at a gig or sipped slowly in a beer garden. The people responded and Newtowner is now a permanent part of our beer range.',
				image: require('../../assets/Beers/newtowner.png'),
			},
			{
				key: 'hope-macedon',
				title: 'Macedon Harvest Chardonnay IPA',
				brewery: 'Hope Estate',
				style: 'Chardonnay IPA',
				strength: '9.5%',
				description: 'The 2019 release of Macedon Harvest is where grape meets grain; in a happoed up IPA. Chardonnay juice from our Mecedon Ranges Vvineyard adds a fresh smoothness to this isntense Imperial brew.',
				image: require('../../assets/Beers/macedon_harvest.png'),
			},
		]
	},
	{
		key: '01',
		title: 'Recently Viewed',
		icon: require('../../assets/icons/eye.png'),
		data: 'recent',
	},
	{
		key: '02',
		title: 'Favorites',
		icon: require('../../assets/icons/star.png'),
	},
];

export default {
	options,
}