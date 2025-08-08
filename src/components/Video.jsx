export default function Video() {
  return (
    <div className="aspect-video w-full max-w-2xl mx-auto">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/Va0-RYIOjS8?si=QOQCLmWVwwG7KPgv?autoplay=1&loop=1&mute=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
        disablePictureInPicture
      ></iframe>
    </div>
  );
}
