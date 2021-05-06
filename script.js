let links_div = document.querySelector('.links');

let links = [
	{
		title: 'Instagram',
		img: 'instagram.png',
		url: 'https://www.instagram.com/mmedhat1910/',
	},
	{
		title: 'Twitter',
		img: 'twitter.png',
		url: 'https://twitter.com/mmedhat1910',
	},
	{
		title: 'Facebook',
		img: 'facebook_square.png',
		url: 'https://www.facebook.com/mohamed.medhat.986',
	},
	{
		title: 'Linkedin',
		img: 'linkedin.png',
		url: 'https://www.linkedin.com/in/mmedhat1910',
	},
	{
		title: 'Github',
		img: 'github.png',
		url: 'https://github.com/mmedhat1910/',
	},
	{
		title: 'Youtube',
		img: 'youtube.png',
		url: 'https://youtube.com/c/MohamedMedhat7',
	},
	{
		title: 'Snapchat',
		img: 'snapchat.png',
		url: 'https://www.snapchat.com/add/mmedhat_helal',
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
