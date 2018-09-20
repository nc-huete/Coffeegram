// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/producto/',
    	url: 'producto.html',
    	name: 'producto',
  		},
		{
		path: '/about/',
    	url: 'about.html',
    	name: 'about',
  		},
		{
		path: '/shops/',
    	url: 'shops.html',
    	name: 'shops',
  		},
		{
		path: '/shops-tgu/',
    	url: 'shops-tgu.html',
    	name: 'shops-tgu',
  		},
		{
		path: '/shops-sps/',
    	url: 'shops-sps.html',
    	name: 'shops-sps',
  		},
		{
		path: '/likes/',
    	url: 'likes.html',
    	name: 'likes',
  		},
		{
		path: '/contacts/',
    	url: 'contacts.html',
    	name: 'contacts',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;





 

