# USA-Edutcation-Graph building by D3.js

This's a project that fellow the RXJS tutorial from:  
https://github.com/ecmadao/Coding-Guide/blob/master/Notes/RxJS/%E6%8E%A2%E7%B4%A2RxJS-%E5%81%9A%E4%B8%80%E4%B8%AAgithub%E5%B0%8F%E5%BA%94%E7%94%A8.md  
But the tutorial RXJS version 4 is too old  
So I re-make a RXJS application by using RXJS-7  

#### The Demo is at https://pang-lee.github.io/pang-lee.D3-USA_education_map.github.io/  
  
  The all page is inside index.html  
  In js/index.js we build a observable object which and use debounce to delay your input  
  And we subscribe this observable object and call the function  
  As the function we use new rxjs 7 feature 'ajax' to send http ajax  
  And we append the ajax data to the HTML DOM  by using javascript template literal  
  As the RXJS is more likely changing the Event stream to Data stream  
  Using Data stream is more advanced level usage in coding concept  
  And using Data stream concept is more clean in the coding.
