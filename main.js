
var canvas = new fabric.Canvas("myCanvas");

function new_image()

{
    fabric.Image.fromURL('HAPPYBDAY.jpeg', function (Image) {
        block_image_object = Img;
        
        block_img_object.scaleToWidth(700);
        block_img_object.scaleToHeight(510);
        block_img_object.set({
            top: 0,
            left: 0
    });

    canvas.add(block_image_object);
});
}