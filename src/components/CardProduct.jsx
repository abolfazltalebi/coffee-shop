
export default function CardProduct({ info }) {
  const { id, name, imageUrl, ingredients } = info;
  return (
    <div
      key={id}
      className="bg-rose-700 p-3 rounded-2xl flex flex-col gap-3 text-white"
    >
      <img src={imageUrl} alt={name} className="rounded-2xl" />
      <h2>{name}</h2>
      <p>ترکیبات: {ingredients || "اطلاعات در دسترس نیست"}</p>
    </div>
  );
}
