export class Node<T> {
    private next: Node<T> | null;
    private item: T | null;

    constructor(item: T | null = null) {
        this.item = item;
        this.next = null;
    }
}