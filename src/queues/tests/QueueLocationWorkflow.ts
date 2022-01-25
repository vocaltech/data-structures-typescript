import { Queue } from "../Queue";
import { Location } from '../../common/models/Location'

let queueLocation = new Queue<Location>();

const displayPeekAndQueue = (queue: Queue<Location>) => {
    let p = queue.peek();
    console.log(`peek: ` + JSON.stringify(p, null, 2));
    
    console.log(queue);
    console.log("\n")
}

const pause = (ms: number): Promise<void> => {
    return new Promise( (resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

const workkflow = async () => {
    let location: Location = new Location(45.3, 1.5, new Date());
    queueLocation.enqueue(location);
    displayPeekAndQueue(queueLocation)

    await pause(2000);

    location = new Location(48.1, 1.8, new Date());
    queueLocation.enqueue(location);
    displayPeekAndQueue(queueLocation);

    await pause(2000);

    location = new Location(48.4, 1.9, new Date());
    queueLocation.enqueue(location);
    displayPeekAndQueue(queueLocation);

    await pause(2000);

    queueLocation.dequeue();
    console.log(`------- after dequeue --------\n`);
    displayPeekAndQueue(queueLocation);

}

workkflow();


