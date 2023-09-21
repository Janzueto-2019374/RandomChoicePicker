const etiquetasEl = document.getElementById('etiquetas')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createEtiquetas(e.target.value)

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

function createEtiquetas(input) {
    const etiquetas = input.split(',').filter(etiqueta => etiqueta.trim() !== '').map(etiqueta => etiqueta.trim())
    
    etiquetasEl.innerHTML = ''

    etiquetas.forEach(etiqueta => {
        const etiquetaEl = document.createElement('span')
        etiquetaEl.classList.add('etiqueta')
        etiquetaEl.innerText = etiqueta
        etiquetasEl.appendChild(etiquetaEl)
    })
}

function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomEtiqueta = pickRandomEtiqueta()
	
	if (randomEtiqueta !== undefined) {
        highlightEtiqueta(randomEtiqueta)

        setTimeout(() => {
            unHighlightEtiqueta(randomEtiqueta)
        }, 100)
	}
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomEtiqueta = pickRandomEtiqueta()

            highlightEtiqueta(randomEtiqueta)
        }, 100)

    }, times * 100)
}

function pickRandomEtiqueta() {
    const etiquetas = document.querySelectorAll('.etiqueta')
    return etiquetas[Math.floor(Math.random() * etiquetas.length)]
}

function highlightEtiqueta(etiqueta) {
    etiqueta.classList.add('highlight')
}

function unHighlightEtiqueta(etiqueta) {
    etiqueta.classList.remove('highlight')
}