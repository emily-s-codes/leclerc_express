const hoverHandler = (imgElement, wordsElement, buttonElement) => {
    console.log('climb', imgElement.id)
    imgElement.style.display = "none"
    wordsElement.style.display = "block"
    buttonElement.style.display = "inline-block"
}
const hoverHandler2 = (imgElement, wordsElement, buttonElement) => {
    console.log('climbOut', imgElement.id)
    imgElement.style.display = "flex"
    wordsElement.style.display = "none"
    buttonElement.style.display = "none"
}
