export default function ImageGallery({ images, title }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {images.map((image, index) => (
        <figure
          key={`${image}-${index}`}
          className={index === 0 ? "overflow-hidden rounded-lg md:col-span-2 md:row-span-2" : "overflow-hidden rounded-lg"}
        >
          <img
            src={image}
            alt={`${title} gallery ${index + 1}`}
            loading="lazy"
            className="h-full min-h-56 w-full object-cover"
          />
        </figure>
      ))}
    </div>
  );
}
