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
 
