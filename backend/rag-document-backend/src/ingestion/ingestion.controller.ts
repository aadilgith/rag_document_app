import { Controller, Post, Body } from '@nestjs/common';
import axios from 'axios';

@Controller('ingestion')
export class IngestionController {
  @Post('trigger')
  async triggerIngestion(@Body() { docId }: { docId: string }) {
    await axios.post('http://localhost:8001/ingest/', { docId });
    return { message: 'Ingestion triggered' };
  }
}
