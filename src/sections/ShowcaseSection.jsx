import React from 'react'

const ShowcaseSection = () => {
    return (
        <div id='work' className='app-showcase'>
            <div className='w-full'>
                <div className='.showcaselayout'>
                    {/*Left*/}
                    <div className='first-project-wrapper'>
                        <div className='image-wrapper'>
                            <img src='/images/card1.png'/>
                        </div>
                        <div className='text-content'>
                            <h2>Howl with Laughter with Howlarious-Hounds Random Jokes App</h2>
                            <p>Built with JavaScript, HTML, and CSS.
                                (And yes, there are also cute dog pictures).
                            </p>
                        </div>
                    </div>
                    {/*Right*/}
                </div>
            </div>
        </div>
    )
}
export default ShowcaseSection
