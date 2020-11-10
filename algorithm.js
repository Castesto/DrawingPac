function drawLine(x1, y1, x2, y2, id, context) {
    var currentX, currentY, errorX, errorY, d, dx, dy, incX, incY;
    dx = x2 - x1;
    dy = y2 - y1;
    errorX = 0;
    errorY = 0;
    if (dx > 0)
        incX = 1;
    else if (dx == 0)
        incX = 0;
    else
        incX = -1;
    if (dy > 0)
        incY = 1;
    else if (dy == 0)
        incY = 0;
    else
        incY = -1;
    dx = Math.abs(dx);
    dy = Math.abs(dy);
    if (dy > dx)
        d = dy;
    else
        d = dx;
    currentX = x1;
    currentY = y1;
    context.putImageData(id, currentX, currentY);
    while ((currentX != x2) || (currentY != y2)) {
        errorX = errorX + dx;
        errorY = errorY + dy;
        if (errorX >= d) {
            errorX = errorX - d;
            currentX = currentX + incX;
        }
        if (errorY >= d) {
            errorY = errorY - d;
            currentY = currentY + incY;
        }
        context.putImageData(id, currentX, currentY);
    }
}
;
function drawCir(X1, Y1, R, id, context) {
    var x = 0;
    var y = R;
    var delta = 1 - 2 * R;
    var error = 0;
    while (y >= 0) {
        context.putImageData(id, X1 + x, Y1 + y);
        context.putImageData(id, X1 + x, Y1 - y);
        context.putImageData(id, X1 - x, Y1 + y);
        context.putImageData(id, X1 - x, Y1 - y);
        error = 2 * (delta + y) - 1;
        if ((delta < 0) && (error <= 0)) {
            delta += 2 * ++x + 1;
            continue;
        }
        if ((delta > 0) && (error > 0)) {
            delta -= 2 * --y + 1;
            continue;
        }
        delta += 2 * (++x - y--);
    }
}
;
function Pixel4(xc, yc, x, y, id, context) {
    context.putImageData(id, xc + x, yc + y);
    context.putImageData(id, xc + x, yc - y);
    // context.putImageData(id,xc - x, yc + y);    
    // context.putImageData(id,xc - x, yc - y);
}
;
function ellipse(x, y, a, b, id, context) {
    var xc = 0, yc = b, sqrA = a * a, sqrB = b * b, delta = 4 * sqrB * ((xc + 1) * (xc + 1)) + sqrA * ((2 * yc - 1) * (2 * yc - 1)) - 4 * sqrA * sqrB;
    while (sqrA * (2 * yc - 1) > 2 * sqrB * (xc + 1)) {
        Pixel4(x, y, xc, yc, id, context);
        if (delta < 0) {
            xc++;
            delta += 4 * sqrB * (2 * xc + 3);
        }
        else {
            xc++;
            delta = delta - 8 * sqrA * (yc - 1) + 4 * sqrB * (2 * xc + 3);
            yc--;
        }
    }
    delta = sqrB * ((2 * xc + 1) * (2 * xc + 1)) + 4 * sqrA * ((yc + 1) * (yc + 1)) - 4 * sqrA * sqrB;
    while (yc + 1 != 0) {
        Pixel4(x, y, xc, yc, id, context);
        if (delta < 0) {
            yc--;
            delta += 4 * sqrA * (2 * yc + 3);
        }
        else {
            yc--;
            delta = delta - 8 * sqrB * (xc + 1) + 4 * sqrA * (2 * yc + 3);
            xc++;
        }
    }
}
;
function DrawF(x, y, hx, hy, id, context) {
    drawLine(x, y, x + Math.round(hy / 4), y - Math.round(hy / 2), id, context);
    drawLine(x, y, x + Math.round(hy / 4), y + Math.round(hy / 2), id, context);
    drawLine(x + Math.round(hy / 4), y - Math.round(hy / 2), x + Math.round(hy / 4) + hx, y - Math.round(hy / 2), id, context);
    drawLine(x + Math.round(hy / 4), y + Math.round(hy / 2), x + Math.round(hy / 4) + hx, y + Math.round(hy / 2), id, context);
    ellipse(x + Math.round(hy / 4) + hx, y, Math.round(hy / 4), Math.round(hy / 2), id, context);
}
