import { Injectable, NestMiddleware } from "@nestjs/common";
import { ContextIdFactory, ModuleRef } from "@nestjs/core";
import { TenancyMiddleware } from "./tenancy.middleware";
import { Request, Response } from 'express';


@Injectable()
export class ContextIdMiddleware implements NestMiddleware {
  constructor(private readonly moduleRef: ModuleRef) {}

  use(req: Request, res: Response, next: () => void) {
    const strategy = new TenancyMiddleware();
    const contextId = ContextIdFactory.create();
    const hostComponentInfo = { isTreeDurable: false, token: req.headers.authorization };
    
    const attachedContextId = strategy.attach(contextId, req)(hostComponentInfo);
    this.moduleRef.registerRequestByContextId(req, attachedContextId);
    
    next();
  }
}