export default function Badge({ text, background, content }) {
  return (
    <span
      className={`${text} ${background} text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-2xl dark:bg-red-200 dark:text-red-900`}
    >
      {content}
    </span>
  );
}
