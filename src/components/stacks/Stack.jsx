export default function Stack({ StackIcon = null, image = null }) {
  return (
    <article className="m-3 rounded-xl w-[125px] sm:w-[150px] bg-gradient-to-r from-amber-400 via-sky-400 to-blue-900 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] shadow-gray-700/25 hover:scale-110 hover:rotate-3 select-none">
      <div className="rounded-[10px] bg-gray-900 p-4">
        {image ? <img src={image} alt="stack" width="114px" height="114px" /> : null}
        {StackIcon ? <StackIcon className="w-full h-full" /> : null}
      </div>
    </article>
  );
}
