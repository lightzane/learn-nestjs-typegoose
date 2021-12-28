import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class MyCustomPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (value == 2) return 'I hate number 2';
    else if (value == 3) return 'I hate you';
    else return value;
  }
}
