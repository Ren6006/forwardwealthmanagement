export default function SectionHeading({ title }) {
  return (
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl text-brandDark">{title}</h2>
      <div className="mt-4 h-[2px] w-20 mx-auto bg-brandAccent" />
    </div>
  );
}
