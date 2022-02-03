export interface IStack<T> {
    push: (item: T) => number;
    pop: () => T;
    top: () => T;
    size: () => number;
    capacity: () => number;
    isEmpty: () => boolean;
    isFull: () => boolean;
}