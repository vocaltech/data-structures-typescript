export class Node<T> {
    private _next: Node<T> | null;
    private _item: T | null;

    constructor(item: T | null = null) {
        this._item = item;
        this._next = null;
    }

    get next(): Node<T> | null {
        return this._next;
    }

    set next(node: Node<T> | null) {
        this._next = node;
    }

    get item() {
        return this._item
    }
}
