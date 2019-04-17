let categories = {};


var retrieveCategories = function () {
    var xhr;    
    xhhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let timeStamp = new Date();
        timeStamp =  timeStamp.setDate(timeStamp.getDate() + 7); 
      }
    };
    xhr.responseType = "json"
    xhr.open("GET", "databaseurl", true);
    xhr.send();
}

  let data = retrieveCategories;

  function returnCategories(){

    if( (typeof(data) != null) && trackStamp >= timeStamp){
        let cats_serialized = JSON.stringify(data);
        localStorage.setItem("catsObject", cats_serialized)

        return catsOj
        
    }
    

   
    
  }