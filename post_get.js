//function to get post and get request 

document.getElementById("seeMore").addEventListener('click', loadMore)

function loadMore() {
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        let testimonial_div = document.getElementById('testimonialSpace')
        let val = document.getElementsByClassName('testimonial');
        let count = val.length
      if (this.readyState == 4 && this.status == 200) {
        count = count + 2;  
        var addComment = document.createElement("div");
        addComment.setAttribute('class', 'testimonial')
        addComment.innerHTML += this.responseText;
        testimonial_div.appendChild(addComment)
      }
    };
    xhttp.open("GET", "databaseurls", true);
    xhttp.send();
  }


function postTestimonal(){
    var form = document.getElementById('contact');
    form.onsubmit = function() {
        let commentOption = document.getElementById("softflow")
        let comment = document.getElementById('comment');
        let commenterName = document.getElementById('commenterName')
        let commmenterEmail = document.getElementById("commenterEmail")
      var formData = new FormData(form);
    
      formData.append('reason', commentOption)
      formData.append('comment', comment)
      formData.append('commenterName', commenterName)
      formData.append('commenterEmail', commmenterEmail)
    
      var xhr = new XMLHttpRequest();
      // Add any event handlers here...
      xhr.open('POST', form.getAttribute('action'), true);
      xhr.send(formData);
    
      return false; // To avoid actual submission of the form
  }
}