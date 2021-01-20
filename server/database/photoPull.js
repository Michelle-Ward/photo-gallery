const imageFormats = ['.jpg', '.jpeg', '.png', '.tif', 'tiff'];

var allImgs = document.images || document.getElementsByTagName('img');
var images = [].slice.call(allImgs);

var getPhotos = () => {
  images.forEach((image, i) => {
    let suffix = image.src.slice(image.src.length -4);
    if (imageFormats.includes(suffix)) {
      let a = document.createElement("a"); //Create <a>
      a.href = image.src; //Image Base64 Goes here
      a.download = `image${i}${suffix}`; //File name Here
      a.click(); //Downloaded file
    }
  });
};

getPhotos();
