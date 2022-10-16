"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: { origin: ['http://localhost:5173', 'http://localhost:3000'] } });
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(5000);
}
bootstrap();
//# sourceMappingURL=main.js.map