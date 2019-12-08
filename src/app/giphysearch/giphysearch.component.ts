import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { GiphyService } from '../giphy.service';
@Component({
  selector: 'app-giphysearch',
  templateUrl: './giphysearch.component.html',
  styleUrls: ['./giphysearch.component.css']
})
export class GiphysearchComponent implements OnInit {
  title = 'Search';
  closeResult: string;
  giphies = [];
  searchkeys = [];
  constructor(private httpClient: HttpClient, private modalService: NgbModal, private GiphyService: GiphyService) {


  }
  


  searchimg(searchTerm: HTMLInputElement): void {
    this.searchkeys = this.GiphyService.storekewords(searchTerm);
    this.GiphyService.searchimg(searchTerm).subscribe((res: any) => {
      this.giphies = res.data;

    });


  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit() {
  }

}
