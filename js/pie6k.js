//Given by Pie6k on stackoverflow https://stackoverflow.com/questions/487073/how-to-check-if-element-is-visible-after-scrolling
jQuery.extend(jQuery.expr[':'], {  
  inview: function (elem) {
      var t = $(elem);
      var offset = t.offset();
      var win = $(window); 
      var winST = win.scrollTop();
      var elHeight = t.outerHeight(true);

      if ( offset.top > winST - elHeight && offset.top < winST + elHeight + win.height()) {
          return true;    
      }    
      return false;  
  }
});