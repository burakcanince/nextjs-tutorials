export default async function About() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="font-semibold text-3xl">
          About
        </h1>
      </div>
    );
}
