import type { Readable, Writable } from "svelte/store";

type Store<T> = Readable<T> | Writable<T>;

interface Logger {
  (message: string, ...rest: any[]): void;
  store: <T>(name: string, store: Store<T>) => void;
}

declare function createLogger(name: string): Logger;
declare function createDomain(domain: string): (name: string) => Logger;
