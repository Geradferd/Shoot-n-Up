class GunController extends Component{
    start() {
        this.timer = 0
        this.reloadTime = 2
        this.parent = this.gameObject.scene.getObject(Player)
    }
    
    update() {
        this.timer += Time.deltaTime

        if(Input.mousePos){
        this.gameObject.transform.rotation = angle(this.gameObject.transform.position, Input.mousePos)
        }

        this.gameObject.transform.position = this.parent.transform.position

        if (this.timer >= this.reloadTime) {
            if (Input.keysDown.includes("Space")) {
                this.timer = 0
                this.gameObject.scene.instantiate(new Bullet("Bullet"))
            }
        }
    }
}