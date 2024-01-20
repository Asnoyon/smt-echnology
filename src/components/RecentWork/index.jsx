import { RecentWorkCarousel } from '../RecentWorkCarousel'
import { ButtonArrowTop } from '../button'

export const RecentWork = () => {
    return (
        <section className='py-24'>
            <div className="container">
                <div className="flex justify-between items-center gap-5">
                    <div className="font-heading font-black text-6xl">
                        <h2 className='mb-4 text-secondary'>Look at Our</h2>
                        <h2 className='text-darkColor'>Recent Work</h2>
                    </div>
                    <div>
                        <p className='text-2xl text-gray-400 max-w-2xl pb-10 font-content'>
                            Take a stroll through our recent work and discover the exciting journeys we've embarked on. From innovative designs to successful projects, join the fun and see the vibrant spirit that defines us!
                        </p>
                        <ButtonArrowTop name="See All Works" />
                    </div>
                </div>
                {/* Recent works carousel */}
                <div className="mt-28">
                    <RecentWorkCarousel />
                </div>
            </div>
        </section>
    )
}
