import React from "react";

const ImageCard = ({ image }) => {
    const tags = image.tags.split(',')

    return (
        <div className="text-5xl max-w-sm rounded overflow-hidden shadow-md">
        <img src={image.webformatURL} alt="" className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by {image.user}
          </div>
          <ul className="text-sm">
            <li><strong>Views: </strong>{image.views}</li>
            <li><strong>Downloads: </strong>{image.downloads}</li>
            <li><strong>Likes: </strong>{image.likes}</li>
          </ul>
        </div>
        <div className="px-6 py-5">
            {tags.map((tag, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #{tag}
            </span>
            ))}
        </div>
      </div>
    )
}

export default ImageCard