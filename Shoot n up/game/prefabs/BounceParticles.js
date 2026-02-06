class BounceParticles extends GameObject {
    constructor() {
        super()
        let particles =new ParticleSystem()
        particles.particlesLifespan = 0.25
        particles.time = 0.5
        particles.amount = 5
        this.addComp(particles)
    }
}