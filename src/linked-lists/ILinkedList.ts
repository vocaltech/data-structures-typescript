export interface ILinkedList<T> {
    insertFirst: (item: T) => void;
    insertLast: (item: T) => void;
    removeFirst: () => T | null;
    remove: (searchKey: T) => T | null;
    contains: (searchItem: T) => boolean;
    isEmpty: () => boolean;
    getFirst: () => T | null;
    getLast: () => T | null;
}