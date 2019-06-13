"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
const grpc_client_options_1 = require("../grpc-client.options");
let HeroController = class HeroController {
    onModuleInit() {
        this.heroService = this.client.getService('HeroService');
    }
    execute() {
        return this.heroService.findOne({ id: 1 });
    }
    findOne(data) {
        const items = [{ id: 1, name: 'John' }, { id: 2, name: 'Doe' }];
        return items.find(({ id }) => id === data.id);
    }
};
__decorate([
    microservices_1.Client(grpc_client_options_1.grpcClientOptions),
    __metadata("design:type", Object)
], HeroController.prototype, "client", void 0);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], HeroController.prototype, "execute", null);
__decorate([
    microservices_1.GrpcMethod('HeroService'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], HeroController.prototype, "findOne", null);
HeroController = __decorate([
    common_1.Controller()
], HeroController);
exports.HeroController = HeroController;
//# sourceMappingURL=hero.controller.js.map