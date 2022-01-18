export interface IStack<T> {
    size: () => number;
    push: (item: T) => number;
    pop: () => T;
    top: () => T;
    isEmpty: () => boolean;
    isFull: () => boolean;
}