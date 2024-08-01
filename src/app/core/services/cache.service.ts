import { Injectable } from '@angular/core';

@Injectable()
export class CacheService {
  private cache: Map<string, any> = new Map<string, any>();

  constructor() { }

  public has(key: string): boolean {
    return this.cache.has(key);
  }

  public set(key: string, value: any): void {
    this.cache.set(key, value);
  }

  public get(key: string): any {
    return this.cache.get(key);
  }
}
