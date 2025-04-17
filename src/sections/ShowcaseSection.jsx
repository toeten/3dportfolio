import { useRef} from "react";
import { gsap } from "gsap"
import { ScrollTrigger} from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)



const ShowcaseSection = () => {
    const sectionRef =useRef(null)
    const project1Ref = useRef(null)
    const paytentialRef = useRef(null)
    const charonRef = useRef(null)




    useGSAP(() => {
        const projects = [project1Ref.current, paytentialRef.current, charonRef.current]
        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity:0
                },
                {
                    y:0,
                    opacity: 1,
                    duration:1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        })
        gsap.fromTo(
            sectionRef.current,
            {opacity: 0},
            {opacity: 1, duration:1.5}
        )
    }, [])

    return (
        <section id='work' ref={sectionRef} className='app-showcase'>
            <div className='w-full'>
                <div className='showcaselayout'>
                    {/*Left*/}
                    <div className='first-project-wrapper' ref={project1Ref}>
                        <div className='image-wrapper'>
                            <img src='/images/teeline-tracers-card.png'/>
                        </div>
                        <div className='text-content'>
                            <h2>Teeline-Tracers</h2>
                            <p className='text-white-50 md:text-xl'>
                                Built with TypeScript React, Firebase, and Konva.js.
                                Learn Teeline shorthand in an interactive tracing app.
                            </p>
                        </div>
                    </div>
                    {/*Right*/}
                    <div className='project-list-wrapper overflow-hidden'>
                        <div className='project' ref={paytentialRef}>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src='/images/paytential-card1.png' alt='paytential card'/>
                            </div>
                            <h2>Paytential - A Financial Literacy Simulator</h2>
                        </div>
                        <div className='project' ref={charonRef}>
                            <div className='image-wrapper bg-[#ffe7db]'>
                                <img src='/images/charon-card1.png' alt='charon card'/>
                            </div>
                            <h2>Charon - An AI Travel Assistant</h2>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection
