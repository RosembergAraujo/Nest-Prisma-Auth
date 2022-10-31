"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUserFromJwt = void 0;
const common_1 = require("@nestjs/common");
exports.CurrentUserFromJwt = (0, common_1.createParamDecorator)((data, context) => {
    const request = context.switchToHttp().getRequest();
    return request.user;
});
//# sourceMappingURL=current-user.decorator.js.map