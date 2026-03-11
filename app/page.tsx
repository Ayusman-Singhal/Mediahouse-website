import dynamic from "next/dynamic"
import HeroHome from "@/components/blocks/hero-home"
import Footer from "@/components/blocks/footer"

const GameSelector = dynamic(() => import("@/components/blocks/game-selector"), { ssr: true })

export default function Home() {
  return (
    <main>
      <HeroHome />
      <GameSelector />
      <Footer />
    </main>
  )
}
