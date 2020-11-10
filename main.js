    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");
    var id = context.createImageData(1, 1);
    
    var g = id.data;
    g[0] = 27;
    g[1] = 33;
    g[2] = 112;
    g[3] = 255;
    
    //sdf
    DrawF(50, 50, 60, 80, id, context);
    var Cord = [
        [45, 285],
        [45, 210],
        [150, 210],
        [150, 165],
        [90, 165],
        [195, 120],
        [300, 165],
        [240, 165],
        [240, 210],
        [345, 210],
        [345, 285],
        [45, 285]
    ];
    
