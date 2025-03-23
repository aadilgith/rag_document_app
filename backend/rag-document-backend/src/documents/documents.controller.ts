import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('documents')
export class DocumentsController {
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadDocument(@UploadedFile() file: Express.Multer.File) {
    console.log(`Received document: ${file.originalname}`);
    await new Promise((resolve) => setTimeout(resolve, 100)); // Simulate async operation
    return { message: 'Document uploaded successfully' };
  }
}
