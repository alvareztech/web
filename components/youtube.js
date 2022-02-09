export default function YouTube({ videoId }) {
  return (
    <div class="relative" style={{ 'padding-top': '56.25%' }}>
      <iframe
        className="absolute inset-0 w-full h-full"
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
    </div>
  )
}
