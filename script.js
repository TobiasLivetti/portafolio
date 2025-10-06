var typed = new Typed('.typed', {
	strings: [
		'<span class="escritura">Técnico En Informática</span>',
		'<span class="escritura">Programador Trainee</span>',
		'<span class="escritura">Estudiante de Ingenieria</span>',
	],
	typeSpeed: 60, // Velocidad en mlisegundos para poner una letra,
	startDelay: 500, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 2000, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

const copyEmail = () => {
	const email = "tobiaslivetti@gmail.com";
	navigator.clipboard.writeText(email);

	const tooltip = document.getElementById("tooltip");
	tooltip.classList.add("show");
	
	setTimeout(() => {
		tooltip.classList.remove("show");
	}, 2000);
}