export function showSnackbar(id, message, duration = 3000) {
	const snackbar = document.getElementById(id);
	const messageElement = snackbar.querySelector('.snackbar-message');

	messageElement.textContent = message;
	snackbar.classList.add('show');

	setTimeout(() => {
		snackbar.classList.remove('show');
	}, duration);

	const closeButton = snackbar.querySelector('.snackbar-close');
	closeButton.addEventListener('click', () => {
		snackbar.classList.remove('show');
	});
}
