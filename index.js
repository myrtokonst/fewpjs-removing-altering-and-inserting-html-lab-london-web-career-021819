// Write your code here!
document.getElementById('main').remove()

const newHeader = document.createElement('h1')

newHeader.id = 'victory'

document.body.appendChild(newHeader)
newHeader.innerText = "YOUR-NAME is the champion"