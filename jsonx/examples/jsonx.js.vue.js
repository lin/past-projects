import TodoList from './components/TodoList.vue'

const buttonString = jx.s(button, 'html');

export const template = jx`html
<template>
	<div id="app">
		<h1>My Todo App!</h1>
		<TodoList/>
	</div>
</template>
`

export default {
	components: {
		TodoList
	}
}

export const style = jx`scss
@import './variables.scss';

*, *::before, *::after {
	box-sizing: border-box;
}

#app {
	max-width: 400px;
	margin: 0 auto;
	line-height: 1.4;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: $vue-blue;
}

h1 {
	text-align: center;
}
`

//===============//
<div>
	<product></product>
</div>

div {
	...product
}

div {
	...Product({props: {}})
}
