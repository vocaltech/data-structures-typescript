export class Location {
    private lt: number; // latitude
    private lg: number; // longitude
    private ts: Date; // timestamp

    constructor(lt: number, lg: number, ts: Date) {
        this.lt = lt;
        this.lg = lg;
        this.ts = ts;
    }

    // getters
    get latitude() {
        return this.lt;
    }

    get longitude() {
        return this.lg;
    }

    get timestamp() {
        return this.ts;
    }
}