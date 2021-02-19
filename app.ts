import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

// App Service
// =========================================

interface ICustomerName {
  first: string,
  last: string
}
interface ICustomerAddress {
  unit: string,
  streetName: string,
  province: string,
  postal: string
}
interface ISomeResponse {
  customerName: ICustomerName,
  age: number,
  customerAddress: ICustomerAddress
}
const sampleResponse = {
  customerName: {
    first: 'Johny',
    last: 'Bravo'
  },
  customerAddress: {
    unit: '8200',
    streetName: 'Dixie',
    province: 'Ontario',
    postal: 'L6T 4Y8'
  },
  age: 21
}

// 1.
// complete `functionOne`:
// fix the body of the function to return the correct type and value expected in the App Component below:

const functionOne = (a: ISomeResponse) : string => a.customerName.first + " " + a.customerName.last;


const functionTwo = (a: (x: ISomeResponse) => string) : string => a(sampleResponse);


// 2.
// complete `functionThree`:
// write the body of the function to return the correct value based on App Component expectation further below

function functionThree(b: string, a: number): Observable<string> {
  return of(b + ", " + a.toString());
}

// 3.
// complete `functionFour`:
// fix the body of the function to return an Observable containing '8200 Dixie, Ontario, L6T 4Y8' parsing from parsing the argument passed to `functionFour`

function functionFour(a: ISomeResponse): Observable<string> {
  return of(a.customerAddress.unit + ' ' + a.customerAddress.streetName + ', ' + a.customerAddress.province + ', ' + a.customerAddress.postal);
}

// 4.
// complete the `functionFive`:
// fix the body of the function to return an observable containing 'Johny Bravo, 21'

const functionFive = (a: ISomeResponse) : Observable<string> => functionThree;

// 5.
// complete `functionSix`:
// using `functionFour` and `functionFive`, fix the function body to return an observable containing 'Johny Bravo, 21, 8200 Dixie, Ontario, L6T 4Y8'

function functionSix(): Observable<string> {
  return of(functionThree + ', ' + functionFour);
}







// App Component
// ============================================

// 6.
// find whats missing below, base on methods from App Service above:

const customerName = functionTwo(functionOne); // => Johny Bravo
const customerNameAndAge$ = functionThree(customerName, sampleResponse.age); // => Johny Bravo, 21
const customerInfo$ = functionSix(); // => Johny Bravo, 21, 8200 Dixie, Ontario, L6T 4Y8
