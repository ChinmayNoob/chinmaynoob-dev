import BlurFade from "@/components/blur-fade"
import { Cards } from "@/components/cards"
import { CommandPalette } from "@/components/command-pallete"
import TextEffectWithExit from "@/components/headline"
import { Motion } from "@/components/motion"


const BLUR_FADE_DELAY = 0.04;


export default function Home() {
  return (
    <section>
      <Motion>
        <div className="flex-col flex flex-1 justify-center items-center space-y-1.5">
          <BlurFade
            delay={BLUR_FADE_DELAY}
            className="text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none flex items-center gap-3"
          >
            <div className="font-serif italic main-text-in">
              <TextEffectWithExit />
            </div>
          </BlurFade>
        </div>
      </Motion>

      <section className="prose prose-neutral mt-8 max-w-full dark:prose-invert">
        <Motion>
          <p className="text-base font-normal leading-relaxed">
            I&apos;m a <span className="font-bold text-black dark:text-white">full-stack developer</span> from India, having experience in working with various languages,frameworks and tools.
          </p>
        </Motion>
        <Motion className="flex justify-center">
          <CommandPalette />
        </Motion>
      </section>
      <Cards />

    </section>
  )
}

export const revalidate = 3600
