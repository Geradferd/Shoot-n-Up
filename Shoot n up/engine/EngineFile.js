class Engine{
    /* be in charge of the game loop
       and keep track of the current scene */

    /* have static class since there will be
       no instances */

       static layers = ["UI", "Backgound", "Object"]
    
       static start() {
        Engine.canvas = document.querySelector("#canvas")
        Engine.ctx = Engine.canvas.getContext("2d")
        
      
        addEventListener("mousemove", Input.mouseMove)
        addEventListener("mousedown", Input.mouseDown)
        addEventListener("mouseup", Input.mouseUp)
        addEventListener("keydown", Input.keyDown)
        addEventListener("keyup", Input.keyUp)
        addEventListener("click", Input.keyClick)

        Engine.canvas.width = window.innerWidth
        Engine.canvas.height = window.innerHeight
        SceneManager.currentScene.start()
        functionTests()
        Engine.gameLoop()
       }

      static gameLoop() {
         Engine.update()
         Engine.draw()
         requestAnimationFrame(Engine.gameLoop)
      }

      static update() {
         Time.updateTime
         SceneManager.currentScene.update()
       }

      static draw() {
         const backgroundColor = [255, 192, 203]
         Engine.ctx.fillStyle = SceneManager.currentScene.getObject(Camera).getComp(CameraController).backgroundColor
         console.log(`current background color: ${Engine.ctx.fillStyle}`)
         Engine.ctx.beginPath()
         Engine.ctx.rect(0, 0, Engine.canvas.width, Engine.canvas.height)
         Engine.ctx.fill()
         SceneManager.currentScene.draw()
       }
   }
