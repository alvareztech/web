export default function Slideshare({ slidesId }) {
  return (
    <div className="relative" style={{ paddingTop: '56.25%' }}>
      <iframe
        className="absolute inset-0 w-full h-full"
        src={"//www.slideshare.net/slideshow/embed_code/key/" + slidesId}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
      </iframe>
    </div>
  )
}
