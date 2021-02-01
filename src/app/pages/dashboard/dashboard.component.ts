import { Component, OnInit } from '@angular/core';
import { TuiDay } from '@taiga-ui/cdk';
import { TUI_DEFAULT_COLOR_HANDLER } from '@taiga-ui/addon-charts';
import { sum } from '@taiga-ui/cdk';
import { TUI_DEFAULT_STRINGIFY } from '@taiga-ui/cdk';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  value: any = [
    [50, 50],
    [100, 75],
    [150, 50],
    [200, 150],
    [250, 155],
    [300, 190],
    [350, 90],
  ];
  activeItemIndex: number = 0;
  value1: TuiDay | null = null;

  readonly value2 = [
    [3660, 8281, 1069, 9034, 5797, 6918, 8495, 3234, 6204, 1392, 2088, 8637, 8779],
    [3952, 3671, 3781, 5323, 3537, 4107, 2962, 3320, 8632, 4755, 9130, 1195, 3574],
  ];
  // Donut Chart
  readonly value3 = [40, 30, 20, 10, 30];
  readonly sum = sum(...this.value);
  readonly colorHandler = TUI_DEFAULT_COLOR_HANDLER;
  readonly labels = ['Food', 'Cafe', 'Open Source', 'Taxi', 'Other'];
  activeItemIndex1: number = 0;

  readonly value4 = [
    [3660, 8281, 1069, 9034, 5797, 6918, 8495,],
    [3952, 3671, 3781, 5323, 3537, 4107, 2962,],
  ];
  expanded = false;
  toggleSidemenu = false;

  readonly stringify = TUI_DEFAULT_STRINGIFY;

  constructor() { }

  ngOnInit(): void {
  }

  changeTab(n): void {

  }

  onDayClick(day: TuiDay) {
    this.value = day;
  }

  toggle() {
    this.expanded = !this.expanded;
    if (this.expanded) {
      document.getElementById("arrow").style.transform = "rotate(45deg)";
    }
    else {
      document.getElementById("arrow").style.transform = "rotate(-45deg)";
    }

  }
  isItemActive(index: number): boolean {
    return this.activeItemIndex1 === index;
  }

  onHover(index: number, hovered: boolean) {
    this.activeItemIndex1 = hovered ? index : null;
    console.log(index);
  }

  showMenu() {
    let b1 = document.getElementById('b1');
    let b2 = document.getElementById('b2');
    if (this.toggleSidemenu) {
      b1.style.width = "100%";
      b2.style.width = "75%";
      document.getElementById('smenu').style.left = "-100%";
    }
    else {
      b1.style.width = "60%";
      b2.style.width = "110%";
      document.getElementById('smenu').style.left = "0%";

    }
    this.toggleSidemenu = !this.toggleSidemenu;
  }

}
