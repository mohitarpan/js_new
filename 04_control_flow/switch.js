// ---------------------------- Basic Syntax-------------------
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
const month = 4
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        // break; // if break is commented it does not match(execute) the remaing case except default value 
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("july");
        break;
    default:
        console.log("Default case match");
        break;
}
// break is used to break a control flow of switch and 


