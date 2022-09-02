import Particles from "react-tsparticles";
import {config} from "./particlesjs-config"

const ParticleRender = () => {
    return (
        <Particles
            id="tsparticles"
            options={config}
        />
    )
}

export default ParticleRender