    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");
    var id = context.createImageData(1, 1);
    
    var g = id.data;
    g[0] = 27;
    g[1] = 33;
    g[2] = 112;
    g[3] = 255;
    
    
    ellipse(100, 100, 40, 40, id, context);
    
    drawLine(100, 100, 140, 100, id, context);
    
    drawLine(100, 100, 100, 60, id, context);
    
    startX = 100;
    startY = 100;
    
    
    (function myLoop(i) {
      setTimeout(function() {
        let x = Math.round(startX * Math.cos(i / 57.296) + startY * Math.sin(i / 57.296));
        
        let y = Math.round(startX * Math.sin(i / 57.296) + startY * Math.cos(i / 57.296));
        drawLine(20, 20, x, y, id, context);
        
        startX = x;
        startY = y;
        
        if (--i) myLoop(i); //  decrement i and call myLoop again if i > 0
      }, 360)
    })(100);
 
