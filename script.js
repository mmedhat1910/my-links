let links_div = document.querySelector('.links');

let links = [
	{
		title: 'Instagram',
		img: 'instagram.png',
		url: '',
	},
	{
		title: 'Twitter',
		img: 'twitter.png',
		url: '',
	},
	{
		title: 'Linkedin',
		img: 'linkedin.png',
		url: '',
	},
	{
		title: 'Github',
		img: 'github.png',
		url: '',
	},
	{
		title: 'Youtube',
		img: 'youtube.png',
		url: '',
	},
	{
		title: 'Snapchat',
		img: 'snapchat.png',
		url: '',
	},
];

links.map((link) => {
	links_div.innerHTML += `<a href='${link.url}' target='_blank'  class='link-tile'>
			<img src='./assets/icons/${link.img}' class='tile-icon' alt='' srcset='' />
			
			<div class='tile-title'>
			<span>${link.title}</span>
			</div>
		</a>
        `;
});
