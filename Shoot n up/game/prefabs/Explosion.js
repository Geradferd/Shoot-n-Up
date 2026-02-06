class Explosion extends GameObject {
    constructor() {
        super()
        this.layer = 4
        let particles = new ParticleSystem()
        particles.color = [255, 165, 0]
        particles.particleLifespan = 0.5
        particles.radiusOuter = 5
        particles.amount = 15
        particles.timer = 0.5
        this.addComp(particles)
        let extraParticles = new ParticleSystem()
        extraParticles.color = [255, 0, 0]
        extraParticles.particleLifespan = 0.5
        extraParticles.radiusOuter = 2
        extraParticles.amount = 10
        particles.timer = 0.5
        this.addComp(extraParticles)
    }
}