const btn = document.getElementById("button");
const count = document.getElementById("count")
const img = document.getElementById("image")


let currentCount = 0


btn.addEventListener('click', () => {
    img.style.display = 'none';
    fetch(`https://source.unsplash.com/collection/139386/1600x900`)
        .then(data => {
            console.log(data.url)
            img.src = data.url
            img.style.display = 'inline'
        })
    currentCount++
    count.innerHTML = currentCount
    
})
