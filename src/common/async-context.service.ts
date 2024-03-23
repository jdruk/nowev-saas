import { Injectable } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';

export const asyncLocalStorage = new AsyncLocalStorage();

@Injectable()
export class AsyncContextService {
  static instance: AsyncContextService;

  constructor() {}

  static getInstance(): AsyncContextService {
    if (!AsyncContextService.instance) {
        AsyncContextService.instance = new AsyncContextService();
    }
    return AsyncContextService.instance;
  }

  setSaasId(saasId: string) {
    const store = asyncLocalStorage.getStore() as { saasId?: string };
    if (store) {
        store.saasId = saasId;
    }
  }

  getSaasId(): string | undefined {
    const store = asyncLocalStorage.getStore() as { saasId?: string };
    return store ? store.saasId : undefined;
  }
}