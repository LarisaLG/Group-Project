app.service('dayService', function($http){
	this.getPhoto = function(callGood, callBad, sevenOrFourteen){
		//var url = 'https://api.nasa.gov/planetary/apod?api_key=T0pL0WqhD22V2rBQamplFq1RJYjqVVCrv8OrDgyg';
	
	/////////////////////////////

var url1 = 'https://api.nasa.gov/planetary/apod?date=';
var url3 = '&api_key=T0pL0WqhD22V2rBQamplFq1RJYjqVVCrv8OrDgyg';
var day = 86400000;
var today = new Date().getTime();
var todayMil = new Date(today);
var y;
var m;
var d;
var url;
///
var dayToMs;
var array = [];
var outputUrl;
var outputUrlArray = [];
////////////////////////
// if(sevenORfourteen===1){
// outputUrl = 'https://api.nasa.gov/planetary/apod?api_key=T0pL0WqhD22V2rBQamplFq1RJYjqVVCrv8OrDgyg';
// outputUrlArray.push(outputUrl);	
// } else{
getFormat(sevenOrFourteen);


function DaysInMS(sevenORfourteen){

  for(i=0;i<sevenORfourteen;i++){
  // var pushToday = new Date(today);
  // array.push(pushToday);
  //if(sevenORfourteen>1){
   dayToMs = new Date(today - day);
   array.push(dayToMs);
    day += 86400000;
   }
 // }
}

function getFormat(sevenORfourteen){
  DaysInMS(sevenORfourteen);
  for(i in array){
    dateTo = array[i];
    y=dateTo.getFullYear();
m=dateTo.getMonth() +1;
d=dateTo.getDate();
url = y + '-' + m + '-' + d;
outputUrl = url1 + url + url3;
outputUrlArray.push(outputUrl);

  }
//to check
for(j in outputUrlArray){
  console.log(outputUrlArray[j])
}
//
}
//this.callGetFormat = function(no){
//getFormat(7);
//}

//}//end of else if sevenOrfourteen===1

	/////////////////////////////	
	for(i in outputUrlArray){
		$http.get(outputUrlArray[i]).then(funGood, funBad);
		function funGood(response){
			callGood(response);
		};
		function funBad(response){
			callBad(response.status, response.statusText);
		}
	}
	};

	










	
});