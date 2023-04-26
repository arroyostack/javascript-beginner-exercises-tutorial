function getColor(selection)
{

	switch(selection){
		case "red": return true;
		break;
		case "green": return true;
		break;
		case "blue": return true;
		break;
	    default:
	    	return false;  
	    break;               
	}
}

let colorname = prompt('What color do you want?').trim().toLowerCase();
let isAvailable = getColor(colorname);

isAvailable ? 
    console.log('Good news! That color is available'):
	console.log('We are sorry, that color is not available');
