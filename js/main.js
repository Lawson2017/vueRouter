const one = {
	template: `<div class = 'text-center'>
		<h3> Northern Pygmy-owl along Gazos Creek in Pescadero, CA </h3>
		<img style = 'height: 400px; width: 600px; margin-bottom: 20px;'class = 'img-fluid' src = 'img/pygmy.jpg' alt='northern pygmy-owl'>
	</div>`
} 
const two = {
	template: `<div class = 'text-center'>
		<h3> Northern Pygmy-owl in the West Waddell Regional Wilderness, CA </h3>
		<img style = 'height: 400px; width: 600px; margin-bottom: 20px;'class = 'img-fluid' src = 'img/pyg2.jpg' alt='northern pygmy-owl'>
	</div>`
} 
const three = {
	template: `<div class = 'text-center'>
		<h3> Northern Pygmy-owl in Big Basin Redwoods State Park, CA</h3>
		<img style = 'height: 400px; width: 600px; margin-bottom: 20px; 'class = 'img-fluid' src = 'img/pyg3.jpg' alt='northern pygmy-owl'>
	</div>`
} 

const router = new VueRouter({
	routes: [
		{
			path: '/one',
			component: one
		},
		{
			path: '/two',
			component: two
		},
		{
			path: '/three',
			component: three
		}
	]
})


var routTest = new Vue ({
	router,
	el: "#app",
	data: {

	},
	methods: {

	}
}).$mount('#app')