

// import store from '@/store'

let _import 
if(process.env.NODE_ENV ==='development'){
	_import = file => require('@/views/' + file ).default
} else{
	_import =file=> () => import('@/views/'+file)
}

const content = [
    {
        path: '/',
        redirect: {path:'/layout'}
    },
    {
		path: '/layout',
		name: 'layout',
		// beforeEnter: (to, from, next) => {
		// 	store.commit('removeToken')
		// 	next()
		// },
		component:_import('layout'),
	}
]

export default content
 