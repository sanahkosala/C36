class Form {
  constructor() {
    this.input=createInput("")
    this.playbutton=createButton("play")
    this.titleImage=createImg("assets/title.png")
    this.greeting=createElement("H3")
  }
setElementPosition(){
  this.titleImage.position(120,100)
  this.input.position(width/2-100,height/2-80)
  this.playbutton.position(width/2-100,height/2-20)
  this.greeting.position(width/2-100,height/2-100)
  
}
hide(){
  this.input.hide()
  this.playbutton.hide()
}
handleMousePressed(){
  this.playbutton.mousePressed(()=>{
    this.input.hide()
    this.playbutton.hide()
    var message = `Hey ${this.input.value()} Waiting for another player to join`
    this.greeting.html(message)
  })
}
display(){
  this.setElementPosition()
  this.handleMousePressed()
}
}
