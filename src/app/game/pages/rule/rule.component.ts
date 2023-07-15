import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./rule.component.scss']
})
export class RuleComponent {
  constructor(private router: Router) {
  }
  redirectToGame() {
    this.router.navigate(['guesser/']).then();
  }

}
