import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SessionI} from '../../shared/event.model';
import {restrictedWords} from '../../shared/restricted-words.validator';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  @Output() saveNewSession: EventEmitter<SessionI> = new EventEmitter() ;
  @Output() cancelAddSession: EventEmitter<any> = new EventEmitter();
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;


  constructor() { }

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('',
      [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar', 'fuck'])]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }



  cancel() {
    this.cancelAddSession.emit();
  }

  saveSession(formValue ) {
    const session: SessionI = {
      id: undefined,
      name: formValue.name,
      duration: +formValue.duration,
      presenter: formValue.presenter,
      level: formValue.level,
      abstract: formValue.abstact,
      voters: []
    };
    this.saveNewSession.emit(session);
  }

}
