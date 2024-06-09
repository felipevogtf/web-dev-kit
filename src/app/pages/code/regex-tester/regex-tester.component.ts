import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '@components/input/input.component';
import { QueryParamsService } from '@services/query-params.service';
import { Subject, debounceTime } from 'rxjs';
import { IconButtonComponent } from '@components/icon-button/icon-button.component';

@Component({
  selector: 'app-regex-tester',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    IconButtonComponent
  ],
  templateUrl: './regex-tester.component.html',
  styleUrl: './regex-tester.component.scss',
})
export class RegexTesterComponent {
  private regexTestsEvent: Subject<Array<FormControl>> = new Subject<
    Array<FormControl>
  >();
  private launchTests: Subject<boolean> = new Subject<boolean>();
  private updateParams: Subject<boolean> = new Subject<boolean>();

  regex = new FormControl('');
  regexTests: Array<FormControl> = [];

  constructor(private queryParamsService: QueryParamsService) {
    this.regex.valueChanges.subscribe((value) => {
      console.log(value);
    });

    this.regexTestsEvent.pipe().subscribe((value) => {
      console.log(value);
    });

    this.updateParams.pipe(debounceTime(500)).subscribe((value) => {
      this.updateQueryParam();
    });

    this.launchTests.pipe(debounceTime(500)).subscribe((value) => {
      if (this.regex.value) {
        const regex = new RegExp(this.regex.value);
        this.updateValidators(regex);
      }
    });
  }

  ngOnInit() {
    this.queryParamsService.getQueryParams('regex').subscribe((param) => {
      if (param) {
        this.regex.setValue(param);
      }

      this.launchTests.next(true);
    });

    this.queryParamsService.getQueryParams('tests').subscribe((param) => {
      if (param) {
        const arr: Array<string> = JSON.parse(param);

        arr.forEach((value) => {
          this.regexTests.push(new FormControl(value));
        });

        this.launchTests.next(true);
      }
    });
  }

  updateQueryParam(): void {
    if (this.regex.value) {
      this.queryParamsService.setQueryParam('regex', this.regex.value);
    }

    const tests = this.regexTests.map((item) => item.value);
    this.queryParamsService.setQueryParam('tests', JSON.stringify(tests));
  }

  setRegex() {
    this.updateParams.next(true);
    this.launchTests.next(true);
  }

  setTests() {
    this.updateParams.next(true);
  }

  addTest(value: string = ''): void {
    this.regexTests.push(new FormControl(''));
    this.regexTestsEvent.next(this.regexTests);
    this.updateParams.next(true);
  }

  removeTest(index: number) {
    this.regexTests.splice(index, 1);
    this.regexTestsEvent.next(this.regexTests);
    this.updateParams.next(true);
  }

  test() {
    if (this.regex.value) {
      const regex = new RegExp(this.regex.value);
      this.updateValidators(regex);
    }
  }

  getIcon(control: FormControl): string {
    if (!control.value) {
      return 'fa-solid fa-close';
    }

    if (control.valid) {
      return 'fa-solid fa-check';
    } else {
      return 'fa-solid fa-close';
    }
  }

  updateValidators(pattern: RegExp): void {
    this.regexTests.forEach((control) => {
      control.setValidators(Validators.pattern(pattern));
      control.updateValueAndValidity();
      console.log(control);
    });
  }
}
