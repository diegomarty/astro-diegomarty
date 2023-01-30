export default function Stack({ StackIcon = null, iconColor = "white" }) {
  return (
    <article class="m-3 rounded-xl bg-gradient-to-r from-amber-400 via-sky-400 to-blue-900 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25">
      <div class="rounded-[10px] bg-white p-4  dark:bg-gray-900 sm:p-6 ">
        <StackIcon class={`h-24 w-24 text-${iconColor}`} />
      </div>
    </article>
  );
}
