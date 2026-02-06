class Particle {
    pos = new Vector2(0, 0)
    lifespan = 1
    force = 1
    speed = 1
}

class ParticleSystem extends Component {
    particleLifespan = 1
    particleSpeed = 1
    radiusInner = 0
    radiusOuter = 75
    diameter = 10
    timer = 2
    amount = 15
    color = [255, 255, 255]
    fade = true
    particles = []

    start() {
        this.interval = this.timer/this.amount
    }
    update() {
        this.interval -= Time.deltaTime
        this.timer -= Time.deltaTime
        if (this.interval <= 0 && this.timer > 0) {
            this.interval = this.timer/this.amount
            let particle = new Particle()
            particle.pos = this.gameObject.transform.position.copy()
            let vectorForce = randomVector(-this.radiusOuter, this.radiusOuter, -this.radiusOuter, this.radiusOuter)
            particle.pos.add(vectorForce)
            particle.force = new Vector2(vectorForce.x / vectorForce.magnitude, vectorForce.y / vectorForce.magnitude)
            particle.force.scale(particle.speed)
            this.particles.push(particle)
        }
        for(let particle of this.particles) {
            particle.pos.add(particle.force)
            particle.lifespan -= Time.deltaTime
        }
        this.particles = this.particles.filter(p => (p.lifespan >= 0))

        if (this.timer <= 0 && this.particles <= 0) {
        this.gameObject.delete = 1
        }
    }
    draw() {

        let alpha = 1

        for (const particle of this.particles) {
            if (this.fade) {
                alpha = particle.lifespan/this.particleLifespan
            }
            Engine.ctx.fillStyle = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${alpha})`
            Engine.ctx.beginPath()
            Engine.ctx.arc(particle.pos.x, particle.pos.y, this.diameter/2, 0, 360, true)
            Engine.ctx.fill()
        }
    }
}
