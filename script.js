const deck = document.querySelector('body')

deck.onclick = flipCard

function flipCard(event) {
  const card = event.target.closest('.container')
  
  card?.classList.toggle('flipped')
  // card.firstElementChild.style.transform = 'rotateY(180deg)'
}