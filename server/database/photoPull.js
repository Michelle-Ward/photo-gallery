const imageFormats = ['.jpg', '.jpeg', '.png', '.tif', 'tiff'];

const allImgs = document.images || document.getElementsByTagName('img');
const images = [].slice.call(allImgs);

const getPhotos = () => {
  images.forEach((image, i) => {
    const suffix = image.src.slice(image.src.length - 4);
    if (imageFormats.includes(suffix)) {
      const a = document.createElement('a'); // Create <a>
      a.href = image.src; // Image Base64 Goes here
      a.download = `image${i}${suffix}`; // File name Here
      a.click(); // Downloaded file
    }
  });
};

getPhotos();
