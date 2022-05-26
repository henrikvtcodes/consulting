import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';

@Injectable()
export class FilesService {
  storage: Storage;

  constructor() {
    const storage = new Storage();

    const bucket = storage.bucket('hvtc-dashboard-1');
  }
}
