import { TestBed } from '@angular/core/testing';

import { StudentsService } from './students.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { Student } from '../models/student.model';

describe('StudentsService', () => {
  let service: StudentsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      providers: [StudentsService],
      declarations: []
    });
    service = TestBed.inject(StudentsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get students', () => {
    const listStudents:Student[] = [
      {
        "id": 1,
        "first_name": "Noell",
        "last_name": "Rolse",
        "email": "nrolse0@lycos.com",
        "gender": "Female",
        "university": "University of Virginia",
        "dob": new Date("14/09/1996")
      }, {
        "id": 2,
        "first_name": "Spence",
        "last_name": "Tomaszek",
        "email": "stomaszek1@vimeo.com",
        "gender": "Male",
        "university": "Universidad Estatal de BolÃ­var",
        "dob": new Date("08/11/1997")
      }, {
        "id": 3,
        "first_name": "Adena",
        "last_name": "Stocky",
        "email": "astocky2@chron.com",
        "gender": "Female",
        "university": "University of Hargeisa",
        "dob": new Date("04/08/1997")
      }, {
        "id": 4,
        "first_name": "Amy",
        "last_name": "Petrou",
        "email": "apetrou3@google.de",
        "gender": "Non-binary",
        "university": "Academy of Economics \"Dimitur A. Tscenov\"",
        "dob": new Date("18/11/1997")
      }
    ]
  
   service.getStudents().subscribe((students) => {
      expect(students).toEqual(listStudents);
    });
    
    const testRequest = httpMock.expectOne('http://localhost:4200/assets/data.json');
    expect(testRequest.request.method).toEqual('GET');
    testRequest.flush(listStudents); 
  });

});
