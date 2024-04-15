import MediaEmbed from "@/ui/components/media-embed";

const Page = () => {
  return (
    <main className="p-2 px-8">
      <h1 className="font-semibold text-xl">Orbital Deck</h1>
      <MediaEmbed mediaSrc="https://www.twitch.tv/dino_xx" />
    </main>
  )
}

export default Page;