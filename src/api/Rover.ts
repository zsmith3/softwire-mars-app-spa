import Camera from "./Camera";

export default class Rover {
    id: number;
    name: string;
    max_sol: number;
    cameras: Camera[];

    constructor (rover: Rover) {
        this.id = rover.id;
        this.name = rover.name;
        this.max_sol = rover.max_sol;
        this.cameras = rover.cameras.map(camera => new Camera(camera));
    }
}
