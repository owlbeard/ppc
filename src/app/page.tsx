export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="sm:text-6xl text-3xl text-red-500">WHAT IS PPC?</h1>
      <iframe
        className="aspect-video h-full w-full"
        src="https://www.youtube.com/embed/5U6vOWfMCtk"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen={true}
      ></iframe>
      <p className="text-center sm:w-96 w-52 sm:text-2xl text-xl sm:pb-20">
        As thoroughly described in the video above by Payo himself, the term PPC
        means:<br></br>{' '}
        <span className="sm:text-3xl text-2xl text-red-500">
          Possibility, Positivity, Community!
        </span>
        <br></br> In this awesome website we live by these words:<br></br>{' '}
        <span className="sm:text-3xl text-2xl text-red-500">
          Possibility, Positivity, Community!
        </span>
      </p>
    </main>
  );
}
