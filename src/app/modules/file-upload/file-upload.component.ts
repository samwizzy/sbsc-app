import { HttpEventType } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, inject, Optional, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { FileUploadService } from 'src/app/core/services/file-upload.service';
import { GoogleDrivePickerService } from 'src/app/core/services/google-drive-picker.service';
import { GoogleDriveService } from 'src/app/core/services/google-drive.service';
import { GooglePickerService } from 'src/app/core/services/google-picker.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements AfterViewInit {
  /**
   * options:flags
   * optional: true,
   * skipSelf: true,
   * self: true,
   * host: true
   * */
  uploadService = inject(FileUploadService, { optional: true });
  // googleDriveService = inject(GoogleDriveService);
  googlePickerService = inject(GooglePickerService);
  // googleDrivePickerService = inject(GoogleDrivePickerService);

  // constructor(@Optional() private uploadService: FileUploadService) {}

  @ViewChild('fileUpload') fileUpload!: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    this.uploadFromDrive();
    // fromEvent(this.fileUpload.nativeElement, 'change').subscribe((event) => {
    //   const file = (event.target as HTMLInputElement)?.files?.[0];

    //   if (file) {
    //     this.convertToBase64(file).subscribe((base64Str) => {
    //       this.uploadService?.uploadFile(base64Str as string).subscribe((event) => {
    //         switch (event.type) {
    //           case HttpEventType.UploadProgress:
    //             console.log('Uploaded ' + event.loaded + ' out of ' + event.total + ' bytes');
    //             break;
    //           case HttpEventType.Response:
    //             console.log('Finished uploading!');
    //             break;
    //         }
    //       });
    //     });
    //   }
    // });
  }

  // Trigger Google Picker via the service
  openPicker() {
    this.googlePickerService.openPicker();
    // this.googleDrivePickerService.onPickerApiLoad();
  }

  convertToBase64(file: File) {
    return new Observable((observer) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        observer.next(reader.result);
        observer.complete();
      };

      reader.readAsDataURL(file);
    });
  }

  signIn() {
    // this.googleDriveService.signIn().then(() => {
    //   console.log('waiting...');
    //   this.googleDriveService.listFiles();
    // });
  }

  uploadFromDrive() {
    fromEvent(this.fileUpload.nativeElement, 'change').subscribe((event) => {
      console.log(event.target);
      const file = (event.target as HTMLInputElement)?.files?.[0];

      if (file) {
        // this.googleDriveService.uploadFile(file);
      }
    });
  }
}
