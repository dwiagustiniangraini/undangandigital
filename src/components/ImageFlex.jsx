export default function ImageFlex({ imageOne, imageTwo }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <img src={imageOne} className="rounded-2xl" />
      <img src={imageTwo} className="rounded-2xl" />
    </div>
  );
}
