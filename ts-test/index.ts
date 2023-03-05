const useData = {
    isBirthday:  true,
    age: 41,
    userName:  'Bob',
    status: 'Active',
    messages: {
        error: 'Error'
    }
}

const throwError = (message: string): never => {
    throw new Error(message)
}

const logUserBirthday = ({isBirthday, userName, age, messages: {error}}: {
    isBirthday: boolean;
    age: number;
    userName: string;
    messages: {
        error: string
    }
}): string => {
    if(isBirthday) {
        return `${userName} - ${age + 1}`
    } else {
         return throwError(error)
    }
}

// logUserBirthday(useData)
// Array<string> === string[]
const itDepartments: string[] = ['dev', 'qa', 'pm']

//number[][]
// const matrix: Array<number[]> = [[1, 2, 3], [4, 5, 6]]

itDepartments.filter(d => d === 'dev').map(d => `${d} - the best`)

const userDateTuple: [boolean, number, string] = [true, 42, 'Bob']

// const message: string[] | number[] = ['s', 't']
//
// const printMsg = (msg: number | string[] | boolean): void => {
//     if (Array.isArray(msg)) {
//         msg.map(m => console.log(m))
//     }
//     if( typeof msg === "number") {
//         console.log(msg.toExponential())
//     }
//     // console.log(msg.toUpperCase())
// }
//
// const printSomething = (a: string[] | string) => {
//     console.log(a.slice(0,3))
// }

// const checkObj = (obj: {systemError: number} | {useName: string, userAge: number}): void => {
//     if('system' in obj) {
//         throw new Error()
//     } else {
//         console.log(obj)
//     }
// }
//
// const logData = (x: string | Date) => {
//     if(x instanceof Date) {
//         console.log(x.toISOString())
//     } else {
//         console.log(x)
//     }
// }

// const testName: 'Name' = 'Name'
type TimingFunc = 'first' | 'second' | 'third'

const createAnimation = (
    id: string | number,
    name: string,
    timingFunc: TimingFunc = 'first',
    iterCount: 'infinite' | number
): void => {
    console.log('Hello')
}


const userResponse  ={
    Yes: 'Yes',
    No: 'No'
} as const

export type TYPE_YES_NO = (typeof userResponse)[keyof typeof userResponse];

enum UserResponse {
    Yes = 'Yes',
    No = 'No'
}
