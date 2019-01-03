setInterval(() => {
	console.log(1)
} , 1000)
process.on('exit', () => {
	console.log(2)
})