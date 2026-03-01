import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  TypeOrmHealthIndicator,
  MemoryHealthIndicator,
} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private db: TypeOrmHealthIndicator, // Checks DB connection
    private memory: MemoryHealthIndicator, // Checks app memory usage
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      // database reachable?
      () => this.db.pingCheck('database'),
      // too much ram? ts expensive
      () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024),
    ]);
  }
}
