//Initialize all listeners
let mainForm = document.querySelector('#typeForm');
mainForm.addEventListener('submit', function(event){
  e.preventDefault();
})
let nextBtn = document.querySelectorAll('.next .nextbtn')

let submitBtn = document.querySelector('.submit-btn')
complete = 0;
partial = 0;
var completed = "0%";
var arraysOfCheckBoxes = [1, 2, 6, 12];
var arraysOfSelects = [13, 14];
var arraysOfInputs = [3, 4, 5, 7, 8, 9, 10, 11];
var fieldLength = 14;
function queryHelper(no){
  let builder;
  no = parseInt(no);
  if(arraysOfCheckBoxes.indexOf(no) != -1){
    builder = `#section${no} .checkbox input`;
    return document.querySelectorAll(builder);
  }
  else if(arraysOfInputs.indexOf(no) != -1){
    builder = `#section${no} .inputboxx input`;
  }
  else if(arraysOfSelects.indexOf(no) != -1){
    builder = `#section${no} select`;
  }
//   console.log(builder)
  return document.querySelector(builder);
}

let secFourteen = document.querySelector("#section14 select")
let responses = {};
function arrayHelper(no, type){
    responses[no] = []
    query = queryHelper(no);
    
    switch (type) {
        case 1:
            Array.from(query).forEach(e => {
                if(e.checked)
                {
                    content = e.parentElement.querySelector('label').textContent
                    responses[no].push(content);
                    if(no == 2 || no == 12){
                        Array.from(query).forEach(inner =>{
                            if(inner != e){
                                inner.parentElement.classList.add("disabled");
                                inner.setAttribute("disabled", "disabled");
                        
                            }
                        })
                        
                    }
                    
                isTrue = true;
                }
                
            })
            if(!isTrue){
                Array.from(query).forEach(e => {
                    if(e.hasAttribute("disabled"))
                    {
                        e.parentElement.classList.remove("disabled");
                        e.removeAttribute("disabled");
                    }
                    
                })
            }
            break;
        case 2:
            if(query.value.length > 0){
                content = query.value;
                responses[no].push(content);
                isTrue = true
            }
            break;
        
        default:
        if(query.selectedIndex !== 0){
            content = query.selectedOptions[0].value;
            responses[no].push(content);
            isTrue = true;
        }
            break;
        }
    if(isTrue){
        complete += 1;
        isTrue = false;
        
        }
}

let completion = document.querySelector('.progress .progress-bar')

function displaySubmit(){
  //create an array to store numbers of specific fields;
  //loop through all fields and pass type accordingly
  
                        complete = 0;
                        isTrue = false;
                        responses = {};
                        for(m = 1; m <= fieldLength; m++){
                          if(arraysOfCheckBoxes.indexOf(m) != -1){
                            arrayHelper(m, 1)
                          }
                          else if(arraysOfInputs.indexOf(m) != -1){
                            arrayHelper(m, 2)
                          }
                          else if(arraysOfSelects.indexOf(m) != -1){
                            arrayHelper(m, 3)
                          }
                        }
                        

                        switch (complete) {
                          case 0:
                              completed = "0%";
                              completion.style.width = "0%";
                              break;
                          case 1: 
                              completed = "7%"
                              completion.style.width = "7%"
                              submitBtn.classList.add('hide-next')
                              submitBtn.classList.remove('show-next')
                              
                            break;
                        
                            case 2: 
                              completed = "14%"
                              completion.style.width= "14%"
                              submitBtn.classList.add('hide-next')
                              submitBtn.classList.remove('show-next')
                            break;

                            case 3: 
                              completed = "21%"
                              completion.style.width= "21%"
                              submitBtn.classList.add('hide-next')
                              submitBtn.classList.remove('show-next')
                            break;

                            case 4: 
                              completed = "28%"
                              completion.style.width= "28%"
                              submitBtn.classList.add('hide-next')
                              submitBtn.classList.remove('show-next')
                            break;

                            case 5: 
                              completed = "35%"
                              completion.style.width= "35%"
                              submitBtn.classList.add('hide-next')
                              submitBtn.classList.remove('show-next')
                            break;

                            case 6: 
                              completed = "42%"
                              completion.style.width= "42%"
                              submitBtn.classList.add('hide-next')
                              submitBtn.classList.remove('show-next')
                            break;

                            case 7: 
                              completed = "49%"
                              completion.style.width= "49%"
                              submitBtn.classList.add('hide-next')
                              submitBtn.classList.remove('show-next')
                            break;

                            case 8: 
                              completed = "56%"
                              completion.style.width= "56%"
                              submitBtn.classList.add('hide-next')
                              submitBtn.classList.remove('show-next')
                            break;

                            case 9: 
                              completed = "63%"
                              completion.style.width= "63%"
                              submitBtn.classList.add('hide-next')
                              submitBtn.classList.remove('show-next')
                            break;

                            case 10: 
                              completed = "70%"
                              completion.style.width= "70%"
                              submitBtn.classList.add('hide-next')
                              submitBtn.classList.remove('show-next')
                            break;

                            case 11: 
                              completed = "77%"
                              completion.style.width= "77%"
                              submitBtn.classList.add('hide-next')
                              submitBtn.classList.remove('show-next')
                            break;

                            case 12: 
                              completed = "84%"
                              completion.style.width= "84%"
                              submitBtn.classList.add('hide-next')
                              submitBtn.classList.remove('show-next')
                            break;

                            case 13: 
                              completed = "91%"
                              completion.style.width= "91%"
                              submitBtn.classList.add('hide-next')
                              submitBtn.classList.remove('show-next')
                            break;

                            case 14: 
                              completed = "100%"
                              completion.style.width= "100%"
                              submitBtn.classList.add('show-next')
                              submitBtn.classList.remove('hide-next')
                            break;
                          default:
                            completed = ""
                            break;
                        }
                        
                        
                        //Done checking
                        if(complete === 14)
                        {
                          return true;
                        }
                       
                        return false;
                      
                        
  }
  displaySubmit()

function checkListener(sectionNumber){

  sectionID = queryHelper(sectionNumber);
  let btnID = nextBtn[sectionNumber - 1];
    //   console.log(btnID)
      let checked = false;
      //let content = element.parentElement.querySelector('#section'+sectionNumber + ' .checkbox label').textContent
      //element.value = content;
      Array.from(sectionID).forEach(e => {
        // console.log(e)
        if(e.checked)
        {
        //   console.log("I was checked")
          checked = true;
          
        }
        
      });
      if(checked)
      {
        btnID.classList.add('show-next')
        btnID.classList.remove('hide-next')
      }
      else{
        btnID.classList.add('hide-next')
        btnID.classList.remove('show-next')
      }
      displaySubmit()
      completion.textContent = completed;
}
function inputListerner(sectionNumber){
  sectionID = queryHelper(sectionNumber);
  let btnID = nextBtn[sectionNumber - 1];
    let keypress = false;
    let content = sectionID.value
    if(sectionID.value.length > 0)
    {
      keypress = true;
    }
    else{
      keypress = false;
    }
      
    if(keypress){
      btnID.classList.add('show-next')
      btnID.classList.remove('hide-next')
    }
    else{
      btnID.classList.add('hide-next')
      btnID.classList.remove('show-next')
    }
    displaySubmit()
                      
completion.textContent = completed;
}
function checkbox(sectionNumber){
    sectionID = queryHelper(sectionNumber);
    // console.log(sectionID)
    Array.from(sectionID).forEach(element => {
        // console.log(element)
        element.setAttribute('onclick', `checkListener(${sectionNumber})`)
        
    }); 



  }  
 

function inputfield(sectionNumber){
  sectionID = queryHelper(sectionNumber);
//   console.log(sectionNumber)
  sectionID.setAttribute("onkeyup", `inputListerner(${sectionNumber})`);
  
}
checkbox(1);  
checkbox(2);
inputfield(3)
inputfield(4);
inputfield(5);
checkbox(6);
inputfield(7);
inputfield(8);
inputfield(9);
inputfield(10);
inputfield(11);
checkbox(12);
optionSelect(13);



function selectListener(sectionNumber){
  let btnID = nextBtn[sectionNumber -1];  
  sectionID = queryHelper(sectionNumber);
    let selected = false;
    if(sectionID.value != 0){
      selected = true;
    }

    else{
      selected = false;
    }
    if(selected){
        btnID.classList.add('show-next')
        btnID.classList.remove('hide-next')
        // console.log(this.value)
      }
      else{
        btnID.classList.add('hide-next')
        btnID.classList.remove('show-next')
      }
      displaySubmit()
      completion.textContent = completed;
}
function optionSelect(sectionNumber){
  sectionID = queryHelper(sectionNumber);
  sectionID.setAttribute("onchange", `selectListener(${sectionNumber})`)
  
}





secFourteen.addEventListener('change', function(e){
  let selected = false;
  if(this.value != null){
    selected = true;
  }
  
    displaySubmit()
    completion.textContent = completed;                   
})

