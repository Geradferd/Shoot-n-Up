class Time{
    static deltaTime = performance.now()
    static lastTime = Time.time

    static get updateTime() {
        Time.deltaTime = (Time.time - Time.lastTime)
        Time.lastTime = Time.time
        print(`deltaTime : ${Time.deltaTime}`)
    }

    static get time() {
        return performance.now() / 1000
    }
}