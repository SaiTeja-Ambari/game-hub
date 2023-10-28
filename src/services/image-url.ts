import noimage from '../assets/no-image-available-like-missing-picture.jpg'
const getCroppedImageURL = (url : string) => {
    if(!url) return noimage;
    const index = url.indexOf('media/') + 'media/'.length ;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageURL;