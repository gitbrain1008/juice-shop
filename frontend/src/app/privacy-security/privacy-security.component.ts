
import { Component } from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { type Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-privacy-security',
  templateUrl: './privacy-security.component.html',
  styleUrls: ['./privacy-security.component.scss']
})
export class PrivacySecurityComponent {
  Ip!: string
  windowWidth: number = window.innerWidth
  ngAfterViewInit () {
    this.windowWidth = window.innerWidth
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    )

  constructor (private readonly breakpointObserver: BreakpointObserver) {}
}
