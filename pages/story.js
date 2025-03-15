import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

import { RoughNotation } from 'react-rough-notation'
import Image from '@/components/Image'

export default function Story() {
  return (
    <>
      <PageSEO title={`Story - ${siteMetadata.author}`} description="My personal story" />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            My Story
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            <div className="space-y-8">
              <div className="transition-transform duration-500">
                <h2 className="mb-4 text-2xl font-bold">
                  <RoughNotation type="underline" show={true} color="#FFFFFF" animationDelay={800}>
                    From Football Fields to Code Fields
                  </RoughNotation>
                </h2>
                <p className="mb-4">
                  My journey began on the football field, where I lived my dream as a professional
                  player. The discipline, teamwork, and strategic thinking I learned there continue
                  to influence my approach to software development. As a devoted{' '}
                  <RoughNotation
                    type="highlight"
                    show={true}
                    color="#FFFFFF"
                    animationDelay={1500}
                    className="text-black dark:text-black"
                  >
                    Real Madrid fan
                  </RoughNotation>
                  , I learned that excellence requires both passion and precision - qualities that
                  now define my work as a .NET developer.
                </p>
              </div>

              <div className="transition-transform duration-500">
                <h2 className="mb-4 text-2xl font-bold">
                  <RoughNotation type="underline" show={true} color="#4F46E5" animationDelay={2000}>
                    The Musical Developer
                  </RoughNotation>
                </h2>
                <p className="mb-4">
                  When I'm not crafting code, you'll find me with a guitar in hand. Music,
                  particularly singing and playing guitar, has been my creative outlet. Just as I
                  compose melodies, I compose elegant solutions in code, finding the perfect harmony
                  between functionality and design.
                </p>
              </div>

              <div className="transition-transform duration-500">
                <h2 className="mb-4 text-2xl font-bold">
                  <RoughNotation type="underline" show={true} color="#059669" animationDelay={2800}>
                    Chess: A Game of Strategy
                  </RoughNotation>
                </h2>
                <p className="mb-4">
                  Though I'm still learning the intricacies of chess, the game fascinates me. It's a
                  reminder that in both chess and coding, every move matters. The strategic thinking
                  and problem-solving skills required in chess parallel the challenges I tackle as a
                  .NET developer.
                </p>
              </div>

              <div className="transition-transform duration-500">
                <h2 className="mb-4 text-2xl font-bold">
                  <RoughNotation type="underline" show={true} color="#9333EA" animationDelay={3400}>
                    The Tech Journey
                  </RoughNotation>
                </h2>
                <p className="mb-4">
                  Today, as a .NET developer, I bring the same dedication and passion that drove my
                  football career into the world of technology. Each project is a new match, each
                  challenge a new goal to score, and each solution a victory to celebrate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
