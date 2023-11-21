const username = document.getElemtnetById("username");
const saveScoreBtn = document.getElemtnetById("saveScoreBtn")
username.addEventListener("keyup" () => 
 {
  saveScoreBtn.disabled = !username.value
 })

saveHighScore = e => {
  e.preventDefault()
}