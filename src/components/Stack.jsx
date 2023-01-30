export default function Stack({ StackIcon = null}) {
  return (
    <article className="m-3 rounded-xl w-[150px] bg-gradient-to-r from-amber-400 via-sky-400 to-blue-900 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25">
      <div className="rounded-[10px] bg-white p-4 dark:bg-gray-900">
        <StackIcon className="w-full h-full" />
      </div>
    </article>
  );
}
