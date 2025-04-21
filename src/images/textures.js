import { TextureLoader } from "three";

import {
	dirtImg,
	grassImg,
	glassImg,
	woodImg,
	logImg,
} from "./images";

const dirtTexturre = new TextureLoader(dirtImg)
const logTexturre = new TextureLoader(dirtImg)
const grassTexturre = new TextureLoader(dirtImg)
const woodTexturre = new TextureLoader(dirtImg)
const groundTexturre = new TextureLoader(dirtImg)

export {
    dirtTexturre,
    logTexturre,
    grassTexturre,
    woodTexturre,
    groundTexturre
}