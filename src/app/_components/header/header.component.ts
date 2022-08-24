import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  @Input() showBackButton: boolean = false;
  @Input() currentTitle: string = 'UTP';
  @Input() showHistoryNav: boolean = false;

  ngOnInit() {}
}
