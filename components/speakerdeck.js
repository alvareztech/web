export default function SpeakerDeck({slidesId}) {
  return (
    <div className="relative" style={{paddingTop: '56.25%'}}>
      <iframe
        className="absolute inset-0 w-full h-full"
        src={"https://speakerdeck.com/player/" + slidesId}
        title="Speaker Deck"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
    </div>
  )
}
